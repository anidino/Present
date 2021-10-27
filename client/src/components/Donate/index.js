import React, { useState } from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
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
      <div class="container-fluid">
      <LinkPreview url='https://mhanational.org/donate-now'
        width="30%" />;

      {/* <LinkPreview url='https://www.nia.nih.gov/health/brain-donation-gift-future-generations'
        width="30%" />; */}

      {/* <LinkPreview url='https://alzfdn.org/support-us/donate/'
        width="30%" />; */}
        </div>

    </section>
  );

}

export default Donate;