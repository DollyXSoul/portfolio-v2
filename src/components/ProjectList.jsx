import React from "react";
import iNotes from "../assets/Portfolio/iNotes_1.png";
import AIForge from "../assets/Portfolio/AIForge.gif";
import youTube2 from "../assets/Portfolio/youTube2.gif";
import NewsPanda from "../assets/Portfolio/NewsPanda.gif";
import RecipeRoundup from "../assets/Portfolio/reciperoundup.gif";

const portfolio = [
  {
    id: 5,
    src: AIForge,
    demo: "https://ai-forge-sigma.vercel.app/",
    code: "https://github.com/Dolly-chauhan12/AIForge",
  },
  {
    id: 1,
    src: RecipeRoundup,
    demo: "https://recipe-roundup.netlify.app/",
    code: "https://github.com/Dolly-chauhan12/RecipeRoundup",
  },
  {
    id: 3,
    src: youTube2,
    demo: "https://youtube-clone-by-dolly.netlify.app/",
    code: "https://github.com/Dolly-chauhan12/YouTube_Clone",
  },
  {
    id: 2,
    src: iNotes,
    demo: "https://inotes-dc-app.netlify.app/",
    code: "https://github.com/Dolly-chauhan12/iNotes",
  },
  {
    id: 4,
    src: NewsPanda,
    demo: "https://drive.google.com/file/d/1hNk6Ayu4mOckBGKvncTGna0-43BJA934/view?usp=share_link",
    code: "https://github.com/Dolly-chauhan12/NewsPanda",
  },
];

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 sm:px-0 px-12  ">
      {portfolio.map(({ id, src, demo, code }) => (
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
          <img
            src={src}
            alt={src}
            className="rounded-md duration-200 hover:scale-105 "
          />
          <div className="flex items-center justify-around ">
            <button className="relative inline-flex items-center justify-center p-0.5 m-4 overflow-hidden  rounded-lg group bg-gradient-to-br from-gray-200 to-sky-900 group-hover:from-gray-200 group-hover:to-sky-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-900 hover:scale-105 duration-200">
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="relative px-6 py-2 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                {" "}
                Demo
              </a>
            </button>

            <button className="relative inline-flex items-center justify-center p-0.5 m-4 overflow-hidden rounded-lg group bg-gradient-to-br from-gray-200 to-sky-900 group-hover:from-gray-200 group-hover:to-sky-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-900 hover:scale-105 duration-200 ">
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                className="relative px-6 py-2 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                Code
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
