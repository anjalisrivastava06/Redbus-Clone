import { Navbar, Nav, Button } from 'react-bootstrap';
import Login from './Login';
import React, { useState } from 'react';

const Navigation = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleCloseLogin = () => {
        setShowLogin(false);
    };

    return (
        <>
          <Navbar className="fixed-top" style={{ backgroundColor: "#F77E7E", padding: '8px 30px' }} expand="lg">
            <Navbar.Brand href="/">
              <img src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png" alt="Logo" height="30" />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/" style={{ fontSize: '20px', fontWeight: '600', color: '#002147' }}>Bus Tickets</Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Nav style={{ marginLeft: 'auto', gap: '20px' }}>
                <Button href="/" variant="outline-light">Print Ticket</Button>
                <Button variant="outline-light" className="mr-3" onClick={handleLoginClick}>Login</Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Login show={showLogin} handleClose={handleCloseLogin} />
        </>
    );
};

export default Navigation;
