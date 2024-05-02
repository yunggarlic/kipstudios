const BookingCard = ({ href, copy }: BookingCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-full desktop:w-1/3 desktop:h-[300px] text-4xl flex flex-col items-center justify-center button-default rounded p-4 desktop:p-10"
    >
      {copy}
    </a>
  );
};

export default BookingCard;
