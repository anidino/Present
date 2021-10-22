import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import weird from '../../assets/cat.jpg';
import travel from '../../assets/travel.jpg';


function Gallery(props) {
    const currentCategory = {
        name: "active",
        description: "upbeat songs"
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>


            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={weird} />
                            <Card.Body>
                                <Card.Title>Fun</Card.Title>
                                <Card.Text>
                                    My notes here. i.e. How I feel when listening to this and what I remember.
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