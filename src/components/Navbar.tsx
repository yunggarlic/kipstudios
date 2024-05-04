"use client";
import Link from "next/link";
import { BookNow } from "./";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrollDelta, setScrollDelta] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  // useEffect(() => {
  //   const handleWheel = (e: WheelEvent) => {
  //     const deltaY = e.deltaY;
  //     if (deltaY < 0) {
  //       setScrollDelta(0);
  //       return;
  //     }
  //     setScrollDelta((prev) => prev + deltaY);
  //   };

  //   window.addEventListener("wheel", handleWheel);
  //   return () => window.removeEventListener("wheel", handleWheel);
  // }, []);

  // useEffect(() => {
  //   if (scrollDelta <= 0) {
  //     setIsHidden(false);
  //     return;
  //   }
  //   if (scrollDelta >= 96) {
  //     setIsHidden(true);
  //     return;
  //   }
  // }, [scrollDelta]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const nav = document.querySelector("nav");
  //     if (window.scrollY > 0) {
  //       nav?.classList.add("shadow-md");
  //     } else {
  //       nav?.classList.remove("shadow-md");
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <nav
      className={`transition-all duration-200  z-20 top-0 left-0 w-full h-24 bg-white ${
        isHidden ? "top-[-6rem]" : ""
      }`}
    >
      <div className="checkerboard-default w-full h-full flex justify-between items-center gap-10 container-default">
        <Home />
        {/* <NavLinks /> */}
        <BookNow />
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="w-1/2 desktop:w-[unset] flex flex-col">
      <Link href="/" className="lowercase">
        <div className="flex flex-col">
          <span className="text-4xl">KIP</span>
          <span className="lowercase hidden desktop:block">
            A flexible, immersive space for creatives
          </span>
        </div>
      </Link>
    </div>
  );
};

const NavLinks = () => {
  const paths = ["gallery"];
  return (
    <div className="flex gap-10">
      {paths.map((path) => (
        <NavLink key={path} copy={path} href={`/${path}`} />
      ))}
    </div>
  );
};

interface NavLinkProps {
  href: string;
  copy: string;
}
const NavLink = ({ href, copy }: NavLinkProps) => {
  const toSentenceCase = (str: string) =>
    str.toLowerCase().charAt(0).toUpperCase() + str.slice(1);

  return (
    <Link href={href} className="lowercase">
      {toSentenceCase(copy)}
    </Link>
  );
};

export default Navbar;
