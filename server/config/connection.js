const mongoose = require("mongoose");
// const cloudinary = require("cloudinary");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/present", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useCreateIndex: true,
  //   useFindAndModify: false,
});

// import cloudinary for images
// cloudinary.config({
//   cloud_name: "anidino89",
//   api_key: "766138983891928",
//   api_secret: "yQf880jEyYWrmMZ3lVgi1gmKamU",
// });

module.exports = mongoose.connection;
