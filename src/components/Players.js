import { useEffect, useState } from "react";
import Player from "./Player";

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("./fakedb.JSON")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
}
