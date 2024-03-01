import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import login from "../services/LoginService";
import "../styles/LoginForm.css"

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await login(username, password);
    console.log(username, password)
    if (result.success) {

      // Navigate to the investors table route upon successful login
      navigate("/investors");
    } else {
      // Show an error message if the login is not successful
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <Card style={{ width: "25rem", margin: "auto", marginTop: "10vh" }}>
      {" "}
      {/* Increased width */}
      <Card.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>

          <Row className="mt-4">
            <Col xs={7}>
              <Button variant="primary" type="submit" className="w-100">
                Sign In
              </Button>
            </Col>
            <Col
              xs={5}
              className="d-flex justify-content-end align-items-center"
            >
              {/* Changed style for "Forget password?" */}
              <a href="#forgot" style={{ color: "#8A3324", fontSize: "0.9em" }}>
                Forget password?
              </a>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
