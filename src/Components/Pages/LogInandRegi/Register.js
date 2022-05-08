import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../SharedPages/Loading/Loading';
import SocialLogIn from '../../SharedPages/SocialLogIn/SocialLogIn';

const Register = () => {
  const emailRef = useRef("")
  const passwordRef = useRef("")
  const navigate = useNavigate()
  const location = useLocation()
  const [agree, setAgree] = useState(false);

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const from = location.state?.from?.pathname || "/";

  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if(loading){
    return <Loading></Loading>
  }

  const handleRegisterOnSubmit=(e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(email, password)
    toast("email verification send")
  }

  if(user){
    navigate(from, { replace: true });
  }

    return (
        <div className='' style={{  
          backgroundImage: "url(" + "https://i.ibb.co/6NFCDHQ/wickedbackground-1.png" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="container py-5 w-50 " >
      <div className="p-5 shadow-lg rounded-3 bg-white  mb-5">
      <Form onSubmit={handleRegisterOnSubmit} className="mb-3">
          <h2 className="text-center">Register it's Free</h2>
          {errorElement}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label >Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} placeholder="Password" required  />
        </Form.Group>
        <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  onClick={() => setAgree(!agree)}
                  className={`${agree ? "text-primary" : "text-danger"}`}
                  type="checkbox"
                  label="Accepts all terms and conditions"
                />
              </Form.Group>
        <Button disabled={!agree} variant="primary" type="submit">
          Register
        </Button>
        <Link className="ms-2" to='/login'>Log In here</Link>
      </Form>
      <SocialLogIn></SocialLogIn>
      </div>
    </div>
        </div>
    );
};

export default Register;