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
}

interface TestimonialProps {
  testimonial: Testimonial;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

interface GalleryProps {
  numImages: number;
}

type Testimonial = {
  eventType: string;
  author: string;
  quote: string;
  date: string;
};
