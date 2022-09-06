import React from "react";
import Modal from 'react-modal';

const Header = () => {

    const [ModalIsOpen, setModalIsOpen] = React.useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <header className="App-header">
            <h1>Score counter</h1>
            <button onClick={openModal}>add player</button>
            <Modal
                isOpen={ModalIsOpen}
                onRequestClose={closeModal}
            >
                <button onClick={closeModal}>close</button>
                <div>test</div>
            </Modal>
        </header>
    )
}

export default Header;