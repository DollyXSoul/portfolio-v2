import React from "react";
import Title from "./components/Title";
import logo from "./assets/yt-logo.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import Techstack from "./components/Techstack";
import { RiReactjsFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import Goback from "./components/Gobackbtn";
import { motion as m } from "framer-motion";
const Youtube2 = () => {
  const icon1 = <RiReactjsFill />;
  const icon2 = <SiMui />;
  const icon3 = <FaNode />;
  const icon4 = <SiTypescript />;
  const deployLink = "https://youtube-clone-by-dolly.netlify.app/";
  return (
    <m.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="p-16 h-screen w-screen overflow-y-auto flex flex-col lg:flex-row text-white bg-gradient-to-b from-red-700  via-red-400  to-slate-400 "
    >
      <Goback />
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <div className="lg:h-1/2 ">
          <Title
            name="YOUTUBE 2.0 - Next Level Entertainment
"
            link={deployLink}
            logo={logo}
          />

          <Techstack icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} />
        </div>

        <div className=" hidden lg:flex h-1/2  justify-center items-center">
          <img
            src={img5}
            className="sm:h-80 sm:w-80 lg:h-[320px] lg:w-[320px] "
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-2 ">
        <div className="h-full lg:h-1/2 p-2 ml-16 overflow-hidden font-poppins">
          <p>
            YouTube Clone is a feature-rich web application that is a clone of
            the popular video-sharing site, YouTube. With its user-friendly
            interface and seamless functionality, users can search and watch
            videos, and see related videos to the currently playing video.
          </p>
          <br />
          <p className=" hidden xl:block">
            The app is built using React, Material UI, and powered by the
            YouTube API v3 available on RapidAPI hub.The goal of this project
            was to learn modern web application development and API
            integrations.
          </p>

          <a
            href="https://github.com/Dolly-chauhan12/YouTube_Clone"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-bold underline group"
          >
            See source code{" "}
            <span className="text-2xl group-hover:scale-110 ease-in duration-75">
              <VscGithub />
            </span>
          </a>
        </div>
        <div className=" h-1/2 flex justify-center items-center ">
          <img src={img6} className="h-60 w-60 lg:h-[320px] lg:w-[320px] " />
        </div>
      </div>
    </m.div>
  );
};

export default Youtube2;
