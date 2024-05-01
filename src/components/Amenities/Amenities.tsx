"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRef, useState, useEffect } from "react";
import { Arrow, ContentSplit, Carousel, ImageSlide } from "..";
import { getAmenityAnimations } from "./animations";
import { amenitiesContent } from "./content";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Amenities = () => {
  const ref = useRef(null);

  useEffect(() => {
    function callAfterResize(func: Function, delay?: number) {
      let dc = gsap.delayedCall(delay || 0.2, func).pause(),
        handler = () => dc.restart(true);
      window.addEventListener("resize", handler);
      return handler; // in case you want to window.removeEventListener() later
    }

    const handler = callAfterResize(() => gsap.matchMediaRefresh());

    return () => window.removeEventListener("resize", handler);
  }, []);

  useGSAP((context, contextSafe) => getAmenityAnimations(ref, contextSafe), {
    scope: ref,
  });

  return (
    <div ref={ref} className="w-full">
      <div className="trigger flex">
        <section className="h-screen desktop:h-full container-default py-10 desktop:py-20 w-screen flex bg-checkerboard-yellow bg-checkerboard-size-default bg-checkerboard-position-default bg-yellow-200">
          <div className="description flex gap-10 blue">
            <h2 className="w-1/2 text-4xl desktop:text-6xl mb-10">
              Multiple scenes for your production all under one roof
            </h2>
            <div className="w-1/2 flex flex-col items-start gap-10">
              {amenitiesContent.map((amenityButton, i) => (
                <AmenityButton
                  key={`${amenityButton.heading}-${i}`}
                  {...amenityButton}
                />
              ))}
            </div>
          </div>
        </section>
        {amenitiesContent.map((amenity, i) => {
          return <Amenity key={amenity.heading} {...amenity} />;
        })}
      </div>
    </div>
  );
};

const AmenityButton = ({ heading }: { heading: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="w-full amenity-button flex flex-col gap-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button className="flex items-center justify-between gap-4 text-left desktop:text-center">
        <h3 className="text-left text-2xl desktop:text-4xl">{heading}</h3>
        <Arrow hover={hover} />
      </button>
    </div>
  );
};

const Amenity = ({
  description,
  imgPaths,
  checkerboardColors,
}: AmenityProps) => {
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  return (
    <section
      ref={ref}
      className={`overflow-hidden left-[100%] w-full h-full container-default z-10 absolute panel flex items-center justify-center bg-checkerboard-size-default bg-checkerboard-position-default ${checkerboardColors}`}
    >
      <ContentSplit className="amenity-content">
        <div className=" relative w-1/2 flex items-center">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex flex-row items-center gap-4 absolute top-0 left-0 amenity-back-button"
          >
            <Arrow flip={true} hover={hover} />
            Return
          </button>
          <h4 className="font-bold text-2xl desktop:text-4xl text-left">{description}</h4>
        </div>
        <div className="w-1/2 flex items-center">
          <Carousel className="h-full">
            {imgPaths.map((imgPath, index) => {
              return <ImageSlide key={imgPath} i={index} src={imgPath} />;
            })}
          </Carousel>
        </div>
      </ContentSplit>
    </section>
  );
};

export default Amenities;
