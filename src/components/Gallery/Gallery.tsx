"use client";
import { Carousel } from "..";
import { Grid } from "swiper/modules";
import "swiper/css/grid";
import Image from "next/image";

const Gallery = ({ children, className }: GalleryProps) => {
  return (
    <div className={className}>
      <Carousel
        className="desktop:h-screen w-3/4"
        swiperOptions={{
          spaceBetween: 30,
          slidesPerView: 1,
          grid: { rows: 1 },
          threshold: 10,
          loop: true,
          modules: [Grid],
          breakpoints: {
            1024: {
              slidesPerView: 2,
              grid: { rows: 2 },
            },
          },
        }}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default Gallery;
