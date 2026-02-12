import React from "react";
import "./SweetCollection.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import img1 from "../../assets/Ajmerikalakand.webp";
import img2 from "../../assets/Baklava.webp";
import img3 from "../../assets/pickles.webp";
import img4 from "../../assets/signature_specialities.webp";
import img5 from "../../assets/spicy_powders.webp";
import img6 from "../../assets/cake_and_cookie_treats.webp";
import img7 from "../../assets/khara_snacks.webp";
import img8 from "../../assets/jaggery_sweets.webp";

const collections = [
  { id: 1, title: "Traditional Sweets", img: img1, count: 5 },
  { id: 2, title: "Dry Fruit Specials", img: img2, count: 6 },
  { id: 3, title: "Festival Treats", img: img3, count: 4 },
  { id: 4, title: "Gift Boxes", img: img4, count: 7 },
  { id: 5, title: "Milk Sweets", img: img5, count: 5 },
  { id: 6, title: "Kaju Specials", img: img6, count: 8 },
  { id: 7, title: "Bengali Sweets", img: img7, count: 4 },
  { id: 8, title: "Premium Sweets", img: img8, count: 5 },
];

const SweetCollection = () => {
  return (
    <section className="SweetCollection">
      <div className="SweetCollection-description">
        <h1 className="headings">A Sweet Tradition Collections</h1>
        <p>Test paragraph to see if component renders.</p>
      </div>

      <Swiper
  spaceBetween={20}
  loop={true}
  speed={800}
  grabCursor={true}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  modules={[Pagination, Autoplay]}
  className="mySwiper"
  breakpoints={{
    320: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
>
  {collections.map((item) => (
    <SwiperSlide key={item.id}>
      <div className="collection-card">
        {/* background layer */}
        <div
          className="card-bg"
          style={{ backgroundImage: `url(${item.img})` }}
        ></div>
        {/* content */}
        <div className="card-content">
          <button className="btn-explore">Explore</button>
        </div>
      </div>
      <h3 className="card-title">{item.title}</h3>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
};

export default SweetCollection;