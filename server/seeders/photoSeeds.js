const { Schema, model } = require("mongoose");
const Photo = require("../models/photo");
const connect = require("../config/connection");
const fs = require("fs");
const cloudinary = require("cloudinary");

// ** IN SEEDERS DIRECTORY, TYPE node ./photoseeds.js ** HIT TAB TO ENSURE CORRECT PATH ** // 

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

// image 9
const image9 = new Photo({
  name: "Dog with Fan",
  desc: "Dog with floppy ears and fan",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603955/images/dogWithFan_la2sxc.jpg",

  function(req, res) {
    console.log(res);
  },
});
image9.save().then(() => console.log("SEEDED 9"));

// image 10
const image10 = new Photo({
  name: "Kitten and Puppy",
  desc: "Cute kitten and puppy",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603954/images/kittenPuppy_qan5h2.jpg",

  function(req, res) {
    console.log(res);
  },
});
image10.save().then(() => console.log("SEEDED 10"));

// image 11
const image11 = new Photo({
  name: "Autumn Scene",
  desc: "Colorful leaves and sunshine on a fall day",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603953/images/autumnScene_x5sjyt.jpg",

  function(req, res) {
    console.log(res);
  },
});
image11.save().then(() => console.log("SEEDED 11"));

// image 12
const image12 = new Photo({
  name: "Scenic Walkway",
  desc: "Walkway through the clouds",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603952/images/cloudsWalkway_jlq5ij.jpg",

  function(req, res) {
    console.log(res);
  },
});
image12.save().then(() => console.log("SEEDED 12"));

// image 13
const image13 = new Photo({
  name: "Holiday Scene",
  desc: "Holiday scene in the snow",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603952/images/holidayScene_tcxqa4.jpg",

  function(req, res) {
    console.log(res);
  },
});
image13.save().then(() => console.log("SEEDED 13"));

// image 14
const image14 = new Photo({
  name: "Blue Sea",
  desc: "Beautiful blue sea",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603951/images/blueSea_ov5uoe.jpg",

  function(req, res) {
    console.log(res);
  },
});
image14.save().then(() => console.log("SEEDED 14"));

// image 15
const image15 = new Photo({
  name: "Mountains",
  desc: "Beautiful mountains",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603949/images/beautifulMountains_ablbtg.jpg",

  function(req, res) {
    console.log(res);
  },
});
image15.save().then(() => console.log("SEEDED 15"));

// image 16
const image16 = new Photo({
  name: "Beach Sunset",
  desc: "Colorful Beach Sunset",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603948/images/beachSunset_tutiqk.jpg",

  function(req, res) {
    console.log(res);
  },
});
image16.save().then(() => console.log("SEEDED 16"));

// image 17
const image17 = new Photo({
  name: "Cats and Laptop",
  desc: "Cats gaze at laptop",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603948/images/catsLaptop_z0mu6p.jpg",

  function(req, res) {
    console.log(res);
  },
});
image17.save().then(() => console.log("SEEDED 17"));

// image 18
const image18 = new Photo({
  name: "Greece",
  desc: "A beautiful view in Greece",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603948/images/greece_mbou6a.jpg",

  function(req, res) {
    console.log(res);
  },
});
image18.save().then(() => console.log("SEEDED 18"));

// image 19
const image19 = new Photo({
  name: "Green Hills",
  desc: "Lovely green hills",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603947/images/greenHills_qfla5d.jpg",

  function(req, res) {
    console.log(res);
  },
});
image19.save().then(() => console.log("SEEDED 19"));

// image 20
const image20 = new Photo({
  name: "Cherry Blossoms",
  desc: "Cherry blossoms in spring",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603946/images/waterCherryB_fxendx.jpg",

  function(req, res) {
    console.log(res);
  },
});
image20.save().then(() => console.log("SEEDED 20"));

// image 21
const image21 = new Photo({
  name: "White Flowers",
  desc: "White flowers with green background",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603946/images/whiteFlowersGreen_oh6wq2.jpg",

  function(req, res) {
    console.log(res);
  },
});
image21.save().then(() => console.log("SEEDED 21"));

// image 22
const image22 = new Photo({
  name: "Warm Beverages",
  desc: "Delicious warm beverages",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603946/images/warmBeverages_mbjest.jpg",

  function(req, res) {
    console.log(res);
  },
});
image22.save().then(() => console.log("SEEDED 22"));

// image 23
const image23 = new Photo({
  name: "Grand Canyon",
  desc: "View of the Grand Canyon",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603944/images/grandCanyon_ykrtkb.jpg",

  function(req, res) {
    console.log(res);
  },
});
image23.save().then(() => console.log("SEEDED 23"));

// image 24
const image24 = new Photo({
  name: "Floral Wallpaper",
  desc: "Floral wallpaper beige background",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603943/images/floralWallpaper_lkexxg.jpg",

  function(req, res) {
    console.log(res);
  },
});
image24.save().then(() => console.log("SEEDED 24"));

// image 25
const image25 = new Photo({
  name: "White Flower Red",
  desc: "White flower red background",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603942/images/whiteFlowerRed_tuaddw.jpg",

  function(req, res) {
    console.log(res);
  },
});
image25.save().then(() => console.log("SEEDED 25"));

// image 26
const image26 = new Photo({
  name: "Puppy Rose",
  desc: "Puppy with Rose",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603942/images/puppyWithRose_qgdmxz.jpg",

  function(req, res) {
    console.log(res);
  },
});
image26.save().then(() => console.log("SEEDED 26"));

// image 27
const image27 = new Photo({
  name: "Tropical Beach",
  desc: "Beautiful Tropical Beach",
  img: {
    contentType: "image/jpg",
  },
  source:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603942/images/tropicalBeach_tqndol.jpg",

  function(req, res) {
    console.log(res);
  },
});
image27.save().then(() => console.log("SEEDED 27"));
