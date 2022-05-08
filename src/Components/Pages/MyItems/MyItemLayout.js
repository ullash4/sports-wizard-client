import React from "react";
import { toast } from "react-toastify";
import useInventory from "../../Hooks/useInventory";

const MyItemLayout = (props) => {
  const [items, setItems] = useInventory();
  const handleDelete = (id) => {
    const sure = window.confirm("Are you sure ?");
    if (sure) {
      const url = `https://blooming-sands-24397.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const rest = items.filter((item) => item._id !== id);
          setItems(rest);
          toast("Your clicked item deleted ");
        });
    }
  };
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="rounded-3 shadow-lg p-4">
        <img
          className="img-fluid rounded-3"
          src={props?.item?.picture}
          alt=""
        />
        <h1>{props?.item?.name}</h1>
        <p>{props?.item?.description}</p>
        <button
          onClick={() => handleDelete(props?.item?._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MyItemLayout;
