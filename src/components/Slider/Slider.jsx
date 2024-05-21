import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';
import bg from '../../assets/bg.png'

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function SliderApp() {
  return (
    <div className='slider__app'>
      <Swiper
        pagination={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <div className="box">
            <h1 className='swi_h1'>Temuriylar <br />
              davri <br />
              adabiyoti
            </h1>
            <img className='swi_img' src="https://ziyouz.uz/wp-content/uploads/2015/09/amir_temur2.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <h1 className='swi_h1 swip_h1'>
              Alisher Navoiy
            </h1>
            <img className='swi_img' src="https://ziyouz.uz/wp-content/uploads/2017/01/alisher-navoiy02.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box">
            <h1 className='swi_h1 swip_h1'>
              Tohir Malik
            </h1>
            <img src="https://upload.wikimedia.org/wikipedia/en/2/2f/Tohir_Malik.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box">
            <h1 className='swi_h1 swip_h1'>
              Xudoyberdi To'xtaboyev
            </h1>
            <img src="https://president.uz/uploads/ff9ea8d5-71cc-7fa6-4a38-ddc708f3d04b_lists_4252.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
