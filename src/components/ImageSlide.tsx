const ImageSlide = ({ src }: ImageSlideProps) => {
  return (
    <div className="h-full overflow-hidden rounded">
      <img
        className="h-full w-full object-cover aspect-square"
        height="100%"
        width="100%"
        src={src}
        alt="A large loft showing a floor to ceiling checkerboard room, and a tall white-painted loft."
      />
    </div>
  );
};

export default ImageSlide;
