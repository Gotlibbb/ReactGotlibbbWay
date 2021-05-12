import React from "react";
import "./Navbar.module.css"
import classes from "./Navbar.module.css";
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {StateType} from "../../Redux/store";


export function Navbar() {

    let authUserId = useSelector<StateType, string | null>(state => state.data.id)
    let currentUserId = useSelector<StateType>(state => state.profilePage.profile?.userId)



    return (

        <div className={classes.nav}>

            <div><NavLink activeClassName={authUserId === currentUserId ? classes.activeHover : ""}
                          className={classes.activeClick}
                          to={"/profile"}>MyProfile</NavLink></div>

            <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick}
                          to={"/dialogs"}>Dialogs</NavLink></div>

            <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick}
                          to={"/users"}>Users</NavLink></div>

            <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick}
                          to={"/news"}>News</NavLink></div>

            <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick}
                          to={"/music"}>Music</NavLink></div>

            <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick}
                          to={"/settings"}>Settings</NavLink></div>

        </div>
    )
}