import React from "react";

export default function Player({ player }) {
  const { name, role, img } = player;

  return (
    <div className="border-solid border-2 border-gray-500 flex flex-col items-center">
      <img className="w-16 md:w-32 lg:w-48" src={img} alt={name} />
      <p className="text-xl font-semibold">Name: {name}</p>
      <p className="text-md font-normal">Role: {role}</p>
    </div>
  );
}
