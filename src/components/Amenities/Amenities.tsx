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

  // useEffect(() => {
  //   function callAfterResize(func: Function, delay?: number) {
  //     let dc = gsap.delayedCall(delay || 0.2, func).pause(),
  //       handler = () => dc.restart(true);
  //     window.addEventListener("resize", handler);
  //     return handler; // in case you want to window.removeEventListener() later
  //   }

  //   const handler = callAfterResize(() => gsap.matchMediaRefresh());

  //   return () => window.removeEventListener("resize", handler);
  // }, []);

  useGSAP((context, contextSafe) => getAmenityAnimations(ref, contextSafe), {
    scope: ref,
  });

  return (
    <div ref={ref} className="w-full">
      <div className="trigger flex">
        <section className="container-default desktop:h-[500px] desktop:items-center py-8 desktop:py-10 w-full flex bg-yellow-200">
          <div className="description w-full flex h-full flex-col items-center gap-10 desktop:gap-20 desktop:flex-row blue">
            <div className="desktop:w-1/2">
              <h2 className="desktop:w-4/5 text-5xl desktop:text-6xl font-bold">
                Multiple scenes to fit any mood all under one roof
              </h2>
            </div>
            <div className="w-full desktop:w-1/2 h-full flex flex-col desktop:items-end gap-10">
              <div className="desktop:w-4/5 flex flex-col items-start desktop:items-end h-full gap-10">
                {amenitiesContent.map((amenityButton, i) => (
                  <AmenityButton
                    key={`${amenityButton.heading}-${i}`}
                    {...amenityButton}
                  />
                ))}
              </div>
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
      className="w-full h-full amenity-button flex flex-col gap-4"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button className="relative w-full h-full flex border p-4 rounded-full border-black text-left desktop:text-center">
        <div
          className={`absolute bottom-0 -translate-x-1/2 -translate-y-1/2
          top-1/2 left-1/2 transform transition scale-0 rounded-full w-full h-full bg-slate-200 ${
            hover ? "scale-100" : ""
          }`}
        ></div>
        <div className="h-full w-full flex items-center justify-between gap-4 z-10">
          <h3 className="mx-auto text-center desktop:text-4xl">{heading}</h3>
          <div className="">
            <Arrow hover={hover} />
          </div>
        </div>
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
      className={`invisible py-4 overflow-hidden left-[100%] w-full container-default z-10 absolute panel flex items-center justify-center bg-checkerboard-size-default bg-checkerboard-position-default ${checkerboardColors}`}
    >
      <ContentSplit className="amenity-content !px-0">
        <div className="relative desktop:w-1/2 flex flex-col-reverse desktop:gap-10 h-full desktop:flex-row desktop:items-center">
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="flex flex-row items-center w-fit gap-4 desktop:my-0 desktop:absolute top-0 left-0 amenity-back-button"
          >
            <div
              className={`absolute transform scale-0 rounded-full w-[50px] h-[50px] ${
                hover ? "scale-50" : ""
              }`}
            ></div>
            <Arrow flip={true} hover={hover} />
            Return
          </button>
          <h4 className="font-bold text-xl desktop:text-4xl text-left mb-auto desktop:mb-[unset]">
            {description}
          </h4>
        </div>
        <div className="order-first max-h-[70%] h-full desktop:max-h-[unset] desktop:order-[unset] desktop:w-1/2 flex items-center">
          <Carousel className="h-full">
            {imgPaths.map((imgPath, index) => {
              return (
                <ImageSlide
                  key={imgPath}
                  i={index}
                  src={imgPath}
                  fill={true}
                  containerClassName="desktop:h-full"
                  className="object-cover desktop:h-full desktop:aspect-unset desktop:object-cover"
                />
              );
            })}
          </Carousel>
        </div>
      </ContentSplit>
    </section>
  );
};

export default Amenities;
