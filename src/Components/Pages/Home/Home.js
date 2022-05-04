import React from 'react';
import InventoryItemsForHome from '../InventoryItemsForHome/InventoryItemsForHome';
import Banner from './Banner/Banner';
import ProductDisplay from './ProductDisplay/ProductDisplay';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InventoryItemsForHome></InventoryItemsForHome>
            <Testimonials></Testimonials>
            <ProductDisplay></ProductDisplay>
        </div>
    );
};

export default Home;