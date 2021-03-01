import React from 'react';
import "./Feed.css";
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { grey } from '@material-ui/core/colors';
import Card from "./Card";

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <div className="feed__header-title">
                    <p>My Magic</p>
                </div>
                <div className="feed__header-i">
                    <InfoRoundedIcon fontSize="large" stroke={"white"} stroke-width={1}  style={{ color: grey[900] }}/>
                </div>
            </div>
            <div className="feed__question">
                <h3>Quelle est ta définition du bonheur ?</h3>
                <p>Sélectionne les sujets par ordre de préférence</p>
            </div>
            <div className="feed__cards">
                <Card text="Réalisation exceptionnelle pro ou perso" color="darkgreen"/>
                <Card text="Réalisation exceptionnelle pro ou perso" color="darkblue"/>
                <Card text="Réalisation exceptionnelle pro ou perso" color="darkorange"/>
                <Card text="Réalisation exceptionnelle pro ou perso" color="darkred"/>
                <Card text="Réalisation exceptionnelle pro ou perso" color="rgb(162, 162, 27)"/>
                <Card text="Réalisation exceptionnelle pro ou perso" color="rgba(19, 19, 18, 0.918)"/>
                <Card text="Réalisation exceptionnelle pro ou perso" color="purple"/>
                <Card text="Réalisation exceptionnelle pro ou perso" color="pink"/>
            </div>
            <div className="feed__buttons">

            </div>
        </div>
    )
}

export default Feed 
