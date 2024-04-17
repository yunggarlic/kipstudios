import Image from "next/image";
const ImageSlide = ({ src, i }: ImageSlideProps) => {
  return (
    <div className="h-full overflow-hidden rounded">
      <Image
        className="h-full w-full object-cover aspect-square"
        height={400}
        width={600}
        src={src}
        fetchPriority={i === 0 ? "high" : "low"}
        loading={i === 0 ? "eager" : "lazy"}
        alt="A large loft showing a floor to ceiling checkerboard room, and a tall white-painted loft."
      />
      {i > 0 && (
        <div className="swiper-lazy-preloader dark:swiper-lazy-preloader-white"></div>
      )}
    </div>
  );
};

export default ImageSlide;
