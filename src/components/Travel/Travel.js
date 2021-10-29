import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Travel = () => {
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        fetch('/travel.json')
            .then(res => res.json())
            .then(data => setTravels(data))
    }, []);

    const history = useHistory();
    const travelBooking = () => {
        history.push('/travelBooking')
    }
    return (
        <div className="py-5">
            <Container>
                <div className="text-center py-5">
                    <small className="text-danger fw-bold">Find Your Tour</small>
                    <h1>CHOOSE DESTINATION</h1>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        travels.map(travel => <Col>
                            <Card>
                                <Card.Img variant="top" src={travel.img} />
                                <Card.Body>
                                    <Card.Title>{travel.name}</Card.Title>
                                    <Card.Text>
                                        {travel.description}
                                    </Card.Text>
                                    <Button onClick={travelBooking} variant="danger">Travel Booking</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Travel;