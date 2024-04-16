"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import "swiper/css";

interface CarouselProps {
  children: React.ReactNode[];
  swiperOptions?: SwiperOptions;
}

const Carousel = ({ children, swiperOptions }: CarouselProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={18}
      pagination={{ clickable: true }}
      loop={true}
      modules={[Pagination]}
      {...swiperOptions}
      className={`w-full ${swiperOptions?.className}`}
    >
      {children &&
        children.map((el, i) => (
          <SwiperSlide key={el?.toString() + `${i}`}>{el}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
