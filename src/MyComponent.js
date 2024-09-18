import React from "react";
import { useNavigate } from "react-router-dom";

function MyComponent() {
    const navigate = useNavigate();

    const goToAbout = () => {
        navigate('/about');
    };
    
    return <button onClick={goToAbout}>Go to About</button>; 
};

export default MyComponent;