const { Schema, model } = require("mongoose");
const Playlist = require("../models/Playlist");
const connect = require("../config/connection");

const jazzPlaylist = new Playlist({
  playlistUrl: "https://www.deezer.com/us/playlist/9598835682",
  playlistName: "Jazz",

  function(req, res) {
    console.log(res);
  },
});

jazzPlaylist.save().then(
  () => console.log("SEEDED Jazz"),
  (err) => console.log(err)
);

const classicalPlaylist = new Playlist({
  playlistUrl: "https://www.deezer.com/us/playlist/9599690682",
  playlistName: "Classical",

  function(req, res) {
    console.log(res);
  },
});

classicalPlaylist.save().then(
  () => console.log("SEEDED Classical"),
  (err) => console.log(err)
);

const hipHopPlaylist = new Playlist({
  playlistUrl: "https://www.deezer.com/us/playlist/9599718542",
  playlistName: "Hip-Hop",

  function(req, res) {
    console.log(res);
  },
});

hipHopPlaylist.save().then(
  () => console.log("SEEDED Hip-Hop"),
  (err) => console.log(err)
);

const metalPlaylist = new Playlist({
  playlistUrl: "https://www.deezer.com/us/playlist/9599709382",
  playlistName: "Metal",

  function(req, res) {
    console.log(res);
  },
});

metalPlaylist.save().then(
  () => console.log("SEEDED Metal"),
  (err) => console.log(err)
);

const rnbPlaylist = new Playlist({
  playlistUrl: "https://www.deezer.com/us/playlist/9599616842",
  playlistName: "R&B",

  function(req, res) {
    console.log(res);
  },
});

rnbPlaylist.save().then(
  () => console.log("SEEDED R&B"),
  (err) => console.log(err)
);

const mariachiPlaylist = new Playlist({
  playlistUrl: "https://www.deezer.com/us/playlist/9599669022",
  playlistName: "R&B",

  function(req, res) {
    console.log(res);
  },
});

mariachiPlaylist.save().then(
  () => console.log("SEEDED Mariachi"),
  (err) => console.log(err)
);

const operaPlaylist = new Playlist({
  playlistUrl: "https://www.deezer.com/us/playlist/9599678442",
  playlistName: "Opera",

  function(req, res) {
    console.log(res);
  },
});

operaPlaylist.save().then(
  () => console.log("SEEDED Opera"),
  (err) => console.log(err)
);

const rockPlaylist = new Playlist({
  playlistUrl: "https://www.deezer.com/us/playlist/9599631022",
  playlistName: "Opera",

  function(req, res) {
    console.log(res);
  },
});

rockPlaylist.save().then(
  () => console.log("SEEDED Rock"),
  (err) => console.log(err)
);

const countryPlaylist = new Playlist({
  playlistUrl: "https://www.deezer.com/us/playlist/9599733422",
  playlistName: "Opera",

  function(req, res) {
    console.log(res);
  },
});

countryPlaylist.save().then(
  () => console.log("SEEDED Country"),
  (err) => console.log(err)
);
