import React from 'react';
import useSingleInventory from '../../Hooks/useSingleInventory';

const SingleInventoryItem = () => {
    const [id, item] = useSingleInventory()
    let sold;
    if(item.quantity === 0){
        sold= "Sold Out"
    }else{
        sold="In Stock"
    }
    return (
        <div className='container my-5 shadow-lg rounded py-5 '>
            <div className='row g-5'>
                <div className='col-5'>
                    <img className='img-fluid rounded-3' src={item.picture} alt="" />
                </div>
                <div className='col-7'>
                    <h1>Product Name : {item.name}</h1>
                    <h5>Product Id : {id}</h5>
                    <h5>Supplier : {item.supplier}</h5>
                    <h5>Price : {item.price}</h5>
                    
                    <h5>Quantity : {item.quantity}</h5>
                    <h5>Sold : {sold}</h5>
                    <p>{item.description}</p>
                    <div className='d-flex align-items-center justify-content-between px-2'>
                    <button className='btn btn-primary'>Delivered</button>
                    <form >
                    <button className='btn btn-primary me-2'>Restock</button>
                        <input type="number" name="number" id="" placeholder='Write Quantity'/>
                       
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInventoryItem;