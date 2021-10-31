import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <div className="font-roboto">
            <>
                <div>
                    <h1 className="text-center py-5">About Us</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-fluid w-100 about-img" src={'https://enchanting-costarica.com/wp-content/uploads/2017/10/Happiness-at-Playa-Nicuesa-Lodge.jpg'} alt="" />
                            </div>
                            <div className="col-md-6">
                                <h5 className="text-danger mt-5">TIME TO TRAVEL</h5>
                                <h1>Welcome to Time To Travel, Inc</h1>
                                <p className="mt-4">We know that planning the trip of a lifetime is exciting. That's why we have set up this easy-to-use web site </p>
                                <div>
                                    <i class="fas fa-check text-danger p-2"></i>
                                    <span>24 Hours Emergency Assistance Call Us</span>
                                </div>
                                <div>
                                    <i class="fas fa-check text-danger p-2"></i>
                                    <span>We are committed to providing time travel service</span>
                                </div>
                                <div>
                                    <i class="fas fa-check text-danger p-2"></i>
                                    <span>Really know the true needs and expectations of patients</span>
                                </div>

                                <button className="btn btn-outline-danger mt-4 ">More About Us</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* latest news */}
                <div className="latest-blog pb-5">
                    <div className="text-center my-5">
                        <h5 className="text-danger">Our Blog</h5>
                        <h1>Lates News & Articles</h1>
                        <p>Breaking science and technology news from around the world. Exclusive stories and expert analysis on space</p>
                    </div>
                    <Container>
                        <Row xs={1} md={3} className="g-4">
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlDyHVDUpnumdijlY3d-3QQoVPhK4o_d0szoeTwFzoZ3mcI2mK2bR3DhfHOcKfLTwpe8&usqp=CAU'} />
                                    <Card.Body>
                                        <Card.Title>Getting Around in Costa Rica </Card.Title>
                                        <Card.Text>
                                            You can take taxis, you can rent a car, you can try public transportation, but we always recommend getting a driver to take you around.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuPna6LDRLBXSVWhIzSeNi89wUno5v-5AIg&usqp=CAU'} />
                                    <Card.Body>
                                        <Card.Title>Involve Your Family in the Planning</Card.Title>
                                        <Card.Text>
                                            We have found that the best way to get your family excited about their trip to Costa Rica is to include them in the vacation planning
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46P8YIp_Soot3FKI-NcxQ3R8LvqnahYo0Dw&usqp=CAU'} />
                                    <Card.Body>
                                        <Card.Title>Why Choose Costa Rica for Your Family</Card.Title>
                                        <Card.Text>
                                            We may be biased, but we consider Costa Rica the ultimate family destination. It truly has something travelers of all ages.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        </div>
    );
};

export default About;