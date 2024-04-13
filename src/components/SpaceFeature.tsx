import Checkerboard from "./Checkerboard";
import DOMPurify from "isomorphic-dompurify";

const SpaceFeature = ({
  heading,
  description,
  checkerboardColor,
}: SpaceFeatureProps) => {
  return (
    <div className="flex gap-4">
      <div>
        <Checkerboard color={checkerboardColor} />
      </div>
      <div className="flex flex-col w-full gap-2">
        <h2>{heading}</h2>
        <div className="">
          <span
            key={description}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SpaceFeature;
