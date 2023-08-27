import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const start = useNavigate();

  return (
    <div className="container mx-auto">
      <div className="border rounded-lg shadow-lg pb-[250px]">
        <h1 className="text-5xl font-serif font-bold ml-[750px] mb-8 pt-5">
          About Us
        </h1>
        <p className="text-xl font-mono font-semibold pl-[700px] pb-5">
          ryzjob is a good job vacancy
        </p>
        <img
          src="https://i.pinimg.com/474x/7b/f2/43/7bf243daeed0cc132955043e3ecc0e0b.jpg"
          alt="Orang Kantor"
          width={400}
          className="float-left mr-4 ml-5"
        />
        <p className="text-xl font-mono font-semibold">
          we work together to provide useful job vacancies for people and people
          can trust our website. We provide a variety of jobs for people who
          have just graduated or already have skills in a particular field.
        </p>
        <button onClick={()=>start ("/")} className="inline-flex items-center justify-center px-9 py-2 text-base font-medium text-center text-gray-900 border border-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-500 dark:text-gray-900 dark:border-blue-800 dark:hover:bg-blue-400 dark:focus:ring-gray-800">
          Ryzjob
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
