import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='container-fluid px-5 bg-secondary py-3'>
            <div className='row g-3 pt-3'>
                <div className='col-3'>
                    <h4>SportsWizard</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laborum!</p>
                </div>
                <div className='col-3'>
                    <h5>Products</h5>
                    <p> Football </p>
                    <p> Football </p>
                    <p> Football </p>
                    <p> Football </p>
                </div>
                <div className='col-3'>
                    <h5>Usefull Links</h5>
                    <p> <Link to={'/blog'}>Blog</Link> </p>
                    <p> <Link to={'/blog'}>Blog</Link> </p>
                    <p> <Link to={'/blog'}>Blog</Link> </p>
                    <p> <Link to={'/blog'}>Blog</Link> </p>
                </div>
                <div className='col-3'>
                    <h5>Contact Info</h5>
                    <p> <FaHome /> New York, USA</p>
                    <p> <MdEmail /> New York, USA</p>
                    <p> <BsTelephoneFill /> New York, USA</p>
                    <p> <FaHome /> New York, USA</p>
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-around align-items-center'>
                <p> © {date} Copyright : SportsWizard</p>
                <div>
                    
                    <a className='text-decoration-none' href="www.goole.com"> <span className='border border-dark rounded-circle p-3 ms-2 '> <FaFacebookF className='fs-5' /> </span></a>
                    
                    <a className='text-decoration-none' href="f"> <span className='border border-dark rounded-circle p-3 ms-2 '> <FaFacebookF className='fs-5' /> </span></a>

                    <a className='text-decoration-none' href="s"><span className='border border-dark rounded-circle p-3 ms-2 '> <FaFacebookF className='fs-5' /> </span></a>
                    <a className='text-decoration-none' href="s"><span className='border border-dark rounded-circle p-3  ms-2'> <FaFacebookF className='fs-5' /> </span></a>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;