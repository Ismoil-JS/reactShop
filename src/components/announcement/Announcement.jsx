import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.scss";
import "./Announcement.scss";
import { Autoplay } from "swiper";

const Announcement = () => {
  return (
    <div className="announcement">
     <Swiper 
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        loop={true} 
        modules={[Autoplay]}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Announcement