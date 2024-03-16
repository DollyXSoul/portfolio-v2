import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Goback = () => {
  const navigate = useNavigate();
  return (
    <div className=" group absolute top-5 left-5 rounded-full transition-all duration-200 ease-in hover:bg-white w-10 h-10 flex justify-center items-center">
      <button
        className="text-2xl group-hover:text-black"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default Goback;
