import { spaceFeatures as feats, testimonials } from "./content";

import {
  Amenities,
  Carousel,
  ContentSplit,
  Hero,
  Gallery,
  Rooms,
  Testimonials,
  ScheduleTour,
  SpaceFeature as Feature,
  ImageSlide,
} from "../components";
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
      <div className="w-full container-default py-10 desktop:py-20">
        <Gallery className="h-full">
          {images.map((imgPath, index) => {
            return (
              <ImageSlide key={imgPath} i={index} src={path.join(imgPath)} />
            );
          })}
        </Gallery>
      </div>
      {/* <Rooms /> */}
      <Testimonials testimonials={testimonials} />
      <ScheduleTour />
    </React.Fragment>
  );
}
