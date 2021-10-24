const { Schema, model } = require("mongoose");
const DashboardPhoto = require("../models/DashboardPic");
const connect = require("../config/connection");
const fs = require("fs");
const cloudinary = require("cloudinary");

// ** IN SEEDERS DIRECTORY, TYPE node ./dashboardSeeds.js ** HIT TAB TO ENSURE CORRECT PATH ** //

// image 1
const image1 = new DashboardPhoto({
  name: "Night Moon Landscape",
  desc: "Full moon at night",
  img: {
    contentType: "image/jpg",
  },
  imageLink:
    "https://res.cloudinary.com/anidino89/image/upload/v1635015535/images/landScapeMoon3_z15rxe.jpg",
  // { public_id: "pumpkin_chai" },
  function(req, res) {
    console.log(res);
  },
});
image1.save().then(() => console.log("SEEDED 1"));

// image 2
const image2 = new DashboardPhoto({
  name: "Landscape",
  desc: "lovely landscape",
  img: {
    contentType: "image/jpg",
  },
  imageLink:
    "https://res.cloudinary.com/anidino89/image/upload/v1635015535/images/landScape2_nihpw9.jpg",

  function(req, res) {
    console.log(res);
  },
});
image2.save().then(() => console.log("SEEDED 2"));

// // image 3
// const image3 = new DashboardPhoto({
//   name: "Dank Breakfast",
//   desc: "a really nice looking breakfast",
//   img: {
//     contentType: "image/jpg",
//   },
//   imageLink:
//     "https://res.cloudinary.com/anidino89/image/upload/v1634603958/images/dankBreakfast_qrcp6n.jpg",

//   function(req, res) {
//     console.log(res);
//   },
// });
// image3.save().then(() => console.log("SEEDED 3"));

// // image 4
// const image4 = new DashboardPhoto({
//   name: "Pug Running",
//   desc: "a pug running around",
//   img: {
//     contentType: "image/jpg",
//   },
//   imageLink:
//     "https://res.cloudinary.com/anidino89/image/upload/v1634603957/images/pugRunning_gjkrrs.jpg",

//   function(req, res) {
//     console.log(res);
//   },
// });
// image4.save().then(() => console.log("SEEDED 4"));

// // image 5
// const image5 = new DashboardPhoto({
//   name: "Ornaments",
//   desc: "Christmas ornaments",
//   img: {
//     contentType: "image/jpg",
//   },
//   imageLink:
//     "https://res.cloudinary.com/anidino89/image/upload/v1634603957/images/ornaments_hlkxbq.jpg",

//   function(req, res) {
//     console.log(res);
//   },
// });
// image5.save().then(() => console.log("SEEDED 5"));

// // image 6
// const image6 = new DashboardPhoto({
//   name: "Coffee",
//   desc: "coffee assortments",
//   img: {
//     contentType: "image/jpg",
//   },
//   imageLink:
//     "https://res.cloudinary.com/anidino89/image/upload/v1634603956/images/coffee_mxbu6c.jpg",

//   function(req, res) {
//     console.log(res);
//   },
// });
// image6.save().then(() => console.log("SEEDED 6"));

// // image 7
// const image7 = new DashboardPhoto({
//   name: "Cherry Blossoms",
//   desc: "Cherry Blossoms in Spring",
//   img: {
//     contentType: "image/jpg",
//   },
//   imageLink:
//     "https://res.cloudinary.com/anidino89/image/upload/v1634603956/images/cherryBlossoms_lppsxr.jpg",

//   function(req, res) {
//     console.log(res);
//   },
// });
// image7.save().then(() => console.log("SEEDED 7"));

// // image 8
// const image8 = new DashboardPhoto({
//   name: "Green LandScape",
//   desc: "Beautiful Green Landscape",
//   img: {
//     contentType: "image/jpg",
//   },
//   imageLink:
//     "https://res.cloudinary.com/anidino89/image/upload/v1634603956/images/greenLandscape_ecxmfi.jpg",

//   function(req, res) {
//     console.log(res);
//   },
// });
// image8.save().then(() => console.log("SEEDED 8"));

// // image 9
// const image9 = new DashboardPhoto({
//   name: "Dog with Fan",
//   desc: "Dog with floppy ears and fan",
//   img: {
//     contentType: "image/jpg",
//   },
//   imageLink:
//     "https://res.cloudinary.com/anidino89/image/upload/v1634603955/images/dogWithFan_la2sxc.jpg",

//   function(req, res) {
//     console.log(res);
//   },
// });
// image9.save().then(() => console.log("SEEDED 9"));

// // image 10
// const image10 = new DashboardPhoto({
//   name: "Kitten and Puppy",
//   desc: "Cute kitten and puppy",
//   img: {
//     contentType: "image/jpg",
//   },
//   imageLink:
//     "https://res.cloudinary.com/anidino89/image/upload/v1634603954/images/kittenPuppy_qan5h2.jpg",

//   function(req, res) {
//     console.log(res);
//   },
// });
// image10.save().then(() => console.log("SEEDED 10"));
