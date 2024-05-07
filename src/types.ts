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

interface ContentSplitProps {
  children?: React.ReactNode[];
  className?: string;
}

interface ImageSlideProps {
  src: string;
  i: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
}

interface TestimonialProps {
  testimonial: Testimonial;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

interface GalleryProps {
  children: React.ReactNode[];
  className?: string;
}

interface AmenityProps {
  heading: string;
  description: string;
  imgPaths: string[];
  checkerboardColors: string;
}

type ImageFolder = "boudoir" | "checkerboard" | "whiteroom";

type Testimonial = {
  eventType: string;
  author: string;
  quote: string;
  date: string;
};
