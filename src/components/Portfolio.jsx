import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { motion as m } from "framer-motion";
import SliderElement from "./SliderElement";

const Portfolio = () => {
  return (
    <m.main
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "0%" }}
      transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      className="w-screen h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white absolute top-0 left-0"
    >
      <div className="max-w-screen-lg  px-4 pb-8 pt-20  mx-auto flex flex-col gap-8 w-full h-screen md:h-full overflow-y-auto">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
          className="pb-6 "
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-heading">
            Portfolio
          </p>
          <p className="py-4 lg:py-2">
            Check out some of my latest works right here
          </p>
        </m.div>

        <SliderElement />
      </div>
    </m.main>
  );
};

export default Portfolio;
