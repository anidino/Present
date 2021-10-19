const { Schema, model } = require("mongoose");
const Photo = require("../models/photo");
const connect = require("../config/connection");
const fs = require("fs");
const cloudinary = require("cloudinary");
// const images = [
//   {
//     name: "Autumn Scene",
//     desc: "A beautiful autumn scene",
//     source: "./seeders/seedimages/autumnScene.jpg",
//   },
// ];

// const image = new Photo({
//   name: "Autumn Scene",
//   desc: "A beautiful autumn scene",
//   img: {
//     data: fs.readFileSync("./seedPhotos/autumnScene.jpg"),
//     contentType: "image/jpg",
//   },
//   source: "autumnScene.jpg",
// });

// image.save().then(() => console.log("SEEDED"));

// image 1
const image1 = new Photo({
  name: "Pumpkin Chai",
  desc: "hot beverges in pumpkin mugs",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603959/images/pumpkinChai_eyguxs.jpg",
  // { public_id: "pumpkin_chai" },
  function(req, res) {
    console.log(res);
  },
});
image1.save().then(() => console.log("SEEDED 1"));

// image 2
const image2 = new Photo({
  name: "Europe Night",
  desc: "lovely night somewhere in Europe",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603958/images/europeNight_hoqbk9.jpg",

  function(req, res) {
    console.log(res);
  },
});
image2.save().then(() => console.log("SEEDED 2"));

// image 3
const image3 = new Photo({
  name: "Dank Breakfast",
  desc: "a really nice looking breakfast",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603958/images/dankBreakfast_qrcp6n.jpg",

  function(req, res) {
    console.log(res);
  },
});
image3.save().then(() => console.log("SEEDED 3"));

// image 4
const image4 = new Photo({
  name: "Pug Running",
  desc: "a pug running around",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603957/images/pugRunning_gjkrrs.jpg",

  function(req, res) {
    console.log(res);
  },
});
image4.save().then(() => console.log("SEEDED 4"));

// image 5
const image5 = new Photo({
  name: "Ornaments",
  desc: "Christmas ornaments",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603957/images/ornaments_hlkxbq.jpg",

  function(req, res) {
    console.log(res);
  },
});
image5.save().then(() => console.log("SEEDED 5"));

// image 6
const image6 = new Photo({
  name: "Coffee",
  desc: "coffee assortments",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603956/images/coffee_mxbu6c.jpg",

  function(req, res) {
    console.log(res);
  },
});
image6.save().then(() => console.log("SEEDED 6"));

// image 7
const image7 = new Photo({
  name: "Cherry Blossoms",
  desc: "Cherry Blossoms in Spring",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603956/images/cherryBlossoms_lppsxr.jpg",

  function(req, res) {
    console.log(res);
  },
});
image7.save().then(() => console.log("SEEDED 7"));

// image 8
const image8 = new Photo({
  name: "Green LandScape",
  desc: "Beautiful Green Landscape",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603956/images/greenLandscape_ecxmfi.jpg",

  function(req, res) {
    console.log(res);
  },
});
image8.save().then(() => console.log("SEEDED 8"));
