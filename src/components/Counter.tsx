import React, { useState } from 'react';
import '../styles/styles.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div className="Counter">
            <div className='container'>
                <button onClick={increase} className='countButton'> +1</button>
                <p className='text'> Current count is: {count}</p>
                <button onClick={decrease} className='countButton'>-1</button>
            </div>
        </div>
    );
}
export default Counter;