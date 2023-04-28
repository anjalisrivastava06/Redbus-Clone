import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DiscountCoupon = () => {
    return (
        <div id="discount_coupon_div" className="mt-5" style={{ marginTop: '90px' }}>
            <Container>
                <div className="text-center mb-5">
                <h2 style={{fontWeight: 'bold', fontFamily: 'Times New Roman', fontSize:'40px'}}>Discount Coupons</h2>
                </div>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="h-100" style={{backgroundColor: '#ff6b6b'}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: '35px', fontWeight: 'bold', color: 'white'}}>GET10</Card.Title>
                            <Card.Text style={{fontSize: '20px', color: '#002147'}}>Get 10% off on your next booking</Card.Text>
                            <Card.Text style={{fontSize: '16px', color: 'white'}}>
                            Use the coupon code GET10 to get 10% off on your next booking.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100" style={{backgroundColor: '#ff6b6b'}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: '35px', fontWeight: 'bold', color: 'white'}}>SUMMER20</Card.Title>
                            <Card.Text style={{fontSize: '20px', color: '#002147'}}>Summer Sale: Get 20% off</Card.Text>
                            <Card.Text style={{fontSize: '16px', color: 'white'}}>
                            Use the coupon code SUMMER20 to get 20% off on all bookings made before June 30th.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100" style={{backgroundColor: '#ff6b6b'}}>
                        <Card.Body>
                            <Card.Title style={{fontSize: '35px', fontWeight: 'bold', color: 'white'}}>WELCOME15</Card.Title>
                            <Card.Text style={{fontSize: '20px', color: '#002147'}}> Welcome Offer: Get 15% off</Card.Text>
                            <Card.Text style={{fontSize: '16px', color: 'white'}}>
                            Use the coupon code WELCOME15 to get 15% off on your first booking with us.
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DiscountCoupon;

