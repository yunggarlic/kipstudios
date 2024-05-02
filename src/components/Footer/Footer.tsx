import { Checkerboard, BookNow } from "..";

const Footer = () => {
  return (
    <footer className="flex items-end justify-between py-4 desktop:py-10 container-default mt-auto">
      <div className="flex flex-col gap-4">
        <Checkerboard />
        <div className="flex flex-col">
          <Email />
          <Address />
        </div>
      </div>
      <BookNow />
    </footer>
  );
};

const Email = () => (
  <a href="mailto:info@kipstudios.com">info@kipstudios.com</a>
);

const Address = () => (
  <a href="https://www.google.com/maps/place/1902+N+Milwaukee+Ave,+Chicago,+IL+60647/data=!4m2!3m1!1s0x880fd2bd6128ae9f:0xc2e15971490e480?sa=X&ved=1t:242&ictx=111">
    1902 N. Milwaukee Ave, Chicago, IL 60647
  </a>
);

export default Footer;
