import React, {useState} from 'react';
import "./Card.css";

function Card({text, color}) {

    const [count, setCount] = useState(0);

    const style = {
        backgroundColor : color
    };

    function onClick() {
        if(count < 8) setCount(count+1);
        else setCount(0);
    }

    return (
        <div  onClick={onClick} className="card" style={style}>
            <p>{text}</p>
            <h4>{count}</h4>
        </div>
    )
}

export default Card 
