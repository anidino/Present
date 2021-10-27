import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import black from "../../assets/absolute-black-granite.jpg";
import { QUERY_PLAYLISTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";

function Playlists() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const { loading, error, data } = useQuery(QUERY_PLAYLISTS, {
    fetchPolicy: "cache-and-network"
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;


  const playlistPieceArray = [];

  const srcUrlArray = [];


  for (let i = 0; i < data.playlists.length; i++) {

    let playlistPiece = data.playlists[i].playlistUrl.split("us");

    playlistPieceArray.push(playlistPiece[1]);

    // console.log(playlistPiece[1]);

  }

  // console.log(playlistPieceArray);

  for (let i = 0; i < playlistPieceArray.length; i++) {

    let widgetUrl= "https://widget.deezer.com/widget/dark"

    let playlistUrl = playlistPieceArray[i];

    let combinedUrl = widgetUrl + playlistUrl; 

    srcUrlArray.push(combinedUrl);
  }

  // console.log(srcUrlArray);

  return (
    <>
      <section className="my-5">
        <h4 class="subhead" id="playlists">
          My Playlists
        </h4>
        <Button variant="secondary" onClick={handleShow}>
          Explore Music
        </Button>

        <Modal class="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title class="modal-title">Explore Music</Modal.Title>
          </Modal.Header>
          <Modal.Body class="modal-body">Select a playlist to add it to your dashboard!</Modal.Body>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {black}
      alt="First Playlist"
    />
    <Carousel.Caption>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      </div>
      <h3>{data.playlists[0].playlistName}</h3>
      <iframe title="deezer-widget" src={srcUrlArray[0]} width="400" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={black}
      alt="Second Playlist"
    />

    <Carousel.Caption>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      </div>
      <h3>{data.playlists[1].playlistName}</h3>
      <iframe title="deezer-widget" src={srcUrlArray[1]} width="400" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={black}
      alt="Third Playlist"
    />

    <Carousel.Caption>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      </div>
      <h3>{data.playlists[2].playlistName}</h3>
      <iframe title="deezer-widget" src={srcUrlArray[2]} width="400" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {black}
      alt="Fourth Playlist"
    />
    <Carousel.Caption>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      </div>
      <h3>{data.playlists[3].playlistName}</h3>
      <iframe title="deezer-widget" src={srcUrlArray[3]} width="400" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={black}
      alt="Fifth Playlist"
    />

    <Carousel.Caption>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      </div>
      <h3>{data.playlists[4].playlistName}</h3>
      <iframe title="deezer-widget" src={srcUrlArray[4]} width="400" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={black}
      alt="Sixth Playlist"
    />

    <Carousel.Caption>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      </div>
      <h3>{data.playlists[5].playlistName}</h3>
      <iframe title="deezer-widget" src={srcUrlArray[5]} width="400" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={black}
      alt="Seventh Playlist"
    />

    <Carousel.Caption>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      </div>
      <h3>{data.playlists[6].playlistName}</h3>
      <iframe title="deezer-widget" src={srcUrlArray[6]} width="400" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={black}
      alt="Eight Playlist"
    />

    <Carousel.Caption>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      </div>
      <h3>{data.playlists[7].playlistName}</h3>
      <iframe title="deezer-widget" src={srcUrlArray[7]} width="400" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={black}
      alt="Ninth Playlist"
    />

    <Carousel.Caption>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
      </div>
      <h3>{data.playlists[8].playlistName}</h3>
      <iframe title="deezer-widget" src={srcUrlArray[8]} width="400" height="250" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
    </Carousel.Caption>
    </Carousel.Item>
</Carousel>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button class="quote-button" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
}

export default Playlists;