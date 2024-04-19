import { spaceFeatures as feats, testimonials } from "./content";

import {
  Amenities,
  Carousel,
  ContentSplit,
  Testimonials,
  ScheduleTour,
  SpaceFeature as Feature,
  ImageSlide,
} from "../components";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <ContentSplit>
        <LeftColumn />
        <RightColumn />
      </ContentSplit>
      <Amenities />
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
          A multi-faceted 1200 sq ft flexible production space available for by
          the hour bookings located in the heart of the legendary Bucktown,
          Chicago
        </span>
      </div>
    );
  };

  return (
    <div className="relative order-2 desktop:order-1 desktop:w-1/2">
      <div className="desktop:sticky top-10 flex flex-col desktop:h-full gap-10">
        <Heading />
        <div className="flex flex-col justify-around gap-4 h-full">
          {feats.map((feat) => (
            <Feature key={feat.heading} {...feat} />
          ))}
        </div>
      </div>
    </div>
  );
};

const RightColumn = () => {
  return (
    <div className="desktop:w-1/2 h-auto order-1 desktop:order-2">
      <Carousel className="h-full" lazy={true}>
        {[1, 2, 3, 4, 5].map((i, index) => {
          return (
            <ImageSlide
              key={i}
              i={index}
              src={`/images/kip-profile${i}.webp`}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
