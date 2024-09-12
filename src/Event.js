import React from "react";
function Event() {
    const handleClick = () => {
      alert('Button was clicked!');  
    };

    return(
        <button onClick={handleClick}>Click me!</button>
    );
}

export default Event;