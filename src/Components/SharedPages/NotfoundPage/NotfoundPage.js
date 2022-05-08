import React from 'react';
import { Link } from 'react-router-dom';

const NotfoundPage = () => {
    return (
        <div className='my-2 p-5'>
        <div className='d-flex flex-column flex-md-row justify-content-evenly align-items-center'>
            <div className=''>
                <img className='' src="https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif" alt="" />
            </div>
            <div className=''>
                <h1 className='display-2 fw-bolder'>You are Lost Buddy</h1>
                <p className='display-5'>The page you have searching for is not found. Please click below button to return home</p>
                <Link to={'/'}> <button className='px-5 py-3 bg-primary rounded-3 text-white fs-4 border-0'>Return Home</button></Link>
            </div>
        </div>
    </div>
    );
};

export default NotfoundPage;