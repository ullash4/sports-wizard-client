import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
// import axios from 'axios'

const MyItems = () => {
    const [user] = useAuthState(auth)
    
    const [items, setItems] =useState([])
    useEffect(()=>{

        // const load= async() =>{
        //     const email = user?.email;
        // const url = `http://localhost:5000/product?email=${email}`;
        // const {data} = await axios.get(url)
        // setItems(data)
        // }
        // load();

        const email = user?.email;
        const url = `http://localhost:5000/product?email=${email}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setItems(data)})

    },[user])
    return (
        <div>
            <h1>Here are some of my items {items.length} </h1>
        </div>
    );
};

export default MyItems;