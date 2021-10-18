const { Schema, model } = require("mongoose");
const User = require("../models/User");
const connect = require("../config/connection");

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
