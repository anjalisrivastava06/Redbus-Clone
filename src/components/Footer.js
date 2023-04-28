import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-dark text-white" style={{ marginTop: '100px'}}>
            <Container className="py-3">
                <Row>
                    <Col sm={6} md={3}>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Help</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col sm={6} md={3}>
                        <h5>Social Media</h5>
                        <ul className="list-unstyled">
                            <li><a href="/"><FaFacebookF /></a></li>
                            <li><a href="/"><FaTwitter /></a></li>
                            <li><a href="/"><FaInstagram /></a></li>
                            <li><a href="/"><FaLinkedinIn /></a></li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h5>Newsletter</h5>
                        <p>
                        RedBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. 
                        redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.
                        </p>
                        <form>
                        <div className="input-group mb-3">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                            />
                            <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                                Subscribe
                            </button>
                            </div>
                        </div>
                        </form>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={6}>
                        <p className="text-muted">&copy; 2023 redbus</p>
                    </Col>
                    <Col md={6} className="text-right">
                        <p className="text-muted">
                        Terms of Use | Privacy Policy | Disclaimer
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
