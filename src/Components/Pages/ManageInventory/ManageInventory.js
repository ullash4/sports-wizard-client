import React from 'react';
import useInventory from '../../Hooks/useInventory';
import InventoryItems from './InventoryItems';


const ManageInventory = () => {
    const [items] = useInventory();
    return (
        <div className='container my-5'>
            <h3 className='text-center mb-4'>Our Stock Collections this Year {items.length}</h3>
            <div className='row g-5'>
            {
                items.map(item=><InventoryItems key={item._id} item={item}></InventoryItems>)
            }
            </div>
        </div>
    );
};

export default ManageInventory;