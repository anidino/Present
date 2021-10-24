import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import weird from '../../assets/space.jpg';
import peace from '../../assets/lightbulb.jpg';
import forest from '../../assets/leaf.jpg';
import art from '../../assets/art.jpg';
import clouds from '../../assets/clouds.jpg';
import adventure from '../../assets/adventure.jpg';



function Gallery() {
    return (
        <section id="playlists">
            <br></br>

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={clouds} />
                        <Card.Body>

                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Happy</Form.Label>
                                        <Form.Control as="textarea" placeholder="Notes here. Memories and Feelings this music brings." rows={3} />
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={adventure} />
                        <Card.Body>

                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Adventure</Form.Label>
                                        <Form.Control as="textarea" placeholder="Notes here. Memories and Feelings this music brings." rows={3} />
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            <br></br>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={weird} />
                        <Card.Body>

                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Explore</Form.Label>
                                        <Form.Control as="textarea" placeholder="Notes here. Memories and Feelings this music brings." rows={3} />
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={art} />
                        <Card.Body>

                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Sleep</Form.Label>
                                        <Form.Control as="textarea" placeholder="Notes here. Memories and Feelings this music brings." rows={3} />
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <br></br>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={forest} />
                        <Card.Body>

                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Serene</Form.Label>
                                        <Form.Control as="textarea" placeholder="Notes here. Memories and Feelings this music brings." rows={3} />
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={peace} />
                        <Card.Body>

                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Work</Form.Label>
                                        <Form.Control as="textarea" placeholder="Notes here. Memories and Feelings this music brings." rows={3} />
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </section>

    );

}
export default Gallery;