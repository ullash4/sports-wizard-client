import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../../Hooks/useInventory';
import ItemsForHome from './ItemsForHome';

const InventoryItemsForHome = () => {
    const [items] = useInventory();
    return (
        <div className='container my-5'>
            <h3 className='text-center mb-4'>Inventory Items</h3>
            <div className='row g-5'>
            {
                items.slice(0,6).map(item=><ItemsForHome key={item._id} item={item}></ItemsForHome>)
            }
            </div>
            <Link to='/inventory'><button className='btn btn-primary mt-5'>Manage Inventory</button></Link>
            
        </div>
    );
};

export default InventoryItemsForHome;