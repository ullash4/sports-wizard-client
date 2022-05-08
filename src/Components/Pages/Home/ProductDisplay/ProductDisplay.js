import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const ProductDisplay = () => {
    const [products] = useProduct()
    return (
        <div className='container-fluid shadow-lg my-5 p-5'>
          <h1 className='text-center'>Some of our product displayed</h1>
            <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {products.map(product=>(
            <SwiperSlide key={product._id} className="text-center my-5 p-5">
                <img className='rounded-3' src={product.picture} alt="" />
                <h5>{product.name}</h5>
            </SwiperSlide>
        ))}
      </Swiper>
        </div>
    );
};

export default ProductDisplay;