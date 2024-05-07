const ScheduleTour = () => {
  return (
    <div className="w-full py-4 desktop:py-10 container-default flex flex-col items-center gap-10">
      <h2 className="text-center">Not sure if the space fits your needs?</h2>
      <a
        target="_blank"
        className="w-fit p-4 font-bold text-center button-default rounded"
        href="https://calendly.com/info-nuw1/30min"
      >
        Schedule a tour
      </a>
    </div>
  );
};

export default ScheduleTour;
