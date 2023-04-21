const router = require("express").Router();
const fileUpload = require("express-fileupload")
import * as tf from '@tensorflow/tfjs';
const model = await tf.loadLayersModel('./ml_model/model.json');

router.post("/upload", (req,res) => {
  // Get the file that was set to our field named "image"
  const { image } = req.files;

  // If no image submitted, exit
  if (!image) return res.sendStatus(400);

  // If does not have image mime type prevent from uploading
  if (/^image/.test(image.mimetype)) return res.sendStatus(400);

  // Move the uploaded image to our upload folder
  image.mv(__dirname + '/upload/' + image.name);
  let file_path = __dirname + '/upload/' + image.name

  // ml things
  async function model_predict(img_path, model) {
      const img = await tf.browser.fromPixels(img_path);
      const xtest_image = img.reshape([1, 224, 224, 3]);
      const preds = model.predict(xtest_image);
      return preds.argMax().dataSync()[0];
  }

  // Make prediction
  let preds = model_predict(file_path, model);
  
  if (preds[0][0] == 0) {
      prediction = 'Positive For Covid-19';
  } else {
      prediction = 'Negative for Covid-19';
  }

  // All good
  res.sendStatus(200);
})
