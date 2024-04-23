import React from "react";
import Title from "./components/Title";
import logo from "./assets/datadepot.png";
import img1 from "./assets/img11.png";
import img2 from "./assets/img12.png";
import Techstack from "./components/Techstack";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import Goback from "./components/Gobackbtn";
import { motion as m } from "framer-motion";

const DataDepot = () => {
  const icon1 = <TbBrandNextjs />;
  const icon2 = <IoLogoFirebase />;
  const icon3 = <SiTypescript />;
  const icon4 = <SiTailwindcss />;
  const deployLink = "https://data-depot-sooty.vercel.app/";

  return (
    <m.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="p-16 h-screen w-screen overflow-y-auto flex flex-col lg:flex-row text-white bg-gradient-to-b from-orange-600  via-orange-300  to-slate-400 "
    >
      <Goback />
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <div className="lg:h-1/2 ">
          <Title
            name="DataDeopt- A Cloud file storage service"
            link={deployLink}
            logo={logo}
          />

          <Techstack icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} />
        </div>

        <div className=" hidden lg:flex h-1/2  justify-center items-center">
          <img
            src={img1}
            className="sm:h-80 sm:w-80 lg:h-[320px] lg:w-[320px]"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-2 ">
        <div className="h-full lg:h-1/2  border border-white p-2 ml-16 overflow-hidden">
          <p className="font-bold">
            DataDepot is your simple Dropbox clone built using Next.js, ShadCN
            and Firebase. DataDepot allows you to upload files, rename or delete
            already uploaded files, providing you with a convenient way to
            manage your data.
          </p>
          <br />
          <p className=" hidden xl:block font-bold">
            DataDepot is a streamlined data management platform built with
            Next.js and Firebase. It provides users with intuitive tools for
            uploading, organizing, and managing their files effortlessly.
          </p>

          <a
            href="https://github.com/DollyXSoul/DataDepot"
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
          <img src={img2} className="h-60 w-60 lg:h-[320px] lg:w-[320px]" />
        </div>
      </div>
    </m.div>
  );
};

export default DataDepot;
