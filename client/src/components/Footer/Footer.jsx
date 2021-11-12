import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import bigbean from '../../assets/rectangle_21.png';

const FooterContainer = () => {
    return(
        <Navbar bg="light" expand='lg'>
            <Container>
            <Navbar.Brand href="#home"><img src={bigbean} alt='' width='59px' height='30px'/></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">¿Quiénes somos?</Nav.Link>
                <Nav.Link href="#features">Ayuda</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default FooterContainer;