"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import "swiper/css";

interface CarouselProps {
  children: React.ReactNode[];
  swiperOptions?: SwiperOptions;
  lazy?: boolean;
  className: string;
}

const Carousel = ({
  children,
  swiperOptions,
  className,
  lazy = false,
}: CarouselProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={18}
      pagination={{ clickable: true }}
      loop={true}
      {...swiperOptions}
      modules={[Pagination, ...(swiperOptions?.modules || [])]}
      className={`w-full ${className}`}
      onSlideChange={(e) => {
        e.slides[e.activeIndex].setAttribute("aria-hidden", "false");
        e.slides[e.previousIndex].setAttribute("aria-hidden", "true");
      }}
    >
      {children &&
        children.map((el, i) => (
          <SwiperSlide key={el?.toString() + `${i}`}>{el}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
