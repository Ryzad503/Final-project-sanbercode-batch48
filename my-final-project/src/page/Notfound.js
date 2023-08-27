import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const back = useNavigate();

  return (
    <div>
      <span className="ml-[850px] text-gray-900 font-extrabold text-8xl">
        Oops !
      </span>
      <p className="ml-[900px] mt-[20px] text-gray-900 font-semibold text-xl">
        404-Page Notfound
      </p>
      <p className="ml-[850px] mt-[10px] text-gray-900 font-normal text-lg ">
        The page you are browsing was not found
      </p>
      <button
        onClick={() => back("/")}
        className="ml-[930px] mt-[10px] text-gray-900 font-semibold px-5 py-3 border border-blue-800 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-blue-400 dark:hover:bg-blue-400 dark:focus:ring-gray-800 "
      >
        Go To Homepage
      </button>
    </div>
  );
};

export default Notfound;
