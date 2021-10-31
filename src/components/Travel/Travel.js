import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Travel = () => {
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        fetch('https://infinite-fjord-91722.herokuapp.com/travels')
            .then(res => res.json())
            .then(data => setTravels(data))
    }, []);

    const history = useHistory();
    const travelBooking = id => {
        history.push(`/travelBooking/${id}`)
    }
    return (
        <div className="py-5">
            <Container>
                <div className="text-center py-5 poppins-font">
                    <small className="text-danger fw-bold">Find Your Tour</small>
                    <h1>CHOOSE DESTINATION</h1>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        travels.map(travel => <Col key={travel?._id}>
                            <Card className=" roboto-font">
                                <Card.Img variant="top" src={travel?.img} />
                                <Card.Body>
                                    <Card.Title>{travel?.name}</Card.Title>
                                    <Card.Text>
                                        {travel?.description}
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center pt-2">
                                        <Button onClick={() => travelBooking(travel?._id)} variant="danger">Travel Booking</Button>
                                        <h5>${travel?.price} <span className="fs-6 text-muted">4 Day</span></h5>
                                    </div>
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