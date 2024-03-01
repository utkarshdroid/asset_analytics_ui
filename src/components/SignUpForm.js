import React from 'react';
import { Card, Form, Button, Row, Col, InputGroup, FormControl, Checkbox } from 'react-bootstrap';
import "../styles/SignUpForm.css"
const SignUpForm = () => {
  return (
    <Card style={{ width: '35rem', margin: 'auto', marginTop: '5vh', padding: '20px' }}>
      <Card.Body>
        <Card.Title className="card-title" style={{ textAlign: 'center' }}>Register</Card.Title>
        <Card.Text className="card-text">Welcome to Asset Analytics. Sign Up to get crucial insights of world fund management </Card.Text>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Email Id" />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <InputGroup>
                  <InputGroup.Text>+00</InputGroup.Text>
                  <FormControl placeholder="0000 000 0000" />
                </InputGroup>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formWebsite">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Your Password" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Re-type Password</Form.Label>
                <Form.Control type="password" placeholder="Your Password" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check  
              type="checkbox" 
              label="Creating an account means you're okay with our Terms and Conditions and our Privacy Policy."
              className="form-check-label"
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUpForm;
