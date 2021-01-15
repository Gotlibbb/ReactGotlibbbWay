import React from "react";
import classes from "./Header.module.css"
import { NavLink } from "react-router-dom";

type HeaderPropsType ={
    auth:boolean
    login: string | null
    logout: ()=>void
}

export function Header(props:HeaderPropsType) {
    return <header className={classes.header}>
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
            alt=""/>
        {props.auth ?
            <div className={classes.login}>
                <span className={classes.name}>{props.login}</span>
                <NavLink to={"/login"}> <button onClick={props.logout}>Log out</button></NavLink>

            </div> :
            <div className={classes.login}><NavLink to={"/login"}>Login</NavLink></div>
            }
    </header>
}