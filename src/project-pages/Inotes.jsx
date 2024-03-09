import React from "react";
import Title from "./components/Title";
import Techstack from "./components/Techstack";
import Goback from "./components/Gobackbtn";
import logo from "./assets/iNotes.png";
import img1 from "./assets/img9.png";
import img2 from "./assets/img10.png";
import { RiReactjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import { VscGithub } from "react-icons/vsc";

const Inotes = () => {
  const icon1 = <RiReactjsFill />;
  const icon2 = <SiMongodb />;
  const icon3 = <SiExpress />;
  const icon4 = <FaNode />;

  const deployLink = "https://inotes-dc-app.netlify.app/";

  return (
    <div className="p-16 h-screen w-screen overflow-y-auto flex flex-col lg:flex-row text-white bg-gradient-to-b from-yellow-600  via-yellow-400  to-slate-400 ">
      <Goback />
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <div className="lg:h-1/2 ">
          <Title
            name="iNOTES - Where Every Note Counts.
"
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
            About iNotes is a responsive full-stack web app developed with the
            aim to learn and implement how real-world applications are created
            and deployed. The functionalities provided are user authentication ,
            note-taking , display user- notes , update and edit notes and delete
            the notes.
          </p>
          <br />
          <p className=" hidden xl:block font-bold">
            With a clean and intuitive interface, iNotes provides a simple
            solution for keeping track of important information.
          </p>

          <a
            href="https://github.com/Dolly-chauhan12/iNotes"
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
          <img src={img2} className="h-60 w-60 lg:h-[295px] lg:w-[295px]" />
        </div>
      </div>
    </div>
  );
};

export default Inotes;
