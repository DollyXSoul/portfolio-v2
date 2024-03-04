import React from "react";
import Slider from "./Slider";
import { useMediaQuery } from "@uidotdev/usehooks";
import ProjectList from "./ProjectList";

const Portfolio = () => {
  const isMedium = useMediaQuery("only screen and (min-width : 769px)");

  return (
    <div
      name="portfolio"
      className="w-full h-full md:h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg  px-4 pb-8 pt-20  mx-auto flex flex-col gap-8 w-full h-full">
        <div className="pb-6 ">
          <p className="text-4xl font-bold inline">Portfolio</p>
          <p className="py-4 lg:py-2">
            Check out some of my latest works right here
          </p>
        </div>

        {isMedium ? <Slider /> : <ProjectList />}
      </div>
    </div>
  );
};

export default Portfolio;

//: <button className="w-1/2 px-6 py-2 m-4 hover:scale-105 duration-200 :disabled"> Demo</button>
