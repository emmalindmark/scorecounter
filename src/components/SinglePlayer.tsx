import React from 'react';
import { player } from "./Model";
import '../styles/styles.css';
import Counter from './Counter';

type Props = {
    player: player;
    players: player[];
    setPlayers: React.Dispatch<React.SetStateAction<player[]>>;
}

const SinglePlayer = ({ player, players, setPlayers }: Props) => {
    return <div className='playerBox'>
        {player.player}
        <Counter></Counter>
    </div>
}

export default SinglePlayer;