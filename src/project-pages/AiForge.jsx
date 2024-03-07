import React from "react";
import Title from "./components/Title";
import logo from "./assets/AiForge.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import Techstack from "./components/Techstack";
import { TbBrandNextjs } from "react-icons/tb";
import { RiOpenaiFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const AiForge = () => {
  const icon1 = <TbBrandNextjs />;
  const icon2 = <RiOpenaiFill />;
  const icon3 = <SiPrisma />;
  const icon4 = <SiTailwindcss />;
  const deployLink = "https://ai-forge-sigma.vercel.app/";

  return (
    <div className="p-16 h-screen w-screen overflow-y-auto flex flex-col lg:flex-row text-white bg-gradient-to-b from-blue-600  via-blue-300  to-slate-400 ">
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <div className="lg:h-1/2 ">
          <Title
            name="AIFORGE- Unleash the Power of AI
"
            link={deployLink}
            logo={logo}
          />

          <Techstack icon1={icon1} icon2={icon2} icon3={icon3} icon4={icon4} />
        </div>

        <div className=" hidden lg:flex h-1/2  justify-center items-center">
          <img
            src={img1}
            className="sm:h-80 sm:w-80 lg:h-[320px] lg:w-[320px] xl:h-[370] xl:w-[370]"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-2 ">
        <div className="h-full lg:h-1/2  border border-white p-2 ml-16 overflow-hidden">
          <p className=" font-bold">
            AIForge, your all-in-one platform for harnessing the capabilities of
            Artificial Intelligence. AIForge is built with Next.js, providing a
            seamless and interactive experience for users looking to explore
            various AI functionalities, including conversation, image
            generation, code generation, music, and video generation.
          </p>
          <br />
          <p className=" hidden md:block font-bold">
            AIForge, your all-in-one platform for harnessing the capabilities of
            Artificial Intelligence. AIForge is built with Next.js, providing a
          </p>

          <a
            href="https://github.com/Dolly-chauhan12/AIForge"
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
          <img
            src={img2}
            className="h-60 w-60 lg:h-[320px] lg:w-[320px] xl:h-[370] xl:w-[370]"
          />
        </div>
      </div>
    </div>
  );
};

export default AiForge;
