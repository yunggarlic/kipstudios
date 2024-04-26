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
  const imgSubDir = "/images/studio-imgs/whiteroom";
  const imageDirectory = path.join(process.cwd(), "public", imgSubDir);
  const images = fs.readdirSync(imageDirectory);
  return (
    <React.Fragment>
      <Hero />
      <Amenities />
      <div className="w-full container-default py-10 desktop:py-20">
        <Gallery className="h-full" lazy={true}>
          {images.map((imgPath, index) => {
            return (
              <ImageSlide
                key={imgPath}
                i={index}
                src={path.join(imgSubDir, imgPath)}
              />
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