import React from "react";

const Techstack = ({ icon1, icon2, icon3, icon4 }) => {
  return (
    <div className="flex flex-col m-4 ml-20 md:ml-24">
      <p className="font-bold text-xl">Technologies used -</p>
      <div className=" flex gap-3 mt-2">
        <span className="text-5xl">{icon1}</span>
        <span className="text-5xl">{icon2}</span>
        <span className="text-5xl">{icon3}</span>
        <span className="hidden  lg:inline text-5xl">{icon4}</span>
      </div>
    </div>
  );
};

export default Techstack;
