import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RiHandHeartLine, RiCustomerService2Line, RiPriceTag2Line } from 'react-icons/ri';

const OurPromise = () => {
    return (
        <div id="advantage_div" style={{ marginTop: '60px' }}>
            <Container>
                <div className="text-center mb-5">
                    <img src="//s1.rdbuz.com/web/images/home/promise.png" height="100" alt="We promise to deliver" />
                    <h2 className="mt-4">We promise to deliver</h2>
                </div>
                <Row>
                    <Col md={4} className="text-center">
                        <Card className="h-100 border-0 shadow">
                        <Card.Body>
                            <RiHandHeartLine size={80} />
                            <Card.Title className="mt-4">UNMATCHED BENEFITS</Card.Title>
                            <Card.Text>We take care of your travel beyond ticketing by providing you with innovative and unique benefits.</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="text-center">
                        <Card className="h-100 border-0 shadow">
                        <Card.Body>
                            <RiCustomerService2Line size={80} />
                            <Card.Title className="mt-4">SUPERIOR CUSTOMER SERVICE</Card.Title>
                            <Card.Text>We put our experience and relationships to good use and are available to solve your travel issues.</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col md={4} className="text-center">
                        <Card className="h-100 border-0 shadow">
                        <Card.Body>
                            <RiPriceTag2Line size={80} />
                            <Card.Title className="mt-4">LOWEST PRICES</Card.Title>
                            <Card.Text>We always give you the lowest price with the best partner offers.</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurPromise;
