import React from 'react';
import { Card, Form, Button, Row, Col, InputGroup, FormControl, Checkbox } from 'react-bootstrap';
import "../styles/SignUpForm.css"
const SignUpForm = () => {
  return (
    <Card style={{ width: '35rem', margin: 'auto', marginTop: '5vh', padding: '20px' }}>
      <Card.Body>
        <Card.Title className="card-title">Register</Card.Title>
        <Card.Text className="card-text">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</Card.Text>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="e.g. John" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="e.g. Smith" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="e.g. john@your-domain.com" />
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
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="e.g. https://google.com" />
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

          <Button variant="warning" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SignUpForm;
