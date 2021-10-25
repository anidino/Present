import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Donate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return (
<section className="my-5">
  <h4 class="subhead" id="donate">Donate</h4>

  <button class="quote-button" onClick={handleShow}>Donate to Alzheimer's Association Here</button>
  <Modal class="modal" show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title class="modal-title">Donate Here</Modal.Title>
    </Modal.Header>
    <Modal.Body class="modal-body">Fill out your information below.</Modal.Body>
  </Modal>
</section>
    );

}

export default Donate;