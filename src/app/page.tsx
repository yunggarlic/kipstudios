import { spaceFeatures as feats, testimonials } from "./content";

import {
  Amenities,
  Carousel,
  ContentSplit,
  Hero,
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
  return (
    <React.Fragment>
      <Hero />
      <Amenities />
      <ContentSplit>
        <LeftColumn />
        <RightColumn />
      </ContentSplit>
      {/* <Rooms /> */}
      <Testimonials testimonials={testimonials} />
      <ScheduleTour />
    </React.Fragment>
  );
}

const LeftColumn = () => {
  const Heading = () => {
    return (
      <div className="flex flex-col gap-4">
        <h1>KIP studios</h1>
        <span>
          A multi-faceted 1800 sq ft production and event space, flexible for
          any need and available for by the hour bookings located in the heart
          of the legendary Bucktown, Chicago
        </span>
      </div>
    );
  };

  return (
    <div className="relative order-2 desktop:order-1 desktop:w-1/2">
      <div className="desktop:sticky top-10 flex flex-col desktop:h-full gap-10">
        <div className="flex flex-col justify-around gap-4 h-full">
          {feats.map((feat) => (
            <Feature key={feat.heading} {...feat} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RightColumn = async () => {
  const imgSubDir = "/images/studio-imgs/whiteroom";
  const imageDirectory = path.join(process.cwd(), "public", imgSubDir);
  const images = fs.readdirSync(imageDirectory);
  console.log(images);
  return (
    <div className="desktop:w-1/2 h-auto order-1 desktop:order-2">
      <Carousel className="h-full" lazy={true}>
        {images.map((imgPath, index) => {
          return (
            <ImageSlide
              key={imgPath}
              i={index}
              src={path.join(imgSubDir, imgPath)}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
