import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';
import auth from "../../../firebase.init";
import Customlink from "./Customlink";



const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth);
  }
  return (
    <>
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand className="fs-3" as={Link} to='/' >SportsWizard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mt-1">
              <Customlink className="fs-5 text-decoration-none ms-3" to={'/inventory'}>Manage Inventory</Customlink>
              <Customlink className="fs-5 text-decoration-none ms-3" to={'/blog'}>Blog</Customlink>
              {user && <Customlink className="fs-5 text-decoration-none ms-3" to={'/myitems'}>My Item</Customlink>}
              {user && <Customlink className="fs-5 text-decoration-none ms-3" to={'/additems'}>Add Items</Customlink>}
              {user && <Customlink className="fs-5 text-decoration-none ms-3" to={'/manageitem'}>Manage Item</Customlink>}
            </Nav>
            <Nav>
              {user ? <button onClick={handleSignOut} className="border-0 fs-5 text-dark py-1 bg-light rounded-3 ms-3">Log Out</button> : <Nav.Link className="fs-5 text-dark py-1 bg-light rounded-3 ms-3" as={Link} to='/login' >Log In</Nav.Link>}
              
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
