import React from "react";
import { Link } from "react-router-dom";

function Navigate() {
    return(
        <nav>
            <Link to="/"><button>Home</button></Link>
            <Link to="/about"><button>About</button></Link>
            <Link to="/contact"><button>Contact</button></Link>
            <Link to="/counter"><button>Counter</button></Link>
        </nav>
    );
}

export default Navigate;