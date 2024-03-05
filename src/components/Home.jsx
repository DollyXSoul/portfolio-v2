import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import heroImage from "../assets/heroImage.png";
import { motion as m } from "framer-motion";

const Home = () => {
  return (
    <m.main
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "0%", duration: 1.25 }}
      transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-3 absolute top-0 left-0"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col h-1/2 md:h-full justify-center">
          <m.h2
            initial={{ x: "-150%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="text-4xl sm:text-7xl text-white font-bold"
          >
            I'm a Full Stack Web developer.
          </m.h2>
          <m.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75, ease: "easeIn" }}
            className="text-gray-300 py-4 max-w-md"
          >
            Hii, My name is Dolly Chauhan. I love to work on web applications
            using technologies like React, Tailwind, Express and Node.js.
          </m.p>

          <div>
            <Link
              to="portfolio"
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-slate-300 to-slate-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <BsArrowRight size={20} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <m.div
          initial={{ x: "200%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <img
            src={heroImage}
            alt="my profile"
            className=" rounded-xl opacity-75 mx-auto w-2/3 md:w-full transition duration-500 ease-in-out transform hover:opacity-100 hover:shadow-md hover:shadow-stone-200 hover:scale-110 "
          />
        </m.div>
      </div>
    </m.main>
  );
};

export default Home;
