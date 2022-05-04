import React from 'react';
import InventoryItemsForHome from '../InventoryItemsForHome/InventoryItemsForHome';
import Banner from './Banner/Banner';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItemsForHome></InventoryItemsForHome>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;