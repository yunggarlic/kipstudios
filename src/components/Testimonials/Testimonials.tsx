"use client";
import { Carousel, Blockquote } from "../";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "./Testimonials.css";

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <section className="flex flex-col w-full items-center gap-10 container-default">
      <h2>Testimonials</h2>
      <div className="flex flex-col items-center w-full gap-4">
        <div className="relative flex items-center gap-4 desktop:gap-10 w-full desktop:w-4/6">
          <div className="swiper-button-prev !hidden desktop:!block" />
          <Carousel
            className="fade-out-two-sides"
            swiperOptions={{
              height: 300,
              centeredSlides: true,
              slidesPerView: 1.2,
              spaceBetween: 18,
              autoplay: {
                delay: 5000,
              },
              pagination: {
                el: ".swiper-pagination-custom",
                clickable: true,
                type: "bullets",
                enabled: true,
              },
              modules: [Pagination, Autoplay, Navigation],
              navigation: {
                enabled: false,
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },

              breakpoints: {
                1024: {
                  navigation: { enabled: true },
                  pagination: { enabled: false },
                },
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <Testimonial
                key={`${testimonial.author} ${testimonial.quote}`}
                testimonial={testimonial}
              />
            ))}
          </Carousel>
          <div className="swiper-button-next !hidden desktop:!block" />
        </div>
        <div className="flex justify-center swiper-pagination-custom desktop:hidden !static" />
      </div>
    </section>
  );
};

const Testimonial = ({
  testimonial: { eventType, quote, author, date },
}: TestimonialProps) => {
  return (
    <div className="h-full flex items-center justify-center p-1">
      <div className="flex flex-col justify-between w-full h-full desktop:min-w-[325px] p-8 button-default rounded">
        <div className="pb-4">
          <div className="w-fit rounded">
            <p className="w-fit p-2 bg-yellow-200 dark:text-black font-bold rounded-xl ">
              {eventType}
            </p>
          </div>
        </div>
        <Blockquote quote={quote} citation={author} />
        <p className="mt-4">{date}</p>
      </div>
    </div>
  );
};

export default Testimonials;
