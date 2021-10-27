import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { QUERY_PHOTOS_and_PLAYLISTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';


// This is the exact styling for the playlist iframe that will fit into our gallery components nicely 
//  <iframe title="deezer-widget" src={srcUrlArray[0]} width="785" height="150" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>

function Gallery() {

    const { loading, error, data } = useQuery(QUERY_PHOTOS_and_PLAYLISTS, {
        fetchPolicy: "cache-and-network"
      });
    
        if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      const imageLinkArray = [];

      for (let i = 0; i < data.photos.length; i++) {
        
        let imageLink = data.photos[i].imageLink;
        
        imageLinkArray.push(imageLink);
        
      }

      console.log(imageLinkArray);

      const playlistPieceArray = [];

      const srcUrlArray = [];
    
    
      for (let i = 0; i < data.playlists.length; i++) {
    
        let playlistPiece = data.playlists[i].playlistUrl.split("us");
    
        playlistPieceArray.push(playlistPiece[1]);
    
      }
    

      for (let i = 0; i < playlistPieceArray.length; i++) {
    
        let widgetUrl= "https://widget.deezer.com/widget/dark"
    
        let playlistUrl = playlistPieceArray[i];
    
        let combinedUrl = widgetUrl + playlistUrl; 
    
        srcUrlArray.push(combinedUrl);
      }
    
      console.log(srcUrlArray);
      console.log(srcUrlArray[0]);



    return (


        <section id="playlists">
            <br></br>

            {/* <iframe 
                title="deezer-widget" 
                src={srcUrlArray[0]} 
                width="785" 
                height="150" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media; clipboard-write">
            </iframe>
         */}

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={imageLinkArray[0]} />
                        <Card.Body>      
                        <iframe 
                            title="deezer-widget" 
                            src={srcUrlArray[0]} 
                            width="785" 
                            height="150" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media; clipboard-write">
                        </iframe>
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
                        <Card.Img variant="top" src={imageLinkArray[1]} />
                        <Card.Body>
                        <iframe 
                            title="deezer-widget" 
                            src={srcUrlArray[1]} 
                            width="785" 
                            height="150" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media; clipboard-write">
                        </iframe>
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
                        <Card.Img variant="top" src={imageLinkArray[2]} />
                        <Card.Body>
                        <iframe 
                            title="deezer-widget" 
                            src={srcUrlArray[2]} 
                            width="785" 
                            height="150" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media; clipboard-write">
                        </iframe>
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
                        <Card.Img variant="top" src={imageLinkArray[3]} />
                        <Card.Body>
                        <iframe 
                            title="deezer-widget" 
                            src={srcUrlArray[3]} 
                            width="785" 
                            height="150" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media; clipboard-write">
                        </iframe>
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
                        <Card.Img variant="top" src={imageLinkArray[4]} />
                        <Card.Body>
                        <iframe 
                            title="deezer-widget" 
                            src={srcUrlArray[4]} 
                            width="785" 
                            height="150" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media; clipboard-write">
                        </iframe>
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
                        <Card.Img variant="top" src={imageLinkArray[5]} />
                        <Card.Body>
                        <iframe 
                            title="deezer-widget" 
                            src={srcUrlArray[5]} 
                            width="785" 
                            height="150" 
                            frameborder="0" 
                            allowtransparency="true" 
                            allow="encrypted-media; clipboard-write">
                        </iframe>
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