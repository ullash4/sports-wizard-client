import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import MyItemLayout from "./MyItemLayout";

// import axios from 'axios'

const MyItems = () => {
  const [user] = useAuthState(auth);

  const [items, setItems] = useState([]);
  const email = user?.email;
  useEffect(() => {
    const url = `https://blooming-sands-24397.herokuapp.com/product?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  }, [email]);
  return (
    <div className="container">
      <h1>Here are some of my items {items.length} </h1>
      <div className="row g-5 my-5">
        {items.map((item) => (
          <MyItemLayout key={item._id} item={item}></MyItemLayout>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
