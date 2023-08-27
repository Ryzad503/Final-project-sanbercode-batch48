import React from "react";
import { useNavigate } from "react-router-dom";

const CardDetail = ({
  image,
  Name,
  TypeJob,
  location,
  Contract,
  Description,
  Qualification,
  Title,
  max,
  min,
  Status,
  id,
}) => {
  const backHome = useNavigate();
  // console.log("image",image)
  // console.log("Name",Name)
  // console.log("id",id)

  return (
    <div className="flex flex-col md:flex-row text-center items-center my-28">
    <div className="flex-1">
      <img
        className="rounded-t-lg mr-0 object-contain h-80 w-full p-5"
        src={image}
        alt=""
      />
      </div>

      <div className="flex-1 object-contain p-5 text-left ">
        <p className="mb-2 tracking-tight font-bold text-4xl text-gray-900 dark:text-black">
          {Title}
        </p>
        <a>
          <p className="mb-2 tracking-tight font-bold text-2xl text-gray-900 dark:text-black">
            {Name}-{location}
          </p>
        </a>
        <a className="mb-2 tracking-tight font-bold text-2xl">
        <span className="text-black">
          Status : 
        </span>
        <span> {Status} </span>
        </a>
        <p className="mb-2 tracking-tight font-bold text-2xl text-gray-900 dark:text-black">
          {TypeJob}
        </p>
        <p className="mb-2 tracking-tight font-bold text-2xl text-gray-900 dark:text-black">
          {Contract}
        </p>
        <a className="mb-2 tracking-tight">
          <span className="font-bold text-2xl">
            Description :
          </span>
          <span className=" text-xl"> {Description} </span>
        </a>

        <p className="mb-2 tracking-tight">
          <span className="font-bold text-2xl">
            Qualification :
          </span>
          <span className="text-xl"> {Qualification} </span>
        </p>

        <p className="mb-2 tracking-tight">
          <span className="font-bold text-2xl">
            Salary :
          </span>
          <span className="text-xl"> {min}-{max} </span>
        </p>
      
        <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <button onClick={() => backHome("/")}>Apply</button>
          <svg
            className="w-3.5 h-3.5 ml-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
    
  );
};

export default CardDetail;
