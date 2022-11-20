import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import "../styles/styles.css";
import { Player } from "./Model";

type Props = {
  player: Player;
  setPlayer: (player: Player) => void;
};
const Counter = ({ player, setPlayer }: Props) => {
  const [count, setCount] = useState(player.count);
  const [tempCount, setTempCount] = useState(0);
  const [previouslyAdded, setPrevoiuslyAdded] = useState<number[]>([]);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

  const addCalculation = () => {
    const updatedCount = player.count + tempCount;
    setCount(updatedCount);
    const updatedPlayer: Player = {
      id: player.id,
      name: player.name,
      initialCount: player.initialCount,
      count: updatedCount,
    };
    setPlayer(updatedPlayer);

    setPrevoiuslyAdded([...previouslyAdded, tempCount]);
    setTempCount(0);
  };

  useEffect(() => {
    if (isTimerActive) {
      const interval = setInterval(() => {
        setIsTimerActive(false);
        addCalculation();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [tempCount]);

  const changeCount = (deltaCount: number) => {
    return () => {
      setIsTimerActive(true);
      setTempCount(tempCount + deltaCount);
    };
  };

  const showPrevCalculations = () => {
    return previouslyAdded
      .slice(-5)
      .map((count, index) => (index ? "," : "") + count);
  };

  const showCalculation = () => {
    let sign = "+";
    if (tempCount >= 0) {
      sign = "+";
    } else {
      sign = "";
    }
    return (
      <p>
        {" "}
        {player.count}
        {sign}
        {tempCount} = {player.count + tempCount}{" "}
      </p>
    );
  };

  return (
    <div className="Counter">
      <div className="container">
        <div className="row">
          <button onClick={changeCount(1)} className="countButton">
            +1
          </button>
          <button onClick={changeCount(5)} className="countButton">
            +5
          </button>
          <button onClick={changeCount(10)} className="countButton">
            +10
          </button>
        </div>
        <div>
          <p className="text"> Current count is: {player.count}</p>
          {isTimerActive && showCalculation()}
        </div>
        <div>
          <button onClick={changeCount(-1)} className="countButton">
            -1
          </button>
          <button onClick={changeCount(-5)} className="countButton">
            -5
          </button>
          <button onClick={changeCount(-10)} className="countButton">
            -10
          </button>
        </div>
        <div>{showPrevCalculations()}</div>
      </div>
    </div>
  );
};
export default Counter;
