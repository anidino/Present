const { Schema, model } = require("mongoose");
const User = require("../models/User");
const connect = require("../config/connection");

// ** IN SEEDERS DIRECTORY, TYPE ./userSeeds.js ** HIT TAB TO ENSURE CORRECT PATH ** //

const aUser = new User({
  username: "ani089",
  email: "ani089@gmail.com",
  password: "password",
  firstName: "Ani",
  lastName: "Cool",
  dob: new Date("10-08-89"),
  dashboardPhoto:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603953/images/autumnScene_x5sjyt.jpg",
});

aUser.save().then(() => console.log("SEEDED"));

const aUser2 = new User({
  username: "ryanC0des",
  email: "ryanC0des@gmail.com",
  password: "password",
  firstName: "Ryan",
  lastName: "Jolle",
  dob: new Date("10-08-89"),
  dashboardPhoto:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603953/images/autumnScene_x5sjyt.jpg",
});

aUser2.save().then(() => console.log("SEEDED2"));

const aUser3 = new User({
  username: "testUser123",
  email: "testUser123@gmail.com",
  password: "password",
  firstName: "Ryan",
  lastName: "Jolle",
  dob: new Date("10-08-89"),
  dashboardPhoto:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603953/images/autumnScene_x5sjyt.jpg",
});

aUser3.save().then(() => console.log("SEEDED3"));

const aUser4 = new User({
  username: "jorgeCodes",
  email: "jorgeCodes@gmail.com",
  password: "password",
  firstName: "Jorge",
  lastName: "Codes",
  dob: new Date("10-08-89"),
  dashboardPhoto:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603953/images/autumnScene_x5sjyt.jpg",
});

aUser4.save().then(() => console.log("SEEDED4"));

const aUser5 = new User({
  username: "devinCodes",
  email: "devinCodes@gmail.com",
  password: "password",
  firstName: "Devin",
  lastName: "Codes",
  dob: new Date("10-08-89"),
  dashboardPhoto:
    "https://res.cloudinary.com/anidino89/image/upload/v1634603953/images/autumnScene_x5sjyt.jpg",
});

aUser5.save().then(() => console.log("SEEDED5"));
