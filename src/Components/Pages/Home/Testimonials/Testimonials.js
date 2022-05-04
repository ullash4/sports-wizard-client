import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import useReviews from '../../../Hooks/useReviews';

const Testimonials = () => {
    const [reviews] = useReviews()
    return (
        <div>
            <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map(data=>(
            
                <SwiperSlide key={data._id} className="m-5 p-5 w-50 mx-auto">
                    <div className='rounded-3 shadow-lg p-4 text-center'>
                        <img src={data.picture} alt="" />
                        <h4>{data.name}</h4>
                        <p>{data.review.slice(0,20)}</p>
                    </div>
                </SwiperSlide>
        ))}
      </Swiper>
        </div>
    );
};

export default Testimonials;