const { Schema, model } = require('mongoose');
const Playlist = require('../models/Playlist');
const connect = require("../config/connection");

const jazzPlaylist = new Playlist({
    playlistUrl: "https://www.deezer.com/us/playlist/9598835682",
    playlistName: "Jazz",
    function(req, res) {
        console.log(res);
      },
});

jazzPlaylist.save().then(() => console.log("Seeded Jazz Playlist"));


const classicalPlaylist = new Playlist({
    playlistUrl: "https://www.deezer.com/us/playlist/9599690682",
    playlistName: "Classical",
    function(req, res) {
        console.log(res);
      },
});

classicalPlaylist.save().then(() => console.log("Seeded Classical Playlist"));


const countryPlaylist = new Playlist({
    playlistUrl: "https://www.deezer.com/us/playlist/9599733422",
    playlistName: "Country",
    function(req, res) {
        console.log(res);
      },
});

countryPlaylist.save().then(() => console.log("Seeded Country Playlist"));


const hiphopPlaylist = new Playlist({
    playlistUrl: "https://www.deezer.com/us/playlist/9599718542",
    playlistName: "Hip-Hop",
    function(req, res) {
        console.log(res);
      },
});

hiphopPlaylist.save().then(() => console.log("Seeded Hip-hop Playlist"));


const mariachiPlaylist = new Playlist({
    playlistUrl: "https://www.deezer.com/us/playlist/9599669022",
    playlistName: "Mariachi",
    function(req, res) {
        console.log(res);
      },
});

mariachiPlaylist.save().then(() => console.log("Seeded Mariachi Playlist"));


const metalPlaylist = new Playlist({
    playlistUrl: "https://www.deezer.com/us/playlist/9599709382",
    playlistName: "Metal",
    function(req, res) {
        console.log(res);
      },
});

metalPlaylist.save().then(() => console.log("Seeded Metal Playlist"));


const operaPlaylist = new Playlist({
    playlistUrl: "https://www.deezer.com/us/playlist/9599678442",
    playlistName: "Opera",
    function(req, res) {
        console.log(res);
      },
});

operaPlaylist.save().then(() => console.log("Seeded Opera Playlist"));


const rnbPlaylist = new Playlist({
    playlistUrl: "https://www.deezer.com/us/playlist/9599616842",
    playlistName: "R n B",
    function(req, res) {
        console.log(res);
      },
});

rnbPlaylist.save().then(() => console.log("Seeded RnB Playlist"));


const rockPlaylist = new Playlist({
    playlistUrl: "https://www.deezer.com/us/playlist/9599631022",
    playlistName: "Rock",
    function(req, res) {
        console.log(res);
      },
});

rockPlaylist.save().then(() => console.log("Seeded Rock Playlist"));