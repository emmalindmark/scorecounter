import React, { useState } from 'react';
import '../styles/styles.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase1 = () => {
        setCount(count + 1);
    }
    const increase5 = () => {
        setCount(count + 5);
    }
    const increase10 = () => {
        setCount(count + 10);
    }

    const decrease1 = () => {
        setCount(count - 1);
    }
    const decrease5 = () => {
        setCount(count - 5);
    }
    const decrease10 = () => {
        setCount(count - 10);
    }

    const addCalculation = () => {

    }

    return (
        <div className="Counter">
            <div className='container'>
                <div className='row'>
                    <button onClick={increase1} className='countButton'> +1</button>
                    <button onClick={increase5} className='countButton'> +5</button>
                    <button onClick={increase10} className='countButton'> +10</button>
                </div>
                <div>
                    <p className='text'> Current count is: {count}</p>
                </div>
                <div>
                    <button onClick={decrease1} className='countButton'>-1</button>
                    <button onClick={decrease5} className='countButton'>-5</button>
                    <button onClick={decrease10} className='countButton'>-10</button>
                </div>
            </div>
        </div>
    );
}
export default Counter;