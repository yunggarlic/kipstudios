const Amenities = () => {
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
      description: "A 12 foot vaulted ceiling themed boudoir suite with a rare queen-sized circular bed, vintage vanity, and a full-length mirror, perfect for intimate portraits and lifestyle shoots.",
    },
  ];
  return (
    <div className="min-h-screen bg-yellow-200 bg-checkerboard-yellow bg-checkerboard-position-default bg-checkerboard-size-default flex justify-center container-default py-10 desktop:py-20">
      <div className="desktop:w-1/2 flex flex-col items-center gap-24">
        <h2 className="text-center h-screen desktop:h-[unset] flex justify-center items-center">Offering distinct features under the same roof.</h2>
        {amenitiesContent.map((amenity, index) => (
          <Amenity
            key={index}
            heading={amenity.heading}
            description={amenity.description}
          />
        ))}
      </div>
    </div>
  );
};

const Amenity = ({ heading, description }) => {
  return (
    <div className="flex flex-col gap-2 text-center">
      <h3 className="text-2xl">{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Amenities;
