import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "home",
      to: "/",
    },
    {
      id: 2,
      name: "about",
      to: "/about",
    },
    {
      id: 3,
      name: "portfolio",
      to: "/portfolio",
    },
    {
      id: 4,
      name: "skills",
      to: "/skills",
    },
    {
      id: 5,
      name: "contact",
      to: "/contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-14 text-white px-4 fixed z-20">
      <div className="pt-2">
        <h1 className="text-5xl font-signature ml-2 animate-bounce-slow ">
          Dolly
        </h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, name, to }) => (
          <li
            key={id}
            className="px-4 mx-0.5 pt-1 cursor-pointer capitalize  font-medium text-gray-500 hover:text-white border-gray-500 hover:border-b hover:scale-105 duration-200  "
          >
            <Link to={to}> {name} </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#000000] to-gray-600 ">
          {links.map(({ id, to, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize  text-4xl hover:scale-105 duration-200 py-6 "
            >
              <Link to={to} smooth duration={500} onClick={() => setNav(!nav)}>
                {" "}
                {name}{" "}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
