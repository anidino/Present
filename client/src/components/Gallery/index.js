import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import weird from '../../assets/cat.jpg';
import travel from '../../assets/travel.jpg';


function Gallery() {
    return (
        <section id="playlists">
            <br></br>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={weird} />
                            <Card.Body>
                              
                                <Card.Text>
                                    <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Happy</Form.Label>
    <Form.Control as="textarea" placeholder="Notes here. Memories and Feelings this music brings."rows={3} />
  </Form.Group>


                                    </Form>
                                   
          </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
<br></br>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={weird} />
                            <Card.Body>
                              
                                <Card.Text>
                                    <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Happy</Form.Label>
    <Form.Control as="textarea" placeholder="Notes here. Memories and Feelings this music brings."rows={3} />
  </Form.Group>


                                    </Form>
                                   
          </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>

    );

                }
export default Gallery;