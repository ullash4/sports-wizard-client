import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Section = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='container my-5'>
            <div className='row g-5'>
                <div className='col-12 col-md-5'>
                    <img className='img-fluid rounded-3 shadow' src="https://i.ibb.co/TWcrZG3/Untitled-design-1.png" alt="" />
                </div>
                <div className='col-12 col-md-7'>
                    <h1>The Best Collections we stock</h1>
                    <p>Discover the incredible savings on sports apparel and gear at Fanatics Outlet. We offer officially licensed team sports clothing at remarkably low prices.</p>
                    <Link to={'/inventory'}><button className='btn btn-primary m-3'>Show all Collections</button></Link>
                    
                    {user ? <Link to='/additem'><button className='btn btn-primary m-3'>Add Item</button></Link> : <Link to='/login'><button className='btn btn-primary m-3'>Log In</button></Link>}
                    
                </div>
            </div>
        </div>
    );
};

export default Section;