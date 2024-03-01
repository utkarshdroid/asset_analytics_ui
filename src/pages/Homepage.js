import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import '../index.css'
const Homepage = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const toggleForm = () => setShowSignUp(!showSignUp);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Asset Analytics</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {showSignUp ? (
                <>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#contact">Contact Us</Nav.Link>
                <Nav.Link href="#login" onClick={toggleForm}>Login</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#contact">Contact Us</Nav.Link>
                  <Nav.Link href="#signup" onClick={toggleForm}>Sign Up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
        {showSignUp ? <SignUpForm /> : <LoginForm />}
      </Container>
    </div>
  );
};

export default Homepage;
