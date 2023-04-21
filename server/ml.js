const router = require("express").Router();
const path = require('path');
const { createCanvas, loadImage } = require('canvas');
const port = 5000;

// loading model
const tf = require('@tensorflow/tfjs');
const tfnode = require('@tensorflow/tfjs-node');
let model;

async function loadModel() {
  const handler = tfnode.io.fileSystem(path.join(__dirname, '/ml_model/model.json'));
  model = await tf.loadLayersModel(handler);
  console.log("Model loaded")
}

loadModel();

async function modelPredict(imgPath) {
  const img = await loadImage(imgPath);
  const canvas = createCanvas(224, 224);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, 224, 224);
  const tensor = tf.browser.fromPixels(canvas);
  const tensorNormalized = tensor.div(255);
  const tensorExpanded = tensorNormalized.expandDims(0);
  const preds = model.predict(tensorExpanded);
  return preds;
}

router.get('/upload', (req, res) => {
  res.sendFile(__dirname + '/public/image_input.html');
});

router.post('/processing', async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const file = req.files.image;
  const filePath = __dirname + '/uploads/' + file.name;

  await file.mv(filePath);

  const preds = await modelPredict(filePath);
  let x = preds.arraySync();
  console.log(x)
  if (x[0] > 0.2) {
    res.redirect(process.env.CLIENT_URL + 'ml/success')
  } else {
    res.redirect(process.env.CLIENT_URL + 'ml/failure');
  }
});

module.exports = router;
