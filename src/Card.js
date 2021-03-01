import React from 'react';
import "./Card.css";

function Card({text, color}) {

    const style = {
        backgroundColor : color
    };

    return (
        <div className="card" style={style}>
            <p>{text}</p>
            <input type="number"></input>
        </div>
    )
}

export default Card 
