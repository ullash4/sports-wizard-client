import React from 'react';

const HomeItemCard = ({item}) => {
    const {name, picture, description, supplier, quantity} = item;
    return (
        <div>
            <div class="flex justify-center">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" src={picture} alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
      <p class="text-gray-700 text-base mb-4">
        {description.slice(0, 150)}
      </p>
      <p className='font-bold'>Supplier : {supplier}</p>
      <p className='font-bold'>Quantity : {quantity}</p>
      <button type="button" class=" inline-block my-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeItemCard;