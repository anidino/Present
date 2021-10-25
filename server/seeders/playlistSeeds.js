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

// const jazzPlaylist = new Playlist({
//   playlistUrl: "https://www.deezer.com/us/playlist/9598835682",
//   playlistName: "Jazz",
// });

// jazzPlaylist.save().then(() => console.log("Seeded Jazz Playlist"));

// const classicalPlaylist = new Playlist({
//   playlistUrl: "https://www.deezer.com/us/playlist/9599690682",
//   playlistName: "Classical",
// });

// classicalPlaylist.save().then(() => console.log("Seeded Classical Playlist"));

// const countryPlaylist = new Playlist({
//   playlistUrl: "https://www.deezer.com/us/playlist/9599733422",
//   playlistName: "Country",
// });

// countryPlaylist.save().then(() => console.log("Seeded Country Playlist"));

// const hiphopPlaylist = new Playlist({
//   playlistUrl: "https://www.deezer.com/us/playlist/9599718542",
//   playlistName: "Hip-Hop",
// });

// hiphopPlaylist.save().then(() => console.log("Seeded Hip-hop Playlist"));

// const mariachiPlaylist = new Playlist({
//   playlistUrl: "https://www.deezer.com/us/playlist/9599669022",
//   playlistName: "Mariachi",
// });

// mariachiPlaylist.save().then(() => console.log("Seeded Mariachi Playlist"));

// const metalPlaylist = new Playlist({
//   playlistUrl: "https://www.deezer.com/us/playlist/9599709382",
//   playlistName: "Metal",
// });

// metalPlaylist.save().then(() => console.log("Seeded Metal Playlist"));

// const operaPlaylist = new Playlist({
//   playlistUrl: "https://www.deezer.com/us/playlist/9599678442",
//   playlistName: "Opera",
// });

// operaPlaylist.save().then(() => console.log("Seeded Opera Playlist"));

// const rnbPlaylist = new Playlist({
//   playlistUrl: "https://www.deezer.com/us/playlist/9599616842",
//   playlistName: "R n B",
// });

// rnbPlaylist.save().then(() => console.log("Seeded RnB Playlist"));

// const rockPlaylist = new Playlist({
//   playlistUrl: "https://www.deezer.com/us/playlist/9599631022",
//   playlistName: "Rock",
// });
// rockPlaylist.save().then(() => console.log("Seeded Rock Playlist"));
