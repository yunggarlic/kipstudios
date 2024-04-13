interface SpaceFeaturesProps {
  features: SpaceFeatureProps[];
}

interface SpaceFeatureProps {
  heading: string;
  description: string;
  checkerboardColor: string;
}

interface CheckerboardProps {
  width?: number;
  height?: number;
  color?: string;
}

interface BookingCardProps {
  copy: string;
  href: string;
}

interface CarouselProps {
  children: React.ReactNode[];
}

interface ImageSlideProps {
  src: string;
}
