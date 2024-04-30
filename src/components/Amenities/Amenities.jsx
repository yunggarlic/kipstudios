"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRef, useState, useEffect } from "react";
import { Arrow } from "../";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Amenities = () => {
  const ref = useRef(null);
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

  useEffect(() => {
    function callAfterResize(func, delay) {
      let dc = gsap.delayedCall(delay || 0.2, func).pause(),
        handler = () => dc.restart(true);
      window.addEventListener("resize", handler);
      return handler; // in case you want to window.removeEventListener() later
    }

    const handler = callAfterResize(() => gsap.matchMediaRefresh());

    return () => window.removeEventListener("resize", handler);
  }, []);

  useGSAP(
    (context, contextSafe) => {
      const panels = gsap.utils.toArray(".panel");
      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
        },
      });

      pinTimeline.fromTo(
        ".amenity-button",
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 }
      );

      const { handleReturns, handleClicks } = panels.reduce((acc, panel, i) => {
        const tl = gsap
          .timeline({ paused: true })
          .fromTo(
            panel,
            {
              height: panel.parentElement.offsetHeight,
              left: () => window.innerWidth,
            },
            { left: 0 }
          )
          .to(window, { scrollTo: { y: () => ref.current } })
          .to(
            [ref.current, panel],
            {
              height: () => window.innerHeight,
              ease: "power2.inOut",
            },
            "<"
          );

        if (acc["handleReturns"])
          acc["handleReturns"].push(contextSafe(() => tl.reverse()));
        else acc["handleReturns"] = [contextSafe(() => tl.reverse())];

        if (acc["handleClicks"])
          acc["handleClicks"].push(contextSafe(() => tl.play()));
        else acc["handleClicks"] = [contextSafe(() => tl.play())];

        return acc;
      }, {});

      const amenityButtons = gsap.utils.toArray(".amenity-button button");
      amenityButtons.forEach((button, i) => {
        button.addEventListener("click", handleClicks[i]);
      });

      const backButtons = gsap.utils.toArray(".amenity-back-button");
      backButtons.forEach((button, i) => {
        button.addEventListener("click", handleReturns[i]);
      });

      return () => {
        amenityButtons.forEach((button, i) => {
          button.removeEventListener("click", handleClicks[i]);
        });
        backButtons.forEach((button, i) => {
          button.removeEventListener("click", handleReturns[i]);
        });
      };
    },
    { scope: ref }
  );

  return (
    <div className="overflow-hidden w-full">
      <div ref={ref} className="trigger flex">
        <section className="container-default py-10 desktop:py-20 w-screen flex bg-checkerboard-yellow bg-checkerboard-size-default bg-checkerboard-position-default bg-yellow-200">
          <div className="description flex gap-10 blue">
            <h2 className="w-1/2 text-4xl desktop:text-6xl mb-10">
              Multiple scenes for your production all under one roof
            </h2>
            <div className="w-1/2 flex flex-col items-end gap-10">
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
          return <Amenity />;
        })}
      </div>
    </div>
  );
};

const AmenityButton = ({ heading, description }) => {
  return (
    <div className="amenity-button flex flex-col gap-4">
      <button className="flex items-center justify-between desktop:justify-center gap-4 text-left desktop:text-center">
        <h3 className="text-2xl desktop:text-4xl">{heading}</h3>
        <Arrow />
      </button>
    </div>
  );
};

const Amenity = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="left-[100%] h-full z-10 absolute panel flex items-center justify-center w-screen bg-checkerboard-green bg-checkerboard-size-default bg-checkerboard-position-default bg-green-200"
    >
      <button className="absolute top-4 left-4 amenity-back-button">
        Return
      </button>
    </section>
  );
};

export default Amenities;
