import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import iNotes from "../assets/Portfolio/iNotes_1.png";
import AIForge from "../assets/Portfolio/AIForge.gif";
import youTube2 from "../assets/Portfolio/youTube2.gif";
import NewsPanda from "../assets/Portfolio/NewsPanda.gif";
import RecipeRoundup from "../assets/Portfolio/reciperoundup.gif";

const Slider = () => {
  const [positionIndexes, setpositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setpositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const images = [iNotes, youTube2, RecipeRoundup, AIForge, NewsPanda];

  const positions = ["left1", "left", "center", "right", "right1"];

  const imageVariants = {
    left1: { x: "-90%", scale: "0.5", zIndex: 1 },
    left: { x: "-50%", scale: "0.7", zIndex: 3 },
    center: { x: "0%", scale: "1.0", zIndex: 5 },
    right: { x: "50%", scale: "0.7", zIndex: 3 },
    right1: { x: "90%", scale: "0.5", zIndex: 1 },
  };

  return (
    <div className="flex items-center flex-col justify-center gap-8">
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
        />
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
    </div>
  );
};

export default Slider;
