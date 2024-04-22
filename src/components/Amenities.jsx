"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRef, useState } from "react";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Amenities = () => {
  const ref = useRef(null);
  const checkerboardYellow = useRef(null);
  const checkerboardBlue = useRef(null);
  const checkerboardGreen = useRef(null);
  const textRef = useRef(null);
  const amenitiesContent = [
    {
      heading: "Floor to ceiling checkerboard",
      description:
        "Our floor to ceiling checkerboard is a unique feature that you won't find anywhere else. The bold contrast and geometric pattern naturally enhances the vibrancy and energy of the scenes, making your production more engaging and memorable.",
    },
    {
      heading: "Ambient Natural Lighting",
      description:
        "Our primary space boasts year-round ambient lighting for your shoot, equipped with wall-mounted rolling paper backdrops in a rainbow of colors, vintage designer furniture, tables and chairs.",
    },
    {
      heading: "Boudoir Suite",
      description:
        "A 12 foot vaulted ceiling themed boudoir suite with a rare queen-sized circular bed, vintage vanity, and a full-length mirror, perfect for intimate portraits and lifestyle shoots.",
    },
  ];

  useGSAP(
    () => {
      let sections = gsap.utils.toArray(".panel");
      gsap.to(sections, {
        yPercent: -100 * sections.length,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          scrub: true,
          markers: true,
          start: () => `top bottom`,
          // base vertical scrolling on how wide the container is so it feels more natural.
          snap: {
            snapTo: 1 / sections.length,
            duration: { min: 0.3, max: 1 },
            delay: 0,
          },
        },
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className="w-full">
      <div className="w-full h-screen panel description flex items-center justify-center blue">
        <div>
          <h1>Horizontal snapping sections (simple)</h1>
          <p>
            Scroll vertically to scrub the horizontal animation. It also
            dynamically snaps to the sections in an organic way based on the
            velocity. The snapping occurs based on the natural ending position
            after momentum is applied, not a simplistic "wherever it is when the
            user stops".
          </p>
          <div className="scroll-down">
            Scroll down<div className="arrow"></div>
          </div>
        </div>
      </div>
      <section className="panel flex items-center justify-center w-full h-screen">
        ONE
      </section>
      <section className="panel flex items-center justify-center w-full h-screen">
        TWO
      </section>
      <section className="panel flex items-center justify-center w-full h-screen">
        THREE
      </section>
      <section className="panel flex items-center justify-center w-full h-screen"></section>
    </div>
  );
};

const Amenity = ({ heading, description }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="flex flex-col gap-4">
      <button className="flex flex-col desktop:justify-center gap-2 text-2xl text-left desktop:text-center">
        <h3 className="">{heading}</h3>
      </button>
      <p className={`text-justify ${isHidden ? "hidden" : "visible"}`}>
        {description}
      </p>
    </div>
  );
};

export default Amenities;
