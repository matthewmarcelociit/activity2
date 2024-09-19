import React, { useEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Number: ${count}`;
    }, [count]);

    return (
        <div class="content">
            <h1>Counter</h1>
            <div class="counter">
                <button onClick={() => setCount(prev => prev - 1)}>-</button>
                <h1>{count}</h1>
                <button onClick={() => setCount(prev => prev + 1)}>+</button>
            </div>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;