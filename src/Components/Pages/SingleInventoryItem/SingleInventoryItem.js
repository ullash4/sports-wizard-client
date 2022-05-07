import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import useSingleInventory from '../../Hooks/useSingleInventory';

const SingleInventoryItem = () => {
    const [id, item] = useSingleInventory()
    const quantityRef = useRef("")

    const handleRestockQty=(e)=>{
        e.preventDefault()
        const restQuantity = parseInt(item.quantity);
        const quantity = quantityRef.current.value;
        const inIntQuantity= parseInt(quantity)
        const result = restQuantity+inIntQuantity
        const updateQuantity = {result}
        
        
        // Send quantity to server
        const url = `http://localhost:5000/product/${id}`;
        fetch(url,{
            method: "PUT",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateQuantity)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log('success', data);
            toast("Quantity restocked")
        })

    }

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
                    <button onClick={handleRestockQty} className='btn btn-primary me-2'>Restock</button>
                        <input type="number"  ref={quantityRef} name="number" id="" placeholder='Write Quantity'/>
                       
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInventoryItem;