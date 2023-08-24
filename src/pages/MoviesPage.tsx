import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Poster from '../../src/assets/img/fight-club-poster.jpg'


const MoviesPage = () => {
    return (
        <div id="MoviesPage" className="">
            <h1>Movies</h1>
            {/* grid med filmerna här 
            det kan jag eg göra en komponent av och använda 
            både till movies och people, där jag bara skickar in
            datan som ska renderas.
            men börja med grid här och placera sedan 
            ut i en komponent*/}

            <Container fluid className="d-flex justify-content-center">

                <Row className="d-flex justify-content-center">

                    <Col /* lg={3} md={4} sm={6} xs={12}  */ className='d-flex justify-content-center mx-1 my-3'>
                        {/* Gör carden till Links */}
                        <Card bg='dark' text='light' style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={Poster} />
                            <Card.Body >
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="secondary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}

export default MoviesPage