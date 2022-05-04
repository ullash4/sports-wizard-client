import React from 'react';
import { useParams } from 'react-router-dom';

const SingleInventoryItem = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>this is single product {id}  vvv</h1>
        </div>
    );
};

export default SingleInventoryItem;