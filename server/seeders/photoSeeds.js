const { Schema, model } = require("mongoose");
const Photo = require("../models/photo");
const connect = require("../config/connection");
const fs = require("fs");

// const images = [
//   {
//     name: "Autumn Scene",
//     desc: "A beautiful autumn scene",
//     source: "./seeders/seedimages/autumnScene.jpg",
//   },
// ];

var image = new Photo({
  name: "Autumn Scene",
  desc: "A beautiful autumn scene",
  img: {
    data: fs.readFileSync("./seedPhotos/autumnScene.jpg"),
    contentType: "image/jpg",
  },
  source: "autumnScene.jpg",
});

image.save().then(() => console.log("SEEDED"));
