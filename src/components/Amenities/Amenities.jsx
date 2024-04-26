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
  const [activeAmenity, setActiveAmenity] = useState("");
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
          start: "top top",
          end: () => `+=${ref.current.clientHeight}`,
          pin: true,
          markers: true,
        },
      });

      const timeline = gsap.timeline({ duration: { value: 0.5, max: 1 } });

      const handleClicks = panels.map((panel, i) => {
        timeline
          .addLabel(`panel-${i}`)
          .fromTo(
            panel,
            { left: () => window.innerWidth },
            { left: 0 },
            `panel-${i}`
          )
          .addPause(`panel-${i}`);

        return contextSafe(() => {
          const label = i === panels.length - 1 ? "end" : `panel-${i + 1}`;
          timeline.tweenTo(label);
        });
      });

      const handleReturn = () => {
        timeline.tweenTo("panel-0");
      };

      const amenityButtons = gsap.utils.toArray(".amenity-button button");
      amenityButtons.forEach((button, i) => {
        button.addEventListener("click", handleClicks[i]);
      });

      const backButtons = gsap.utils.toArray(".amenity-back-button");
      backButtons.forEach((button) => {
        button.addEventListener("click", handleReturn);
      });
      timeline.pause();

      return () => {
        amenityButtons.forEach((button, i) => {
          button.removeEventListener("click", handleClicks[i]);
        });
        backButtons.forEach((button) => {
          button.removeEventListener("click", handleReturn);
        });
      };
    },
    { scope: ref }
  );

  return (
    <div className="relative w-full overflow-x-hidden">
      <div ref={ref} className="trigger flex h-screen">
        <section className="absolute h-screen w-screen flex items-center justify-center bg-checkerboard-yellow bg-checkerboard-size-default bg-checkerboard-position-default bg-yellow-200">
          <div className="description w-1/2 flex flex-col gap-10 items-center justify-center blue">
            <h2 className="text-center">
              Multiple scenes for your production all under one roof
            </h2>
            {amenitiesContent.map((amenityButton, i) => (
              <AmenityButton
                key={`${amenityButton.heading}-${i}`}
                {...amenityButton}
              />
            ))}
          </div>
        </section>
        {amenitiesContent.map((amenity, i) => {
          console.log(i);
          return <Amenity />;
        })}
      </div>
    </div>
  );
};

const AmenityButton = ({ heading, description }) => {
  return (
    <div className="amenity-button flex flex-col gap-4">
      <button className="flex flex-col desktop:justify-center gap-2  text-left desktop:text-center">
        <h3 className="text-2xl">{heading}</h3>
      </button>
    </div>
  );
};

const Amenity = () => {
  return (
    <section className="absolute panel flex items-center justify-center h-screen w-screen bg-checkerboard-green bg-checkerboard-size-default bg-checkerboard-position-default bg-green-200">
      <button className="amenity-back-button">Return</button>
    </section>
  );
};

export default Amenities;
