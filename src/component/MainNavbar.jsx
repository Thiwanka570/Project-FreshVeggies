import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <Navbar bg="success" expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-light">
          FreshVeggies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-light">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-light">
              Contact
            </Nav.Link>
            <Button as={Link} to="/register" variant="light" className="ms-2">
              Register/Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
