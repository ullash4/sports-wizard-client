import React from "react";

const InventoryItems = ({ item }) => {
  const { name, picture, description, supplier } = item;
  return (
    <div className="col-4">
      <div className="rounded-3 shadow-lg p-4">
        <img className="img-fluid rounded-3" src={picture} alt="" />
        <h4>{name}</h4>
        <p>Supplier : {supplier}</p>
        <p>{description.slice(0,100)}</p>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default InventoryItems;
