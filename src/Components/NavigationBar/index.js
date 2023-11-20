import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home">About me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} eventKey="/experience" to="/experience">
              Experience
            </Nav.Link>
            <Nav.Link as={Link} eventKey="/projects" to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} eventKey="/skills" to="/skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} eventKey="/contact" to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
