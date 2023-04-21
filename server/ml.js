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
  if (x[0] < 0.5) {
    res.send('Positive For Covid-19 ' + x);
  } else {
    res.send('Negative for Covid-19 ' + x);
  }
});

// // Use the express-fileupload middleware
//
// // loading model
// const tf = require('@tensorflow/tfjs');
// const tfnode = require('@tensorflow/tfjs-node');
// let model;
//
// async function loadModel() {
//   const handler = tfnode.io.fileSystem(path.join(__dirname, '/ml_model/model.json'));
//   model = await tf.loadLayersModel(handler);
//   console.log("Model loaded")
// }
//
// loadModel();
//
// router.get("/upload", (_req, res) => {
//   res.sendFile(path.join(__dirname, '/public/image_input.html'));
// })
//
//
// router.post("/processing", (req, res) => {
//   // Get the file that was set to our field named "image"
//   const { image } = req.files;
//
//   // Move the uploaded image to our upload folder
//   image.mv(__dirname + '/upload/' + image.name);
//
//   // ml things
//   function model_predict(img_path, model) {
//     return tf.browser.fromPixels(img_path)
//       .then(img => {
//         img = img.resizeNearestNeighbor([224, 224]).expandDims(0)
//         const preds = model.predict(img);
//         return preds.argMax().dataSync()[0];
//       });
//   }
//
//   // Make prediction
//   let preds = model_predict(image, model);
//
//   if (preds[0][0] == 0) {
//     prediction = 'Positive For Covid-19';
//   } else {
//     prediction = 'Negative for Covid-19';
//   }
//
//   // All good
//   res.send(image);
//   console.log(prediction)
// })
//
module.exports = router;
