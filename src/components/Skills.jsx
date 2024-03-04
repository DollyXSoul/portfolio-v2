import React from "react";
import nextjs from "../assets/nextjs2.svg";
import tailwindcss3 from "../assets/tailwindcss.svg";
import reactImg from "../assets/react.svg";
import materialUI from "../assets/materialUI.svg";

import typescript from "../assets/typescript.svg";
import prisma from "../assets/prisma.svg";
import express from "../assets/express.svg";
import mongoDB from "../assets/mongoDB.png";
import shadcn from "../assets/shadcn-ui2.png";
import github from "../assets/github.svg";

const Skills = () => {
  const techStack = [
    {
      id: 1,
      src: nextjs,
      name: "Next.js",
      style: "shadow-slate-200 ",
    },
    {
      id: 4,
      src: reactImg,
      name: "React.js",
      style: "shadow-sky-300",
    },
    {
      id: 2,
      src: tailwindcss3,
      name: "TailwindCSS",
      style: "shadow-cyan-500",
    },
    {
      id: 3,
      src: shadcn,
      name: "Shadcn/UI",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: materialUI,
      name: "Material UI",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: typescript,
      name: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: express,
      name: "Express.js",
      style: "shadow-slate-100",
    },
    {
      id: 8,
      src: prisma,
      name: "Prisma ORM",
      style: "shadow-gray-300",
    },
    {
      id: 9,
      src: mongoDB,
      name: "mongoDB",
      style: "shadow-emerald-400",
    },
    {
      id: 10,
      src: github,
      name: "GitHub",
      style: "shadow-stone-200 bg-gray-900",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full h-full  lg:h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white "
    >
      <div className="max-w-screen-lg mx-auto px-4 pb-8 pt-20 lg:pt-10 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-4">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">
            These are the technologies I've worked with so far...{" "}
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-8  text-center py-4 px-12 sm:px-0">
          {techStack.map(({ id, src, name, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-center shadow-md hover:scale-105 hover:bg-black/25 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={name} className="w-1/2 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
