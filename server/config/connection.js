const mongoose = require("mongoose");
const cloudinary = require("cloudinary");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/present", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

// import cloudinary for images
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

module.exports = mongoose.connection;
