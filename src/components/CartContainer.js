import React from "react";
import { X } from "react-feather";

export default function CartContainer({ player, handleDelete }) {
  return (
    <div className="flex justify-between items-center bg-slate-200 rounded-md px-2 mb-2 dark:bg-slate-600">
      <div className="flex gap-4 items-center">
        <img className="w-16" src={player.img} alt={player.name} />
        <p className="text-slate-900 text-md font-medium tracking-wide dark:text-slate-200">
          {player.name}
        </p>
      </div>
      <button
        onClick={() => handleDelete(player)}
        className="p-2 rounded-full hover:bg-slate-800"
      >
        <X />
      </button>
    </div>
  );
}
