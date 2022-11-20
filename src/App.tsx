import React, { useState } from "react";
import "./styles/styles.css";
import Counter from "./components/Counter";
import { Player } from "./components/Model";
import InputField from "./components/InputField";
import PlayerList from "./components/PlayerList";
import Header from "./components/Header";
import Modal from "react-modal";
import SinglePlayer from "./components/SinglePlayer";

Modal.setAppElement("#app");

const App = () => {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [players, setPlayers] = useState<Player[]>([]);
  const [AddPlayerModalOpen, setAddPlayerModalOpen] = useState(false);

  const addPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPlayerName) {
      setPlayers([
        ...players,
        { id: players.length, name: newPlayerName, initialCount: 0, count: 0 },
      ]);
      setNewPlayerName("");
      closeAddPlayerModal();
    }
  };

  const resetScore = () => {
    if (players) {
      const newPlayers = players.map((player) => {
        return { ...player, count: player.initialCount };
      });
      setPlayers([...newPlayers]);
    }
  };

  const updatetAllScore = () => {
    if (players) {
    }
  };

  const openAddPLayerModal = () => {
    setAddPlayerModalOpen(true);
  };

  const closeAddPlayerModal = () => {
    setAddPlayerModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Score counter</h1>
      </header>
      <button onClick={openAddPLayerModal}>Add player</button>
      <button onClick={resetScore}>Reset</button>
      <button>Update all score</button>
      <Modal isOpen={AddPlayerModalOpen} onRequestClose={closeAddPlayerModal}>
        <InputField
          playerName={newPlayerName}
          setNewPlayerName={setNewPlayerName}
          handleAdd={addPlayer}
        />
        <button onClick={closeAddPlayerModal}>close</button>
      </Modal>
      <div className="players">
        {players.map((player) => (
          <SinglePlayer
            player={player}
            key={player.id}
            players={players}
            setPlayers={setPlayers}
          />
        ))}
        <p>{JSON.stringify(players)}</p>
      </div>
      ;
    </div>
  );
};

export default App;
