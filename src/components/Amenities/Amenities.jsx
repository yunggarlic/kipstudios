"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { useRef, useState, useEffect } from "react";

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
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: () => `+=${ref.current.clientHeight * panels.length}`,
          pin: true,
          scrub: 1,
          markers: true,
          snap: {
            snapTo: "labels",
            delay: 0.1,
            duration: { min: 1, max: 3 },
          },
        },
      });

      const handleClicks = panels.map((panel, i) => {
        if (i === 0) timeline.addLabel(`panel-${i}`).to(panel, { left: 0 });
        else {
          timeline
            .addLabel(`panel-${i}`)
            .fromTo(panel, { left: () => window.innerWidth }, { left: 0 });
        }

        return contextSafe(() => {
          const label = i === panels.length - 1 ? "end" : `panel-${i + 1}`;
          gsap.to(window, {
            scrollTo: timeline.scrollTrigger.labelToScroll(label), duration: 1
          });
        });
      });

      timeline.addLabel("end");
      timeline.to(ref.current, { duration: 0.1 });

      const buttons = gsap.utils.toArray(".amenity button");
      buttons.forEach((button, i) => {
        button.addEventListener("click", handleClicks[i]);
      });

      return () => {
        buttons.forEach((button, i) => {
          button.removeEventListener("click", handleClicks[i]);
        });
      };
    },
    { scope: ref }
  );

  return (
    <div className="relative w-full overflow-x-hidden">
      <div ref={ref} className="trigger flex h-screen">
        <section className="absolute panel h-screen w-screen flex items-center justify-center bg-checkerboard-yellow bg-checkerboard-size-default bg-checkerboard-position-default bg-yellow-200">
          <div className="description w-1/2 flex flex-col gap-10 items-center justify-center blue">
            <h2 className="text-center">
              Multiple scenes for your production all under one roof
            </h2>
            {amenitiesContent.map((amenity, i) => (
              <Amenity key={`${amenity.heading}-${i}`} {...amenity} />
            ))}
            <div className="scroll-down">
              Scroll down<div className="arrow"></div>
            </div>
          </div>
        </section>
        <section className="absolute panel bg-checkerboard-blue bg-checkerboard-size-default bg-checkerboard-position-default bg-blue-200 flex items-center justify-center h-screen w-screen">
          ONE
        </section>
        <section className="absolute panel flex items-center justify-center h-screen w-screen bg-checkerboard-green bg-checkerboard-size-default bg-checkerboard-position-default bg-green-200">
          TWO
        </section>
      </div>
    </div>
  );
};

const Amenity = ({ heading, description }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="amenity flex flex-col gap-4">
      <button
        onClick={() => setIsHidden((prev) => !prev)}
        className="flex flex-col desktop:justify-center gap-2  text-left desktop:text-center"
      >
        <h3 className="text-2xl">{heading}</h3>
        <p className={`text-justify ${isHidden ? "hidden" : "visible"}`}>
          {description}
        </p>
      </button>
    </div>
  );
};

export default Amenities;
