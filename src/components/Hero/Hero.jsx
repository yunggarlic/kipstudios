"use client";
import Image from "next/image";
import "./hero.css";

const Hero = () => {
  const imgPath = "/images/studio-imgs/profile-imgs/kip-profile1.webp";
  return (
    <div className="hero relative h-screen-minus-nav w-full">
      <div className="w-full h-full relative flex items-center justify-center desktop:justify-end ">
        <div className="absolute w-full h-full bg-white z-10 opacity-50"></div>
        <div className="absolute w-full h-full">
          <Image
            width={1600}
            height={900}
            priority={true}
            alt="A wide shot of the studio space with a white backdrop and a circular bed in the center."
            className="object-cover h-full w-full "
            src={imgPath}
          />
        </div>
        <div className="text container-default flex flex-col desktop:items-end gap-10 z-10">
          <h1>KIP studios</h1>
          <p className="text-justify font-medium max-w-96">
            A multi-faceted 1800 sq ft production and event space, flexible for
            any need and available for by the hour bookings located in the heart
            of the legendary Bucktown, Chicago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
