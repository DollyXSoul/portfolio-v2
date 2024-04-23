import React from "react";
import "./style.css";
import { motion as m } from "framer-motion";
const About = () => {
  return (
    <>
      <m.main
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        exit={{ y: "0%", duration: 1.25 }}
        transition={{
          duration: 1.25,
          ease: [0.22, 1, 0.36, 1],
          staggerChildren: 1,
        }}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn", delay: 0.5 }}
            className="pb-8"
          >
            <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 font-heading">
              About
            </h1>
          </m.div>

          <p className="text-lg md:text-xl  mt-20 text-slate-100 ">
            As a full-stack developer, I am truly passionate about creating
            technology solutions that make a difference in people's lives. I
            believe that the best software is not only functional, but also
            intuitive and user-friendly. I love working on projects that
            challenge me to think outside the box and come up with innovative
            solutions. As I love exploring different technologies it helped me
            to have a strong foundation in programming languages such as
            ,JavaScript, HTML/CSS, and C++ , as well as popular frameworks like
            React and Node.js. But what truly sets me apart is my ability to
            approach challenges with creativity and an open mind.
          </p>

          <br />

          <p className="hidden md:block">
            As a team player, I thrive in environments that encourage
            collaboration and knowledge-sharing. I believe that the best
            solutions come from working together and bouncing ideas off one
            another. When working independently, I am self-motivated and enjoy
            the satisfaction of seeing my ideas come to life in code. I'm
            committed to lifelong learning, staying up-to-date with the latest
            technologies and practices.
          </p>
        </div>
      </m.main>
    </>
  );
};

export default About;
