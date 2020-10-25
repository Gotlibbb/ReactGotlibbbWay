import React from "react";
import "./Navbar.module.css"
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export function Navbar() {
    return(

    <nav className={classes.nav}>
        <div><NavLink activeClassName={classes["activeHover"]} className={classes.activeClick} to={"/Profile"}>Profile</NavLink></div>
        <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick} to={"/Dialogs"}>Dialogs</NavLink></div>
        <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick} to={"/News"}>News</NavLink></div>
        <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick} to={"/Music"}>Music</NavLink></div>
        <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick} to={"/Settings"}>Settings</NavLink></div>
    </nav>
    )}