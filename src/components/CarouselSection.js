import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import features from '../data/CarouselData'
import '../styles/CarouselSection.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselSection = () =>{
    return(
        <>
        <div className="carsoule-text-container">
            <div>
            <h1 className="carousel-heading">HOW AROGYA SYNC <br/>STANDS OUT</h1>
            <p className="carousel-para">An AI-powered device that retrofits existing hospital <br/>monitors for real-time, centralized patient data<br/> tracking.</p>
            </div>
        </div>

        <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={35} // Reduce space to bring cards closer
    slidesPerView={3} // Default for mid-size screens
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    breakpoints={{

        1400: { slidesPerView: 4, spaceBetween: 35 },
        1024: { slidesPerView: 4, spaceBetween: 40 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        600: { slidesPerView: 2.5, spaceBetween: 25 },
        480: { slidesPerView: 1, spaceBetween: 20 },
    }}
>
        
        {features.map((feature, index) => (
        <SwiperSlide key={index}>
        <div className="feature-card">
          <img src={feature.image} alt={feature.title} className="feature-image" />
          <div className="feature-overlay">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      </SwiperSlide>
        ))}
        </Swiper>
</>

    )
}
export default CarouselSection