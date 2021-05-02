import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { adminLoginAction } from "../../redux/admin/authentication/actions";

function Login(props) {
  // admin signin state
  const {loading, error, isLoggedIn} = useSelector(state => state.adminSignin)
  if(isLoggedIn){
    props.history.push('/')
  }
  // useState hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // dispatch
  const dispatch = useDispatch();

  // fires up on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLoginAction({email, password}))
  };

  return (
    <Container>
      <Form className="mt-5 form" onSubmit={handleSubmit}>
        {error ? <Alert variant="danger">{error}</Alert>
        : loading ? <Alert variant="info">Logging you ...</Alert>  : <Alert variant="info">Login with your admin account!</Alert>}
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-block">
          {loading ? <li className="fa fa-spinner fa-spin" ></li> : 'Login'}
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
