import React, { useEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Number: ${count}`;
    }, [count]);

    return (
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;