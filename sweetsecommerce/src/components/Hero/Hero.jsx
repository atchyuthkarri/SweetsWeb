import React from "react";
import banner from "../../assets/banner_2.jpeg";
import banner2 from "../../assets/banner1.jpeg";
import banner3 from "../../assets/banner3.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <img src={banner} alt="Sweets Banner" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner2} alt="Sweets Banner" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={banner3} alt="Sweets Banner" />
        </SwiperSlide>
      </Swiper>

    </section>
  );
};

export default Hero;