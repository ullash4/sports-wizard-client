import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
// import axios from 'axios'

const MyItems = () => {
    const [user] = useAuthState(auth)
    
    const [items, setItems] =useState([])
    const email = user?.email;
    useEffect(()=>{
        const url = `http://localhost:5000/product?email=${email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setItems(data)})

    },[email])
    return (
        <div>
            <h1>Here are some of my items {items.length} </h1>
        </div>
    );
};

export default MyItems;