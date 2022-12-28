import React from "react";

export default function Player({ player }) {
  const { name, role, age, img } = player;

  return (
    <div className="max-w-2xl mx-auto my-2">
      <div className="bg-gray-400 shadow-md rounded-lg max-w-sm dark:bg-gray-700 ">
        <img
          className="w-[310px] rounded-t-lg bg-gray-400"
          src={img}
          alt={name}
        />
        <div className="px-4 py-3">
          <h2 className="text-gray-900 font-bold text-2xl tracking-tight mb-1 dark:text-white">
            {name}
          </h2>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Age: {age}
          </p>
          <p className="font-normal text-gray-700 mb-4 dark:text-gray-400">
            Role: {role}
          </p>
          <button className="text-white border-2 border-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-md text-md px-10 py-2 text-center inline-flex items-end  dark:border-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
