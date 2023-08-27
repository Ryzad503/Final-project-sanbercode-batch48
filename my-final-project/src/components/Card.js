import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
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
  const Detail = useNavigate();
  // console.log("image",image)
  // console.log("Name",Name)
  // console.log("id",id)

  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg mr-0 object-contain h-40 w-full p-9"
        src={image}
        alt=""
      />

      <div className="p-5">
        <a>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Name}☑️
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {TypeJob}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {Contract}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {Description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {Status}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {Qualification}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {Title}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {location}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {min}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {max}
        </p>
        <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <button onClick={() => Detail(`/Detail-post/${id}`)}>
            Detail
          </button>
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

export default Card;
