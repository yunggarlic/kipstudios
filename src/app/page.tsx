import Carousel from "../components/Carousel";
import Feature from "../components/SpaceFeature";
import ImageSlide from "../components/ImageSlide";
import { spaceFeatures as feats } from "./content";

export default function Home() {
  return (
    <div className="flex flex-col h-full desktop:flex-row w-full gap-4 desktop:gap-10">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

const LeftColumn = () => {
  const Heading = () => {
    return (
      <div>
        <h1>KIP studios</h1>
        <span>
          1200 sq ft flexible production space available for by the hour
          bookings
        </span>
      </div>
    );
  };

  const SpaceFeatures = ({ features }: SpaceFeaturesProps) => {
    return;
  };

  return (
    <div className="relative order-2 desktop:order-1 desktop:w-1/2">
      <div className="desktop:sticky top-10 flex flex-col desktop:h-fit gap-10">
        <Heading />
        {feats.map((feat) => (
          <Feature key={feat.heading} {...feat} />
        ))}
      </div>
    </div>
  );
};

const RightColumn = () => {
  return (
    <div className="desktop:w-1/2 h-full order-1 desktop:order-2">
      <Carousel>
        <ImageSlide src="kip-profile.webp" />
        <ImageSlide src="kip-profile2.webp" />
        <ImageSlide src="kip-profile3.webp" />
        <ImageSlide src="kip-profile4.webp" />
      </Carousel>
    </div>
  );
};
