import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { GrLinkedinOption } from 'react-icons/gr';


const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className='container-fluid px-5 shadow-lg py-3'>
            <div className='row g-3 pt-3'>
                <div className='col-sm-6 col-lg-3 col-md-4'>
                    <h4>SportsWizard</h4>
                    <p>Discover the incredible savings on sports apparel and gear at Fanatics Outlet. We offer officially licensed team sports clothing at remarkably low prices.</p>
                </div>
                <div className='col-sm-6 col-lg-3 col-md-4'>
                    <h5>Products</h5>
                    <p> Football </p>
                    <p> Jersey </p>
                    <p> Cricket equipments </p>
                    <p> All game equipments </p>
                </div>
                <div className='col-sm-6 col-lg-3 col-md-4'>
                    <h5>Usefull Links</h5>
                    <p > <Link className='text-dark' to={'/inventory'}>Manage Inventory</Link> </p>
                    <p> <Link className='text-dark' to={'/blog'}>Blog</Link> </p>
                    <p> <Link className='text-dark' to={'/myitem'}>My Item</Link> </p>
                    <p> <Link className='text-dark' to={'/additems'}>Add Items</Link> </p>
                    <p> <Link className='text-dark' to={'/manageitem'}>Manage Item</Link> </p>
                </div>
                <div className='col-sm-6 col-lg-3 col-md-4'>
                    <h5>Contact Info</h5>
                    <p> <FaHome /> Dhaka, Bangledesh</p>
                    <p> <MdEmail /> sportswizard@gmail.com</p>
                    <p> <BsTelephoneFill /> +978547463</p>
                </div>
            </div>
            <hr />
            <div className='d-flex flex-column  d-md-flex flex-md-row justify-content-md-between align-items-md-center '>
                <p> © {date} Copyright : SportsWizard</p>
                <div className='my-3'>
                    
                    <a className='text-decoration-none' href="https://www.facebook.com/"> <span className='shadow-lg rounded-circle p-3 m-2'> <FaFacebookF className='fs-5' /> </span></a>
                    
                    <a className='text-decoration-none' href="https://www.instagram.com/"> <span className='shadow-lg rounded-circle p-3 m-2 '> <BsInstagram className='fs-5' /> </span></a>

                    <a className='text-decoration-none' href="https://www.linkedin.com/in/imran-mahmud-ullash-561940235/"><span className='shadow-lg rounded-circle p-3  m-2'> <GrLinkedinOption className='fs-5' /> </span></a>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;