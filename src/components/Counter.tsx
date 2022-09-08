import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import '../styles/styles.css';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [tempCount, setTempCount] = useState(0);
    const [previouslyAdded, setPrevoiuslyAdded] = useState<number[]>([]);
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

    const addCalculation = () => {
        setCount(count + tempCount);
        setPrevoiuslyAdded([...previouslyAdded, tempCount]);
        setTempCount(0);
    }

    useEffect(() => {
        if (isTimerActive) {
            const interval = setInterval(() => {
                setIsTimerActive(false);
                addCalculation();
            }, 3000);

            return () => clearInterval(interval)
        }
    }, [tempCount]);

    const changeCount = (deltaCount: number) => {
        return () => {
            setIsTimerActive(true);
            setTempCount(tempCount + deltaCount);
        }
    }

    const showPrevCalculations = () => {
        return previouslyAdded.slice(-5).map((count, index) => ((index ? ',' : '') + count));
    }

    return (
        <div className="Counter">
            <div className='container'>
                <div className='row'>
                    <button onClick={changeCount(1)} className='countButton'>+1</button>
                    <button onClick={changeCount(5)} className='countButton'>+5</button>
                    <button onClick={changeCount(10)} className='countButton'>+10</button>
                </div>
                <div>
                    <p className='text'> Current count is: {count}</p>
                    <button onClick={addCalculation}>add {tempCount} to current count</button>
                </div>
                <div>
                    <button onClick={changeCount(-1)} className='countButton'>-1</button>
                    <button onClick={changeCount(-5)} className='countButton'>-5</button>
                    <button onClick={changeCount(-10)} className='countButton'>-10</button>
                </div>
                <div>{showPrevCalculations()}</div>
            </div>
        </div>
    );
}
export default Counter;