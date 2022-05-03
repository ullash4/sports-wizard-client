import React from 'react';
import InventoryItemsForHome from '../InventoryItemsForHome/InventoryItemsForHome';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItemsForHome></InventoryItemsForHome>
        </div>
    );
};

export default Home;