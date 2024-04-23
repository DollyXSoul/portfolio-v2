import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useMediaQuery } from "@uidotdev/usehooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import iNotes from "../assets/Portfolio/inotes.png";
import AIForge from "../assets/Portfolio/aiforge.png";
import DataDepot from "../assets/Portfolio/datadepot.png";
import youTube2 from "../assets/Portfolio/youtube2.png";
import NewsPanda from "../assets/Portfolio/newspanda.png";
import RecipeRoundup from "../assets/Portfolio/reciperoundup.png";

const images = [AIForge, DataDepot, youTube2, RecipeRoundup, iNotes, NewsPanda];
const links = [
  "/aiforge",
  "/datadepot",
  "/youtube2",
  "/reciperoundup",
  "/inotes",
  "/newspanda",
];

const SliderElement = () => {
  const isLarge = useMediaQuery("only screen and (min-width : 1023px)");

  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: isLarge ? 3 : 1,
    centerPadding: "20px",
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
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
                  className=" lg:w-72 lg:h-[400px]  "
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
