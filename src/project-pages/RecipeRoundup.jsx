import React from "react";
import Title from "./components/Title";
import logo from "./assets/rr-logo.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import Techstack from "./components/Techstack";
import { RiReactjsFill } from "react-icons/ri";
import { SiSanity } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import Goback from "./components/Gobackbtn";
import { motion as m } from "framer-motion";

const RecipeRoundup = () => {
  const icon1 = <RiReactjsFill />;
  const icon2 = <SiSanity />;
  const icon3 = <SiTypescript />;
  const icon4 = <SiTailwindcss />;
  const deployLink = "https://recipe-roundup.netlify.app/";

  return (
    <m.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="p-16 h-screen w-screen overflow-y-auto flex flex-col lg:flex-row text-white bg-gradient-to-b from-green-900  via-green-500  to-slate-400 "
    >
      <Goback />
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <div className="lg:h-1/2 ">
          <Title
            name="RecipeRoundup - Cook.Share.Inspire
"
            link={deployLink}
            logo={logo}
          />

          <Techstack icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} />
        </div>

        <div className=" hidden lg:flex h-1/2  justify-center items-center">
          <img
            src={img4}
            className="sm:h-80 sm:w-80 lg:h-[320px] lg:w-[320px] "
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-2 ">
        <div className="h-full lg:h-1/2  border border-white p-2 ml-16 overflow-hidden">
          <p className=" font-bold">
            Recipe Roundup is a community-driven recipe sharing platform that
            allows users to create and share their favorite recipes with others.
            The application is designed to be user-friendly and accessible, with
            a clean and intuitive interface that makes it easy to browse and
            discover new recipes.
          </p>
          <br />
          <p className=" hidden xl:block font-bold">
            The application is built using React.js, with the backend managed by
            Sanity CMS(Content Management System) and styled with Tailwind CSS.
          </p>

          <a
            href="https://github.com/Dolly-chauhan12/RecipeRoundup"
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
          <img src={img3} className="h-60 w-60 lg:h-[320px] lg:w-[320px] " />
        </div>
      </div>
    </m.div>
  );
};

export default RecipeRoundup;
