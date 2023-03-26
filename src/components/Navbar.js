import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  
    return (
        <Navbar  className="fixed-top" style={{ backgroundColor:"#F77E7E", padding:'8px 30px'}} expand="lg" >
            <Navbar.Brand href="#home">
                <img src="https://www.redbus.in/i/59538b35953097248522a65b4b79650e.png" alt="Logo" height="30" />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home" style={{fontSize:'20px' , fontWeight:'600' , color:'#002147'}}>Bus Tickets</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Navigation;





