import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogIn = () => {
    const navigate = useNavigate()
    const [signInWithGithub, user] = useSignInWithGithub(auth);
    const [signInWithGoogle, user2] = useSignInWithGoogle(auth);
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    

    const handleGitHubLogIn=()=>{
        signInWithGithub();
    }
    const handleGoogleLogIn=()=>{
        signInWithGoogle();
    }
    if(user || user2){
        navigate(from, { replace: true });
    }
    return (
        <div>

            <div className='d-flex align-items-center'>
                <div className='border border-primary w-50 mx-auto'></div>
                <p className='mx-4 mb-1 fs-5'>Or</p>
                <div className='border  border-primary w-50 mx-auto'></div>
            </div>

            <div className='d-flex flex-column  d-md-flex flex-md-row justify-content-md-evenly align-items-md-center'>
                <h3>Continue With - </h3>
                <button onClick={handleGoogleLogIn} className='border border-secondary p-2 m-2 rounded-circle bg-light'> <span className=''> <FcGoogle className='fs-2' /> </span> </button>
                <button onClick={handleGitHubLogIn} className='border border-secondary p-2 m-2 rounded-circle bg-light'> <span className=''> <FaGithub className='fs-2' /> </span> </button>
                
            </div>
        </div>
    );
};

export default SocialLogIn;