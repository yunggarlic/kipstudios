import { links } from "./content";
import BookingCard from "../../components/BookingCard";

export default function BookNow() {
  return (
    <div className="flex flex-col h-full w-full items-center gap-10">
      <h1>Book Now</h1>
      <div className="flex flex-col items-center justify-center desktop:flex-row gap-10 h-full w-full">
        {links.map((link) => (
          <BookingCard key={link.copy} {...link} />
        ))}
      </div>
    </div>
  );
}
