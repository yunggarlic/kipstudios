import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center h-[100px]">
      <Home />
      <BookNow />
    </nav>
  );
};

const Home = () => {
  return (
    <div className="w-1/2 desktop:w-[unset] flex flex-col">
      <Link href="/" className="lowercase">
        Kip Studios
      </Link>
      <span className="lowercase">
        A flexible, immersive space for creatives
      </span>
    </div>
  );
};

const BookNow = () => (
  <Link className="text-center w-1/2 desktop:w-[unset] p-4 rounded border-2 hover:border-blue-200 hover:bg-blue-900" href="/book-now">
    Book Now
  </Link>
);

export default Navbar;
