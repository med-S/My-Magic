import React from 'react';
import "./Menu.css";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import { green, blue, pink, red, orange, yellow } from '@material-ui/core/colors';

function Menu() {
    return (
        <div className="menu">
            <div className="menu__logo">
            </div>
            <div className="menu__side">
            </div>
            <div className="menu__icon">
                <HomeIcon stroke={"white"} stroke-width={1}  style={{ color: green[800] }} /> 
                <p>Acceuil</p>
            </div>
            <div className="menu__icon">
                <BusinessCenterIcon stroke={"white"} stroke-width={1}  style={{ color: blue[900] }} /> 
                <p>...........</p>
            </div>
            <div className="menu__icon">
                <MyLocationIcon stroke={"white"} stroke-width={1}  style={{ color: pink[800] }} /> 
                <p>...........</p>
            </div>
            <div className="menu__icon">
                <MenuBookIcon stroke={"white"} stroke-width={1}  style={{ color: red[800] }} /> 
                <p>...........</p>
            </div>
            <div className="menu__icon">
                <AccountCircleRoundedIcon stroke={"white"} stroke-width={1} style={{ color: orange[800] }} /> 
                <p>...........</p>
            </div>
            <div className="menu__icon">
                <CardGiftcardRoundedIcon stroke={"white"} stroke-width={1} style={{ color: yellow[800] }} /> 
                <p>...........</p>
            </div>
        </div>
    )
}

export default Menu
