import React from 'react';
import { Player } from "./Model";
import SinglePlayer from "./SinglePlayer";

interface Props {
    players: Player[];
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

const PlayerList: React.FC<Props> = ({ players, setPlayers }: Props) => {

    return <div className='players'>
        {players.map((player) => (
            <SinglePlayer player={player} key={player.id} players={players} setPlayers={setPlayers} />
        ))}
    </div>;
};

export default PlayerList;