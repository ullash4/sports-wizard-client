import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://blooming-sands-24397.herokuapp.com/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    toast("Your Item Added to our Database");
  };
  return (
    <div className="w-50 mx-auto p-3 shadow-lg rounded-3 my-5">
      <h1 className="text-center mb-4">Add Items</h1>
      <div className="">
        <form
          className="d-flex flex-column m-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Product Name</label>
          <input
            className="mb-3"
            placeholder="Product Name"
            required
            {...register("name")}
          />

          <label>Description</label>
          <textarea
            className="mb-3"
            placeholder="Description"
            required
            {...register("description")}
          />

          <label>Supplier</label>
          <input
            className="mb-3"
            placeholder="Supplier"
            type="text"
            required
            {...register("supplier")}
          />

          <label>Price</label>
          <input
            className="mb-3"
            placeholder="Price"
            type="number"
            required
            {...register("price")}
          />

          <label>Email</label>
          <input
            className="mb-3"
            placeholder="email"
            readOnly
            value={user?.email}
            type="email"
            required
            {...register("email")}
          />

          <label>Photo URL</label>
          <input
            className="mb-3"
            placeholder="Photo URL"
            type="text"
            required
            {...register("picture")}
          />

          <label>Quantity</label>
          <input
            className="mb-3"
            placeholder="Quantity"
            type="number"
            required
            {...register("quantity")}
          />

          <input
            className="btn btn-primary w-25 mx-auto"
            value={"Add Item"}
            type="submit"
          />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddItems;
