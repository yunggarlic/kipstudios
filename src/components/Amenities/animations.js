import gsap from "gsap";

export const getAmenityAnimations = (ref, contextSafe) => {
  const panels = gsap.utils.toArray(".panel");
  const pinTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ref.current,
      start: "top center",
    },
  });

  pinTimeline.fromTo(
    ".amenity-button",
    { opacity: 0 },
    { opacity: 1, stagger: 0.2 }
  );

  const mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    const { handleReturns, handleClicks } = panels.reduce((acc, panel, i) => {
      const tl = gsap
        .timeline({ paused: true })
        .fromTo(
          panel,
          {
            visibility: "hidden",
            height: panel.parentElement.offsetHeight,
            left: () => window.innerWidth,
          },
          { left: 0, visibility: "visible" }
        )
        .to(window, { scrollTo: () => ref.current, onComplete: () => {} })
        .to(
          [ref.current, panel],
          {
            height: () => window.innerHeight,
            ease: "power2.inOut",
          },
          "<"
        )
        .fromTo(".amenity-content", { opacity: 0 }, { opacity: 1 });

      if (acc["handleReturns"])
        acc["handleReturns"].push(
          contextSafe(() => {
            tl.reverse();
          })
        );
      else
        acc["handleReturns"] = [
          contextSafe(() => {
            tl.reverse();
          }),
        ];

      if (acc["handleClicks"])
        acc["handleClicks"].push(
          contextSafe(() => {
            tl.invalidate();
            tl.play();
          })
        );
      else
        acc["handleClicks"] = [
          contextSafe(() => {
            tl.invalidate();
            tl.play();
          }),
        ];

      return acc;
    }, {});

    const amenityButtons = gsap.utils.toArray(".amenity-button button");
    amenityButtons.forEach((button, i) => {
      button.addEventListener("click", handleClicks[i]);
    });

    const backButtons = gsap.utils.toArray(".amenity-back-button");
    backButtons.forEach((button, i) => {
      button.addEventListener("click", handleReturns[i]);
    });

    return () => {
      amenityButtons.forEach((button, i) => {
        button.removeEventListener("click", handleClicks[i]);
      });
      backButtons.forEach((button, i) => {
        button.removeEventListener("click", handleReturns[i]);
      });
    };
  });

  mm.add("(max-width: 1023px)", () => {
    const { handleReturns, handleClicks } = panels.reduce((acc, panel, i) => {
      const tl = gsap
        .timeline({ paused: true })
        .fromTo(
          panel,
          {
            visibility: "hidden",
            height: panel.parentElement.offsetHeight,
            left: () => window.innerWidth,
          },
          { left: 0, visibility: "visible" }
        )
        .to(window, { scrollTo: () => ref.current, onComplete: () => {} })
        .to(
          [ref.current, panel],
          {
            height: () => window.outerHeight,
            ease: "power2.inOut",
          },
          "<"
        )
        .fromTo(".amenity-content", { opacity: 0 }, { opacity: 1 });

      if (acc["handleReturns"])
        acc["handleReturns"].push(
          contextSafe(() => {
            tl.reverse();
          })
        );
      else
        acc["handleReturns"] = [
          contextSafe(() => {
            tl.reverse();
          }),
        ];

      if (acc["handleClicks"])
        acc["handleClicks"].push(
          contextSafe(() => {
            tl.invalidate();
            tl.play();
          })
        );
      else
        acc["handleClicks"] = [
          contextSafe(() => {
            tl.invalidate();
            tl.play();
          }),
        ];

      return acc;
    }, {});

    const amenityButtons = gsap.utils.toArray(".amenity-button button");
    amenityButtons.forEach((button, i) => {
      button.addEventListener("click", handleClicks[i]);
    });

    const backButtons = gsap.utils.toArray(".amenity-back-button");
    backButtons.forEach((button, i) => {
      button.addEventListener("click", handleReturns[i]);
    });

    return () => {
      amenityButtons.forEach((button, i) => {
        button.removeEventListener("click", handleClicks[i]);
      });
      backButtons.forEach((button, i) => {
        button.removeEventListener("click", handleReturns[i]);
      });
    };
  });
};
