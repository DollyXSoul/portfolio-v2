import React from "react";
import Title from "./components/Title";
import logo from "./assets/newspandalogo.png";
import img1 from "./assets/img7.png";
import img2 from "./assets/img8.png";
import Techstack from "./components/Techstack";
import { RiReactjsFill } from "react-icons/ri";
import { SiBootstrap } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import Goback from "./components/Gobackbtn";

const Newspanda = () => {
  const icon1 = <RiReactjsFill />;
  const icon2 = <SiBootstrap />;
  const icon3 = <SiReactrouter />;
  const icon4 = <SiJavascript />;

  const deployLink =
    "https://drive.google.com/file/d/1hNk6Ayu4mOckBGKvncTGna0-43BJA934/view?usp=share_link";

  return (
    <div className="p-16 h-screen w-screen overflow-y-auto flex flex-col lg:flex-row text-white bg-gradient-to-b from-gray-700  via-gray-400  to-slate-400 ">
      <Goback />
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <div className="lg:h-1/2 ">
          <Title
            name="NEWSPANDA - Stay Informed, Stay Ahead
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
            NewsPanda is a full-stack web application that allows users to
            access the latest news headlines from different categories. The
            application fetches news articles from APIs and presents them in
            minimalistic cards with information and images, making it an
            easy-to-use and visually appealing way to stay informed.
          </p>
          <br />

          <a
            href="https://github.com/Dolly-chauhan12/NewsPanda"
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
export default Newspanda;
