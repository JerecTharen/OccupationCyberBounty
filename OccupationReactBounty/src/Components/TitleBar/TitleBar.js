import React from 'react';
import { Redirect } from 'react-router-dom';

import "./titleBar.css";

const TitleBar = (props) => {

    const returnToHome = () => {
        props.history.push("/home");
    };

    return (
    <div id="TitleBar">
        <div id="HomeNav" onClick={returnToHome}>
            <i id="Logo" className="fas fa-crosshairs"></i>
            <h1>{props.title}</h1>
        </div>
    </div>);
}

export default TitleBar;