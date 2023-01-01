import { useEffect, useState } from "react";
import {
  addToDb,
  getstoredPlayer,
  removeFromDb,
} from "../utilities/localStorage";
import Player from "./Player";
import PopupCart from "./Popupcart";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState([]);

  //Load Data
  useEffect(() => {
    fetch("data.JSON")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  //Load Data from Local Storage
  useEffect(() => {
    const storedPlayer = getstoredPlayer();
    const savedPlayer = [];
    for (const id in storedPlayer) {
      const addedPlayer = players.find((player) => player.id === id);
      if (addedPlayer) {
        const quantity = storedPlayer[id];
        addedPlayer.quantity = quantity;
        savedPlayer.push(addedPlayer);
      }
    }
    setSelectedPlayer(savedPlayer);
  }, [players]);

  //Cart toggle btn function
  const toggleBtn = () => {
    setIsCartOpen(!isCartOpen);
  };

  //Select Player Button handler function
  const handleSelect = (chosenPlayer) => {
    let newSelectedPlayer = [];
    const existsPlayer = selectedPlayer.find(
      (player) => player.id === chosenPlayer.id
    );
    if (!existsPlayer) {
      chosenPlayer.quantity = 1;
      newSelectedPlayer = [...selectedPlayer, chosenPlayer];
    } else {
      const restPlayers = selectedPlayer.filter(
        (player) => player.id !== chosenPlayer.id
      );
      existsPlayer.quantity = existsPlayer.quantity + 1;
      newSelectedPlayer = [...restPlayers, existsPlayer];
    }

    setSelectedPlayer(newSelectedPlayer);
    addToDb(chosenPlayer.id);
  };

  //Delete player button handler function
  const handleDelete = (chosenPlayer) => {
    const existsPlayer = selectedPlayer.find(
      (player) => player.id === chosenPlayer.id
    );
    if (existsPlayer) {
      chosenPlayer.quantity = 0;
    }

    const remainPlayers = selectedPlayer.filter(
      (player) => player.id !== chosenPlayer.id
    );
    setSelectedPlayer(remainPlayers);

    removeFromDb(chosenPlayer.id);
  };

  return (
    <>
      {isCartOpen ? (
        <div className="w-full h-[93.1vh]" />
      ) : (
        <>
          <p className="text-lg md:text-xl font-medium mt-4 text-center text-slate-900 dark:text-slate-100">
            Select Minimun 15 Players to Create Your Team
          </p>
          <div className="container mx-auto grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-4">
            {players.map((player) => (
              <Player
                key={player.id}
                player={player}
                handleSelect={handleSelect}
              />
            ))}
          </div>
        </>
      )}
      <PopupCart
        isOpen={isCartOpen}
        cartToggle={toggleBtn}
        selectedPlayer={selectedPlayer}
        handleDelete={handleDelete}
      />
    </>
  );
}
