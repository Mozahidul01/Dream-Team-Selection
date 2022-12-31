import React from "react";

export default function CartContainer({ player }) {
  return (
    <div className="flex gap-4 align-middle">
      <img className="w-16" src={player.img} alt={player.name} />
      <p>{player.name}</p>
    </div>
  );
}
