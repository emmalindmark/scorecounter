import React, { useRef } from 'react';
import '../styles/styles.css';

interface props {
    playerName: string;
    setNewPlayerName: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<props> = ({ playerName: player, setNewPlayerName: setPlayer, handleAdd }: props) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='input'
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}>
            <input ref={inputRef} type='input' value={player}
                onChange={
                    (e) => { setPlayer(e.target.value) }
                } placeholder='Players name:...' className='inputBox' />
            <button className='inputSubmit' type='submit'>Add</button>
        </form>
    )
}
export default Inputfield;