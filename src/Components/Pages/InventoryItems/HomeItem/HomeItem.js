import React from 'react';
import useInventoryItems from '../../../../Hooks/useInventoryItems';
import HomeItemCard from './HomeItemCard';

const HomeItem = () => {
    const [items] = useInventoryItems();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 my-5 p-10'>
            {
                items.slice(0, 6).map(item=><HomeItemCard key={item._id} item={item}></HomeItemCard>)
            }
        </div>
    );
};

export default HomeItem;