import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
 import logo from "../../../images/logo.png";
import './Header.css'

const Header = () => {
    return (
        <div className='head-er'>
        
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand href="#home"><img src={logo} height={"30px"} alt="" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      
         
      </div>
    );
};

export default Header;