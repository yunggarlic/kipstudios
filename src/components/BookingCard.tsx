const BookingCard = ({ href, copy }: BookingCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="w-full desktop:w-[unset] flex flex-col h-full items-center w-1/3 border rounded p-4 desktop:p-10"
    >
      <span>{copy}</span>
      <div>Lorem ipsum</div>
    </a>
  );
};

export default BookingCard;
