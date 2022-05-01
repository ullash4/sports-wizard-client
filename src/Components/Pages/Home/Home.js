import React from 'react';
import Testimonials from '../../SharedPages/Testimonials/Testimonials';
import Carousel from '../Carousel/Carousel';
import Subscription from '../Subscription/Subscription';
import Timeline from '../Timeline/Timeline';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Testimonials></Testimonials>
            <Timeline></Timeline>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;