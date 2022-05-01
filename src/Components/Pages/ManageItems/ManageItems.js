import React from 'react';
import useInventoryItems from '../../../Hooks/useInventoryItems';
import InventoryItems from '../InventoryItems/InventoryItems';

const ManageItems = () => {
    const [items] = useInventoryItems()
    return (
        <div>
            <h1>this is manage inventory items {items.length}</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10  mx-10 my-5 p-10'>
            {
                items.map(item=><InventoryItems key={item._id} item={item}></InventoryItems>)
            }
            </div>
        </div>
    );
};

export default ManageItems;