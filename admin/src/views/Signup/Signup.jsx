import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminSignupAction } from "../../redux/admin/authentication/actions";
import { Link } from "react-router-dom";

function Signup(props) {
  // admin login state
  const { isLoggedIn } = useSelector((state) => state.adminSignin);
  if (isLoggedIn) {
    props.history.push("/");
  }
  // useState Hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordDidNotMatch, setIsPasswordDidNotMatch] = useState(false);

  const dispatch = useDispatch();

  // fires up on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setIsPasswordDidNotMatch(false);
      dispatch(
        adminSignupAction({ firstName, lastName, username, email, password })
      );
    } else {
      setIsPasswordDidNotMatch(true);
    }
  };

  // admin signup state
  const { loading, message,success, error } = useSelector((state) => state.adminSignup);

  return (
    <Container>
      <Form className="mt-5 form" onSubmit={handleSubmit}>
        {isPasswordDidNotMatch ? (
          <Alert variant="danger">Password didn't match!</Alert>
        ) : loading ? (
          <Alert variant="info">{`Hi ${firstName}, we're creating your account ...`}</Alert>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : success ? (
          <Alert variant="info">{message}</Alert>
        ) : (
          <Alert variant="info">Create an admin account!</Alert>
        )}
        {
          !success
          ? <>
          <Form.Row>
            <Col md={6}>
              <Form.Group controlId="lastName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Text className="text-muted">
              Username should be atleast 6 characters.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">
              Password should be atLeast 6 digits and special symbols.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="btn-block">
            {loading ? (
              <li className="fa fa-spin fa-spinner"></li>
            ) : (
              "Create Account !"
            )}
          </Button>
           </>
           : <div className='text-center mt-5'><Link className='btn btn-success text-center mt-5' to='/login'>Login Now!</Link></div>
        }
      </Form>
    </Container>
  );
}

export default Signup;
