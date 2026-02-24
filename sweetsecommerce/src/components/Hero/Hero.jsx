import React from "react";
import video1 from "../../assets/hero.mp4";
import video2 from "../../assets/hero2.mp4";
import video3 from "../../assets/hero3.mp4";

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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="video-container">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="hero-video"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="video-container">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="hero-video"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="video-container">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="hero-video"
            >
              <source src={video3} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;