import React from "react";
import banner from "../../assets/Tiyyagundhiii_files/banner1.png";
import banner2 from "../../assets/Tiyyagundhiii_files/banner2.png";
import banner3 from "../../assets/Tiyyagundhiii_files/banner3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
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