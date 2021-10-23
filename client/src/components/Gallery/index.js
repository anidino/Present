import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import weird from '../../assets/cat.jpg';
import travel from '../../assets/travel.jpg';
import explore from '../../assets/explore.jpg';
import peace from '../../assets/peace.jpg';
import forest from '../../assets/forest.jpg';
import pray from '../../assets/pray.jpg';


function Gallery() {
    return (

        // i think this is how we will need to set them up once wee get API data
        //     <Container>
        //     <Row>
        //         {playerData.map((playerData, k) => (
        //             <Col key={k} xs={12} md={4} lg={3}>
        //                 <Card >
        //                     <Card.Img src="https://via.placeholder.com/150x75" />

        //                     <Card.Body>
        //                         <Card.Title>{playerData.name}</Card.Title>
        //                         <Card.Text>{playerData.team_name}</Card.Text>
        //                     </Card.Body>
        //                 </Card>
        //             </Col>
        //         ))}
        //     </Row>
        // </Container>

        <section id="playlists">
            <br></br>

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={weird} />
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
                        <Card.Img variant="top" src={travel} />
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
                        <Card.Img variant="top" src={explore} />
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
                        <Card.Img variant="top" src={pray} />
                        <Card.Body>

                            <Card.Text>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Pray</Form.Label>
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
                                        <Form.Label>Peace</Form.Label>
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