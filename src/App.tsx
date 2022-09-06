import React, { useState } from 'react';
import './styles/styles.css';
import Counter from "./components/Counter";
import { Player } from "./components/Model";
import InputField from "./components/InputField";
import PlayerList from "./components/PlayerList";
import Header from './components/Header';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const App = () => {
    const [player, setPlayer] = useState("");
    const [players, setPlayers] = useState<Player[]>([]);
    const [ModalIsOpen, setModalIsOpen] = React.useState(false);

    const addPlayer = (e: React.FormEvent) => {
        e.preventDefault();
        if (player) {
            setPlayers([...players, { id: players.length, player, count: 0 }]);
            setPlayer("");
            closeModal();
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
            <Modal
                isOpen={ModalIsOpen}
                onRequestClose={closeModal}
            >
                <button onClick={closeModal}>close</button>
                <InputField player={player} setPlayer={setPlayer} handleAdd={addPlayer} />
            </Modal>
            <PlayerList players={players} setPlayers={setPlayers} />
        </div>
    );
}

export default App;
