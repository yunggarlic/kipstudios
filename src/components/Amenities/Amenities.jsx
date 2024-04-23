"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRef, useState } from "react";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Amenities = () => {
  const [isScrolling, setIsScrolling] = useState(false);
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
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: `+=${ref.current.clientHeight * 3}`,
          pin: true,
          scrub: 1,
          markers: true,
          snap: {
            snapTo: "labels",
            delay: 0.1,
            duration: { min: 0.2, max: 0.5 },
          },
        },
      });

      timeline
        .addLabel("start")
        .to(checkerboardYellow.current, { left: 0 })
        .addLabel("yellow-out-blue-in")
        .to(checkerboardBlue.current, { left: 0 })
        .addLabel("blue-out-green-in")
        .to(checkerboardGreen.current, { left: 0 })
        .addLabel("end")
    },
    { scope: ref }
  );

  return (
    <div className="relative w-full overflow-x-hidden">
      <div ref={ref} className="trigger flex w-[400vw] h-screen">
        <section
          ref={checkerboardYellow}
          className="absolute panel h-screen w-screen bg-checkerboard-yellow bg-checkerboard-size-default bg-checkerboard-position-default bg-yellow-200"
        >
          <div className="description flex items-center justify-center blue">
            <div>
              <h1>Horizontal snapping sections (simple)</h1>
              <p>
                Scroll vertically to scrub the horizontal animation. It also
                dynamically snaps to the sections in an organic way based on the
                velocity. The snapping occurs based on the natural ending
                position after momentum is applied, not a simplistic "wherever
                it is when the user stops".
              </p>
              <div className="scroll-down">
                Scroll down<div className="arrow"></div>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={checkerboardBlue}
          className="absolute left-[100vw] panel bg-checkerboard-blue bg-checkerboard-size-default bg-checkerboard-position-default bg-blue-200 flex items-center justify-center h-screen w-screen"
        >
          ONE
        </section>
        <section
          ref={checkerboardGreen}
          className="absolute left-[100vw] panel flex items-center justify-center h-screen w-screen bg-checkerboard-green bg-checkerboard-size-default bg-checkerboard-position-default bg-green-200"
        >
          TWO
        </section>
      </div>
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
