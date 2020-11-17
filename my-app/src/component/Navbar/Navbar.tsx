import React from "react";
import "./Navbar.module.css"
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";


export function Navbar() {
    return(

    <nav className={classes.nav}>
        <div><NavLink activeClassName={classes["activeHover"]} className={classes.activeClick} to={"/profile"}>Profile</NavLink></div>
        <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick} to={"/dialogs"}>Dialogs</NavLink></div>
        <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick} to={"/users"}>Users</NavLink></div>
        <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick} to={"/news"}>News</NavLink></div>
        <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick} to={"/music"}>Music</NavLink></div>
        <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick} to={"/settings"}>Settings</NavLink></div>
    </nav>
    )}