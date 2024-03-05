import React from "react";
import Slider from "./Slider";
import { useMediaQuery } from "@uidotdev/usehooks";
import ProjectList from "./ProjectList";
import { motion as m } from "framer-motion";

const Portfolio = () => {
  const isMedium = useMediaQuery("only screen and (min-width : 769px)");

  return (
    <m.main
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "0%", duration: 3 }}
      transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white absolute top-0 left-0"
    >
      <div className="max-w-screen-lg  px-4 pb-8 pt-20  mx-auto flex flex-col gap-8 w-full h-screen md:h-full overflow-y-auto">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
          className="pb-6 "
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-4 lg:py-2">
            Check out some of my latest works right here
          </p>
        </m.div>

        {isMedium ? <Slider /> : <ProjectList />}
      </div>
    </m.main>
  );
};

export default Portfolio;

//: <button className="w-1/2 px-6 py-2 m-4 hover:scale-105 duration-200 :disabled"> Demo</button>
