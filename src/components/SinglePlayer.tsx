import React from "react";
import { Player } from "./Model";
import "../styles/styles.css";
import Counter from "./Counter";

type Props = {
  player: Player;
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
};

const SinglePlayer = ({ player, players, setPlayers }: Props) => {
  const deletePlayer = (player: Player) => {
    if (players.includes(player)) {
      const updatedPlayers = players.filter((value) => value !== player);
      setPlayers(updatedPlayers);
    }
  };

  const setPlayer = (player: Player) => {
    const newPlayers = players.map((p) => {
      if (p.id === player.id) {
        return player;
      }
      return p;
    });
    setPlayers(newPlayers);
  };

  return (
    <div className="playerBox">
      {player.name}
      <Counter player={player} setPlayer={setPlayer} />
      <button onClick={(e) => deletePlayer(player)}>delete</button>
    </div>
  );
};

export default SinglePlayer;
