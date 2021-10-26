import React, {useState} from 'react';
import Button from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal'

function PopUp() {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
              Click here to log in or create an account.
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Start Listening</Modal.Title>
              </Modal.Header>
              {/* <Modal.Body>    <Link to="/signup" class="signup-link"> or create an account</Link></Modal.Body> */}
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      

export default PopUp;