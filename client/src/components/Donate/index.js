import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Label from 'react-bootstrap/FormLabel';
// import Input from 'react-bootstrap/InputGroup';


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
        <Modal.Body class="modal-body">Fill out your information below.
        <form>
          <div class="form-group">
            <label for="exampleEmail">Email address</label>
            <input type="email" class="form-control" id="exampleEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleDonation">Donation</label>
            <input type="number" class="form-control" id="exampleInputDonation" placeholder="$100.00"></input>
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Are you sure?</label>
          </div>
          <Button type="submit"class="secondary">Submit</Button>
        </form>
    </Modal.Body>
      </Modal>
    </section>
  );

}

export default Donate;