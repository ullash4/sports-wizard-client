import React from 'react';
import useSingleProductDetails from '../../../Hooks/useSingleProductDetails';

const SingleItem = () => {
    
   const [item, Id] = useSingleProductDetails();
   const {name} = item;
    return (
        <div>
            <h1>this is single product Id {Id}</h1>
            <h1>this is single product Name {name}</h1>
        </div>
    );
};

export default SingleItem;