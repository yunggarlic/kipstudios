"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ContentSplit } from "../";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Tiro_Tamil } from "next/font/google";

const Rooms = () => {
  const triggerRef = useRef(null);
  const pinRef = useRef(null);
  const animationRef = useRef(null);
  useGSAP(() => {
    if (triggerRef) {
      gsap.registerPlugin(ScrollTrigger);
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom bottom",
          markers: true,
          pin: pinRef.current,
        },
      });

      timeline.fromTo(
        animationRef.current,
        {
          ease: "power1.inOut",
          opacity: 0,
          duration: 1,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );
    }
  });

  return (
    <div className="h-[200vh] w-full" ref={triggerRef}>
      <div ref={pinRef} className="w-full transition-none">
        <div ref={animationRef}>
          <ContentSplit>
            <div className="w-1/2">Hello world</div>
            <div className="w-1/2">Hello world!</div>
          </ContentSplit>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
