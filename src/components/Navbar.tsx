"use client";
import Link from "next/link";
import { BookNow } from "./";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 px-4 desktop:px-10 w-full h-24 flex justify-between items-center gap-10">
      <Home />
      {/* <NavLinks /> */}
      <BookNow />
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
