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
        "Our primary space offers year-round ambient lighting for your shoot, equipped with wall-mounted rolling paper backdrops in a rainbow of colors.",
    },
    {
      heading: "The Blue Room",
      description: "Equipped with a rare circular bed and themed props.",
    },
  ];
  return (
    <div className="flex flex-col gap-6 container-default bg-yellow-200 py-4 desktop:py-10">
      <h2>Offering distinct features under the same roof.</h2>
      {amenitiesContent.map((amenity, index) => (
        <Amenity
          key={index}
          heading={amenity.heading}
          description={amenity.description}
        />
      ))}
    </div>
  );
};

const Amenity = ({ heading, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Amenities;
