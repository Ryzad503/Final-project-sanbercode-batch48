import React from "react";
import Vacancy from "../page/Vacancy";
import Section from "../components/Section";

const Home = () => {
  return (
    <> 
      <div className="bg-gray-900">
        <Section />
        <p className="text-white text-3xl font-bold container ml-[870px]"> Job Vacancy</p>
        <Vacancy />
      </div>
    </>
  );
};

export default Home;
