import React from "react";
import { toast } from "react-toastify";
import useInventory from "../../Hooks/useInventory";

const InventoryItems = ({ item }) => {
  const { _id , name, picture, description, supplier } = item;
  const [items, setItems] = useInventory()
  
  const handleDelete=(id)=>{
    const sure = window.confirm("Are you sure ?")
    if(sure){
      const url = `http://localhost:5000/product/${id}`
      fetch(url, {
        method: "DELETE",
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        const rest = items.filter(item=> item._id !== id)
        setItems(rest)
        toast("Your clicked item deleted ")
      })
    }
  }

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="rounded-3 shadow-lg p-4">
        <img className="img-fluid rounded-3" src={picture} alt="" />
        <h4>{name}</h4>
        <p>Supplier : {supplier}</p>
        <p>{description.slice(0,100)}</p>
        <button onClick={()=>handleDelete(_id)} className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
};

export default InventoryItems;
