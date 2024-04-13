"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Carousel = ({ children }: CarouselProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={18}
      pagination={{ clickable: true }}
      navigation
      scrollbar={{ draggable: true }}
      modules={[Pagination]}
    >
      {children &&
        children.map((el, i) => (
          <SwiperSlide key={el?.toString() + `${i}`}>{el}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
