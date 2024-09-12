import React, { useState } from "react";

function ControlledInput() {
    const [name, setName] = useState('');

    return(
        <div>
            <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
            <p>Your name is {name}</p>
        </div>
    );
};

export default ControlledInput;