import React from 'react';

const InventoryItems = ({item}) => {
    const {name, price, quantity, supplier, description, picture} = item;

    return (
        <div>
            <div class="flex justify-center">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={picture} alt="" />
    <div class="p-6 flex flex-col justify-start">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
      <p class="text-gray-700 text-base mb-4">
        {description.slice(0, 150)}
      </p>
      <p class="text-gray-600 text-xs">Price : {price}</p>
      <p class="text-gray-600 text-xs">Supplier : {supplier}</p>
      <p class="text-gray-600 text-xs">Quantity : {quantity}</p>
      <button type="button" class="inline-block my-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default InventoryItems;