import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialLogIn = () => {
    const navigate = useNavigate()
    const [signInWithGithub, user] = useSignInWithGithub(auth);
    const [signInWithGoogle, user2] = useSignInWithGoogle(auth);

    

    const handleGitHubLogIn=()=>{
        signInWithGithub();
    }
    const handleGoogleLogIn=()=>{
        signInWithGoogle();
    }
    if(user || user2){
        navigate('/');
    }
    return (
        <div className=''>
            <div className='d-flex align-items-center justify-justify-content-evenly'>
                <h3>Continue With - </h3>
                <button onClick={handleGoogleLogIn} className='border border-secondary p-2 m-2 rounded-circle bg-light'> <span className=''> <FcGoogle className='fs-2' /> </span> </button>
                <button onClick={handleGitHubLogIn} className='border border-secondary p-2 m-2 rounded-circle bg-light'> <span className=''> <FaGithub className='fs-2' /> </span> </button>
                
            </div>
        </div>
    );
};

export default SocialLogIn;