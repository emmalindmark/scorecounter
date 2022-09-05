import React, { useState } from 'react';
import './styles/styles.css';
import Counter from "./components/Counter";
import { player } from "./components/Model";
import InputField from "./components/InputField";
import PlayerList from "./components/PlayerList";
import Header from './components/Header';

const App = () => {
    const [player, setPlayer] = useState("");
    const [players, setPlayers] = useState<player[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (player) {
            setPlayers([...players, { id: players.length, player, count: 0 }]);
            setPlayer("");
        }
    }

    return (
        <div className="App">
            <Header />
            <InputField player={player} setPlayer={setPlayer} handleAdd={handleAdd} />
            <PlayerList players={players} setPlayers={setPlayers} />
        </div>
    );
}

export default App;
