import React, { useState } from 'react';
import './styles/styles.css';
import Counter from "./components/Counter";
import { Player } from "./components/Model";
import InputField from "./components/InputField";
import PlayerList from "./components/PlayerList";
import Header from './components/Header';
import Modal from 'react-modal';
import SinglePlayer from './components/SinglePlayer';


Modal.setAppElement('#app');

const App = () => {
    const [newPlayerName, setNewPlayerName] = useState("");
    const [players, setPlayers] = useState<Player[]>([]);
    const [ModalIsOpen, setModalIsOpen] = useState(false);

    const addPlayer = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPlayerName) {
            setPlayers([...players, { id: players.length, name: newPlayerName, initialCount: 0 }]);
            setNewPlayerName("");
            closeModal();
        }
    }

    const resetScore = () => {
        if (players) {
            const newPlayers = players.map((player) => {
                return { ...player, initialCount: 5 }
            })
            setPlayers([...newPlayers]);
            console.log(players);
        }
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Score counter</h1>
            </header>
            <button onClick={openModal}>add player</button>
            <button onClick={resetScore}>update everyones count</button>
            <Modal
                isOpen={ModalIsOpen}
                onRequestClose={closeModal}
            >
                <button onClick={closeModal}>close</button>
                <InputField
                    playerName={newPlayerName}
                    setNewPlayerName={setNewPlayerName}
                    handleAdd={addPlayer} />
            </Modal>
            <div className='players'>
                {players.map((player) => (
                    <SinglePlayer player={player} key={player.id} players={players} setPlayers={setPlayers} />
                ))}
                <p>{JSON.stringify(players)}</p>
            </div>;
        </div>
    );
}

export default App;
