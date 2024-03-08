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
    "/inotes",
    "/youtube2",
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
