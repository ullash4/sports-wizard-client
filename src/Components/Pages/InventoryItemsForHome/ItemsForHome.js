import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemsForHome = ({item}) => {
  const navigate = useNavigate()
    const { _id, name, picture, quantity, description, supplier } = item;
    const handleNavigate=()=>{
      navigate(`inventory/${_id}`)
    }
    return (
        <div className="col-12 col-md-6 col-lg-4">
        <div className="rounded-3 shadow-lg p-4">
          <img className="img-fluid rounded-3" src={picture} alt="" />
          <h4>{name}</h4>
          <p>Supplier : {supplier}</p>
          <p>Quantity : {quantity}</p>
          <p>{description.slice(0,100)}</p>
          <button onClick={()=>handleNavigate(_id)} className="btn btn-primary">Update</button>
        </div>
      </div>
    );
};

export default ItemsForHome;