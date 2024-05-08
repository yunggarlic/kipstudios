import Image from "next/image";
const ImageSlide = ({
  src,
  i,
  fill = true,
  className = "",
  containerClassName,
}: ImageSlideProps) => {
  return (
    <div className={`${containerClassName} overflow-hidden rounded`}>
      <Image
        className={`h-full w-full aspect-square ${className}`}
        width={1200}
        height={800}
        src={src}
        priority={i === 0 ? true : false}
        loading={i === 0 ? "eager" : "lazy"}
        alt="A large loft showing a floor to ceiling checkerboard room, and a tall white-painted loft."
      />
      {i > 0 && <div className="swiper-lazy-preloader"></div>}
    </div>
  );
};

export default ImageSlide;
