import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Input from "../../components/Inputs/Input";

function Login() {
  // useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Form className="mt-5 form">
        <Alert variant="info">Login with your admin account!</Alert>
        <Input label="Email Address" type="email" placeholder="Your Email" value={email} onChange={ e => setEmail(e.target.value)} />
        <Input label="Password" type="password" placeholder="Passowrd" value={password} onChange={ e => setPassword(e.target.value)} />
        <Button variant="primary" type="submit" className="btn-block">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
