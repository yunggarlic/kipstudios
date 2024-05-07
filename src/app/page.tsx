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

  return (
    <React.Fragment>
      <Hero />
      <Amenities />
      <ContentSplit className="flex-col-reverse">
        <div className="desktop:w-1/2 flex flex-col gap-4 desktop:gap-10">
          <h2>Essentials Included with Every Studio Rental</h2>
          <span>Curated tools to elevate every aspect of your creative endeavor</span>
          <ul className="grid grid-cols-2 gap-4">
            <li className="">Colored backdrops</li>
            <li className="">Props</li>
            <li className="">Extension Cords</li>
            <li className="">C-Stands</li>
            <li className="">Movable Speakers</li>
            <li className="">Apple Boxes</li>
          </ul>
        </div>
        <Image
          className="desktop:w-1/2"
          width={1200}
          height={800}
          src="/images/studio-imgs/what-you-get/1.jpg"
          alt="A set of colored backdrops against a white wall"
        />
      </ContentSplit>
      <Gallery className=" w-full container-default py-4 desktop:py-10">
        {images.map((imgPath, index) => {
          return (
            <ImageSlide key={imgPath} i={index} src={path.join(imgPath)} />
          );
        })}
      </Gallery>
      {/* <Rooms /> */}
      <Testimonials testimonials={testimonials} />
      <ScheduleTour />
    </React.Fragment>
  );
}
