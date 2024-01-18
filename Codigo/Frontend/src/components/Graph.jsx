import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Graph = () => {
    /*Shows a message for 2 seconds indicating that a login is missing */
    //const history = useNavigate();


    return (
        <div>
            <p>Success</p>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Graph;