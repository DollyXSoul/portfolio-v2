import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Title = ({ name, logo, link }) => {
  return (
    <div className="flex justify-center gap-6 items-center m-2 font-projectHeading">
      <img src={logo} className="h-12 w-12 md:h-16 md:w-16" />
      <a
        href={link}
        className="text-white text-4xl hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        {name}{" "}
        <span className="text-2xl">
          {" "}
          <FaExternalLinkAlt />
        </span>
      </a>
    </div>
  );
};

export default Title;
