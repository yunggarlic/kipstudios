"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BookNow = () => {
  const pathname = usePathname();
  if (pathname === "/book-now") return <></>;
  return (
    <Link
      className="text-center font-bold w-1/2 desktop:w-[unset] p-4 button-default rounded"
      href="/book-now"
    >
      Book Now
    </Link>
  );
};

export default BookNow;
