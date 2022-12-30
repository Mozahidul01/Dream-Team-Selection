import { useEffect, useState } from "react";
import Player from "./Player";
import PopupCart from "./Popupcart";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <div className="w-full h-[92vh]" />
      ) : (
        <div className="container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-5">
          {players.map((player) => (
            <Player key={player.id} player={player} />
          ))}
        </div>
      )}
      <PopupCart isOpen={isOpen} cartToggle={toggleBtn} />
    </>
  );
}
