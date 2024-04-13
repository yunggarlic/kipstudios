"use client";

import { SwiperSlide } from "swiper/react";

const ImageSlide = ({ src }: ImageSlideProps) => {
  return (
    <img
      className="h-full w-full object-cover aspect-square"
      height="100%"
      width="100%"
      src={src}
      alt="A large loft showing a floor to ceiling checkerboard room, and a tall white-painted loft."
    />
  );
};

export default ImageSlide;
