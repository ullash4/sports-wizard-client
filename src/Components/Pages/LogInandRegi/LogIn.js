import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="container py-5 w-50 mb-5">
      <div className="p-5 shadow-lg rounded-3">
      <Form>
          <h2 className="text-center">Please Log In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className="btn btn-link">forget password ?</button> <br/>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Link className="ms-2" to='/register'>Create Account</Link>
        
      </Form>
      </div>
    </div>
  );
};

export default LogIn;
