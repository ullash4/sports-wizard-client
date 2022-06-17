import React from 'react';
import DynamicTitle from '../../SharedPages/DynamicTitle/DynamicTitle';
import Loading from '../../SharedPages/Loading/Loading';
import InventoryItemsForHome from '../InventoryItemsForHome/InventoryItemsForHome';
import Banner from './Banner/Banner';
import ProductDisplay from './ProductDisplay/ProductDisplay';
import Section from './Section/Section';


const Home = () => {
    if(window.location.reload === true){
        return <Loading></Loading>
    }else{
        return (
            <div>
                <DynamicTitle name='Home' />
                <Banner></Banner>
                <InventoryItemsForHome></InventoryItemsForHome>
                
                <ProductDisplay></ProductDisplay>
                <Section></Section>
            </div>
        );
    }
    
};

export default Home;