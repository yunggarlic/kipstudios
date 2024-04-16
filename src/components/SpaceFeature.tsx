import Checkerboard from "./Checkerboard";
import DOMPurify from "isomorphic-dompurify";

const SpaceFeature = ({
  heading,
  description,
  checkerboardColor,
}: SpaceFeatureProps) => {
  return (
    <div className="flex items-center gap-4 button-default p-4 !rounded">
      <div className="w-1/5 flex items-center">
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
