import Image from "next/image";
const ImageSlide = ({
  src,
  i,
  fill = false,
  className = "",
  containerClassName,
}: ImageSlideProps) => {
  return (
    <div className={`${containerClassName} overflow-hidden rounded`}>
      <Image
        className={`h-full w-full aspect-square ${className}`}
        width={fill ? undefined : 1200}
        height={fill ? undefined : 800}
        src={src}
        fill={fill}
        priority={i === 0 ? true : false}
        loading={i === 0 ? "eager" : "lazy"}
        alt="A large loft showing a floor to ceiling checkerboard room, and a tall white-painted loft."
      />
      {i > 0 && <div className="swiper-lazy-preloader"></div>}
    </div>
  );
};

export default ImageSlide;
