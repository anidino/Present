const { Schema, model } = require("mongoose");
const User = require("../models/User");
const connect = require("../config/connection");

// ** IN SEEDERS DIRECTORY, TYPE ./userSeeds.js ** HIT TAB TO ENSURE CORRECT PATH ** //

const aUser = new User({
  username: "ani89",
  email: "ani89@gmail.com",
  password: "password",
  firstName: "Ani",
  lastName: "Cool",
  dob: new Date("10-08-89"),
  dashboardPhoto: "autumnScene.jpg",
});

aUser.save().then(() => console.log("SEEDED"));

const aUser2 = new User({
  username: "ryanCodes",
  email: "ryanCodes@gmail.com",
  password: "password",
  firstName: "Ryan",
  lastName: "Jolle",
  dob: new Date("10-08-89"),
  dashboardPhoto: "autumnScene.jpg",
});

aUser2.save().then(() => console.log("SEEDED2"));
