import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import 'react-toastify/dist/ReactToastify.css';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from "../../SharedPages/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import SocialLogIn from "../../SharedPages/SocialLogIn/SocialLogIn";

const LogIn = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation()

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);


  const from = location.state?.from?.pathname || "/";

  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <Loading></Loading>;
  }

  const handleLogInOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Reset password sent to your Email ");
    } else {
      toast("Please enter your email address");
    }
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(" + "https://i.ibb.co/74ssLH6/wickedbackground-2.png" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="py-5 w-50  mx-auto">
        <div className="p-5 shadow-lg bg-white rounded-3 mb-5">
          <Form onSubmit={handleLogInOnSubmit}>
            <h2 className="text-center">Please Log In</h2>
            {errorElement}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <p>
            New to PhotoPedia ?
            <Link className="text-decoration-none" to="/register">
              Register here
            </Link>
          </p>
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
          
          <p>
            Forget Your password ?
            <button
              onClick={handleResetPassword}
              className="btn btn-link text-decoration-none"
            >
              Reset Password
            </button>
          </p>
          <SocialLogIn></SocialLogIn>
          < ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
