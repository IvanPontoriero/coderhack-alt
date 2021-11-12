import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Logo from '../../assets/logo-color.png';
import minibean from '../../assets/rectangle_71.png';
import {ImSearch} from 'react-icons/im';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/'><Navbar.Brand><img src={Logo} alt='logo make_sense' width='157.25px' height='25.85px'/></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to='/ayuda'>Ayuda  <img src={minibean} alt='minibean'/></Nav.Link>
            <Nav.Link to='/quienes-somos'>¿Quiénes somos?  <img src={minibean} alt='minibean' /></Nav.Link>
            <Nav.Link href="#" disabled>
              mis proyectos
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder='Ingresa tu búsqueda'
              className="me-2"
              aria-label="buscar"
            />
            <Button variant="outline-success"><ImSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;