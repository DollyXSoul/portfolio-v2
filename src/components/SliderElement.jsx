import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import iNotes from "../assets/Portfolio/iNotes_1.png";
import AIForge from "../assets/Portfolio/AIForge.gif";
import youTube2 from "../assets/Portfolio/youTube2.gif";
import NewsPanda from "../assets/Portfolio/NewsPanda.gif";
import RecipeRoundup from "../assets/Portfolio/reciperoundup.gif";

const SliderElement = () => {
  const images = [iNotes, youTube2, RecipeRoundup, AIForge, NewsPanda];
  const links = [
    "/iNotes",
    "/youtube",
    "/reciperoundup",
    "/aiforge",
    "/newspanda",
  ];

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    centerPadding: "20px",
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  {
    /* <div className="flex items-center flex-col justify-center gap-8">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img}
          alt={img}
          className="rounded-md md:w-[43%] h-2/5 lg:w-[38%] lg:h-auto"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute" }}
        ></motion.img>
      ))}

      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        className="flex text-white rounded-lg mt-96  px-6 py-3 bg-gradient-to-br from-gray-200 to-sky-900  hover:text-white focus:outline-none  hover:scale-105 duration-200"
        onClick={handleNext}
      >
        <span>Next</span>
        <BsArrowRight size={20} className="ml-2" />
      </motion.button>
    </div> */
  }

  return (
    <div className="w-11/12 m-auto">
      <div className="slider-container w-full">
        <Slider {...settings} className="">
          {images.map((img, index) => (
            <div>
              <Link to={links[index]}>
                <img
                  key={index}
                  src={img}
                  alt={img}
                  className="rounded-md md:w-64 md:h-80 lg:w-72 lg:h-96  "
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderElement;
