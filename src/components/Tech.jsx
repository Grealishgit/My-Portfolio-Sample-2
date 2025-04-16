import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";

const Tech = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const totalWidth = wrapper.scrollWidth / 2;

    gsap.to(wrapper, {
      x: -totalWidth,
      duration: 20,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="w-full">
        <div
          ref={wrapperRef}
          className="flex whitespace-nowrap"
        >
          {/* Duplicate once for perfect loop */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="w-20 h-20 mx-5 flex-shrink-0"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
