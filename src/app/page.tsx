import { spaceFeatures as feats, testimonials } from "./content";

import {
  Amenities,
  ContentSplit,
  Hero,
  Gallery,
  Testimonials,
  ScheduleTour,
  ImageSlide,
} from "../components";
import Image from "next/image";
import React from "react";
import fs from "fs";
import path from "path";
export default function Home() {
  const imgSubDirs = [
    "/images/studio-imgs/whiteroom",
    "/images/studio-imgs/boudoir",
    "/images/studio-imgs/checkerboard",
  ];
  const imageDirectories = imgSubDirs.map((imgSubDir) =>
    path.join(process.cwd(), "public", imgSubDir)
  );

  const images = imageDirectories.flatMap((imageDirectory, i) => [
    ...fs
      .readdirSync(imageDirectory)
      .map((img) => path.join(imgSubDirs[i], img)),
  ]);

  const studioInUsePath = path.join(
    process.cwd(),
    "public",
    "images/studio-in-use"
  );
  const studioInUseImgs = fs.readdirSync(studioInUsePath).map((img) => {
    return path.join("/images/studio-in-use", img);
  });

  return (
    <React.Fragment>
      <Hero />
      <Amenities />
      <ContentSplit className="flex-col-reverse items-center">
        <div className="desktop:w-1/2 flex flex-col justify-center gap-4 desktop:gap-10">
          <h2 className="desktop:text-6xl">
            Essentials Included with Every Studio Rental
          </h2>
          <span>
            The studio comes equipped with many features and tools to enhance
            your shoot. Here are some of the amenities included with every
            rental:
          </span>
          <ul className="grid grid-cols-2 gap-4">
            <li className="font-bold desktop:text-center">Colored backdrops</li>
            <li className="font-bold desktop:text-center">Props</li>
            <li className="font-bold desktop:text-center">Reflectors</li>
            <li className="font-bold desktop:text-center">Extension Cords</li>
            <li className="font-bold desktop:text-center">C-Stands</li>
            <li className="font-bold desktop:text-center">Portable Speakers</li>
            <li className="font-bold desktop:text-center">Apple Boxes</li>
            <li className="font-bold desktop:text-center">Sandbags</li>
            <li className="font-bold desktop:text-center">Clamps</li>
            <li className="font-bold desktop:text-center">Ladders</li>
            <li className="font-bold desktop:text-center">Steamer</li>
            <li className="font-bold desktop:text-center">Clothing Rack</li>
          </ul>
        </div>
        <div className="flex justify-center desktop:w-1/2 h-full">
          <Image
            width={1200}
            height={800}
            src="/images/studio-imgs/what-you-get/1.jpg"
            alt="A set of colored backdrops against a white wall"
          />
        </div>
      </ContentSplit>
      <Gallery className=" w-full container-default py-4 desktop:py-10">
        {studioInUseImgs.map((imgPath, index) => {
          return (
            <ImageSlide
              containerClassName="h-full"
              className="object-cover"
              key={imgPath}
              i={index}
              src={path.join(imgPath)}
            />
          );
        })}
      </Gallery>
      {/* <Rooms /> */}
      <Testimonials testimonials={testimonials} />
      <ScheduleTour />
      <div className="container-default py-4 desktop:py-10">
        <Image
          alt=""
          className="desktop:hidden block"
          width={1600}
          height={900}
          src="/images/profiles/kip-profile4.jpg"
        />
        <Image
          alt=""
          className="hidden desktop:block"
          width={1600}
          height={900}
          src="/images/profiles/kip-profile2.jpg"
        />
      </div>
    </React.Fragment>
  );
}
