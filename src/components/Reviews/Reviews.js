import React from "react";
import style from "./Reviews.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import pic from "../../assets/photo_5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Slide from "./Slide";
import reviews from "./ReviewList";

function Reviews() {
  return (
    <div id="review" className={style.container}>
      <h2>Отзывы</h2>

      <Swiper
        autoHeight={true}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={style.swiper}
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <Slide author={review.author} content={review.content} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <img src={pic} alt="Elena on a chair in cafe" />
    </div>
  );
}

export default Reviews;
