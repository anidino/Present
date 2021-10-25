import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import cat from '../../assets/city.jpg';
import orange from '../../assets/orange.jpg';
import wave from '../../assets/sea.jpg';


function Playlists() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <section className="my-5">
        <h4 class="subhead" id="playlists">My Playlists</h4>
        <Button variant="secondary" onClick={handleShow}>
          Explore Music
      </Button>

        <Modal class="modal" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Explore Music</Modal.Title>
          </Modal.Header>
          <Modal.Body>Select a playlist to add it to your dashboard!</Modal.Body>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src= {cat}
      alt="First Playlist"
    />
    <Carousel.Caption>
      <h3>Playlist Name</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={wave}
      alt="Second Playlist"
    />

    <Carousel.Caption>
      <h3>Playlist Name</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={orange}
      alt="Third Playlist"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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