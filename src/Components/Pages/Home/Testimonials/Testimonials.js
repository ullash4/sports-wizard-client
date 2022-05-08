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
            <h1 className='text-center fw-bolder'>Testimonial</h1>
            <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map(data=>(
            
                <SwiperSlide key={data._id} className="m-3 p-1 w-50 mx-auto">
                   <div className='row'>
                       <div className='col-12'>
                       <div className='rounded-3 shadow-lg p-4 text-center'>
                        <img className='img-fluid rounded-circle mb-2' src={data.picture} alt="" />
                        <h4>{data.name}</h4>
                        <p>{data.review.slice(0,100)} <span className='fw-bolder'> ~{data.name} </span> </p>
                    </div>
                       </div>
                   </div>
                </SwiperSlide>
        ))}
      </Swiper>
        </div>
    );
};

export default Testimonials;