import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Input from "../../components/Inputs/Input";
import { useState } from "react";

function Signup() {
  // useState Hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // fires up on form submit
  const handleSubmit = e => {
    // TODO .....
    alert('signup form was submitted!')
  }

  return (
    <Container>
      <Form className="mt-5 form" onSubmit={handleSubmit} >
        <Alert variant="info">Create an admin account!</Alert>
        <Form.Row>
          <Col md={6}>
            <Input
              label="First Name"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Input
              label="Last Name"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Form.Row>
        <Input
          label="Email Address"
          type="email"
          placeholder="Your Email"
          text="We'll never share your email with anyone else."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Passowrd"
          text="Password should be atleast 6 digits and special symbols."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your passowrd"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button variant="primary" type="submit" className="btn-block">
          Create Account !
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
