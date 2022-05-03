import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  href="#home">SportsWizard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mt-1">
              <Nav.Link href="#features">Blog</Nav.Link>
              <Nav.Link href="#pricing">Manage Inventory</Nav.Link>
              <Nav.Link href="#pricing">Add Inventory</Nav.Link>
              <Nav.Link href="#pricing">My Item</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Log In</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
