import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeItemCard = ({item}) => {
  const navigate = useNavigate();
    const {name, _id, picture, description, supplier, quantity} = item;

    const handleNavigateToUpdatePage=(_id)=>{
      navigate(`/inventory/${_id}`);
    }

    return (
        <div>
            <div className="flex justify-center">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img className="rounded-t-lg" src={picture} alt=""/>
    </a>
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
      <p className="text-gray-700 text-base mb-4">
        {description.slice(0, 150)}
      </p>
      <p className='font-bold'>Supplier : {supplier}</p>
      <p className='font-bold'>Quantity : {quantity}</p>
      <button type="button" className=" inline-block my-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>handleNavigateToUpdatePage(_id)}>Update</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeItemCard;