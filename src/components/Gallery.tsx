"use client";
import { Carousel } from "./";
import { Grid } from "swiper/modules";
import "swiper/css/grid";
import Image from "next/image";

const Gallery = ({ numImages }: GalleryProps) => {
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
      {new Array(numImages).fill(null).map((_, i) => (
        <Image
          key={i}
          height={400}
          width={600}
          alt={"Something"}
          src={`images/gallery-imgs/gallery_img_${i + 1}.webp`}
          className="object-cover w-full h-full"
        />
      ))}
    </Carousel>
  );
};

export default Gallery;
