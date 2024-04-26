"use client";
import { Carousel } from "./";
import { Grid } from "swiper/modules";
import "swiper/css/grid";
import Image from "next/image";

const Gallery = ({ numImages, children }: GalleryProps) => {
  return (
    <Carousel
      className="h-screen w-3/4"
      swiperOptions={{
        spaceBetween: 30,
        slidesPerView: 2,
        grid: { rows: 2 },
        threshold: 10,
        loop: true,
        modules: [Grid],
      }}
    >
      {children}
    </Carousel>
  );
};

export default Gallery;
