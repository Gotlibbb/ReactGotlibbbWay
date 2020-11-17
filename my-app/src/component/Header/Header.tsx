import React from "react";
import classes from "./Header.module.css"
import { NavLink } from "react-router-dom";

type HeaderPropsType ={
    auth:boolean
    login: string | null
}

export function Header(props:HeaderPropsType) {
    return <header className={classes.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
            alt=""/>
             <div className={classes.login}><NavLink to={"/login"}>{props.auth? props.login: "login"}</NavLink></div>
    </header>
}