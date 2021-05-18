import React from "react";
import classes from "./Navbar.module.css";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../Redux/store";
import user from "../../images/user.svg"
import users from "../../images/users.svg"
import dialogs from "../../images/dialog.svg"
import logoutsvg from "../../images/logout.svg"
import {logout} from "../../Redux/authReducer";



export function Navbar() {

    let authUserId = useSelector<StateType, string | null>(state => state.data.id)
    let currentUserId = useSelector<StateType>(state => state.profilePage.profile?.userId)
    let auth = useSelector<StateType>(state => state.data.isAuth)
    let history = useHistory()
    let dispatch = useDispatch()

    return (

        <div className={classes.nav}>

            <div><NavLink activeClassName={authUserId === currentUserId ? classes.activeHover : ""}
                          className={classes.activeClick}
                          to={"/profile"}><img src={user} alt="user"/>My profile</NavLink></div>

            <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick}
                          to={"/dialogs"}><img src={dialogs} alt="user"/>Dialogs</NavLink></div>

            <div><NavLink activeClassName={classes.activeHover} className={classes.activeClick}
                          to={"/users"}><img src={users} alt="user"/>Users</NavLink></div>

             {auth && <a
                        style={{justifySelf: "end"}}
                        onClick={() => {
                        dispatch(logout())
                        history.push('login')
                    }}><img style={{paddingLeft: "5px"}} src={logoutsvg} alt="logout"/>Log out
                    </a>}

            {/*<div><NavLink activeClassName={classes.activeHover} className={classes.activeClick}*/}
            {/*              to={"/news"}>News</NavLink></div>*/}

            {/*<div><NavLink activeClassName={  classes.activeHover} className={classes.activeClick}*/}
            {/*              to={"/music"}>Music</NavLink></div>*/}

            {/*<div><NavLink activeClassName={classes.activeHover} className={classes.activeClick}*/}
            {/*              to={"/settings"}>Settings</NavLink></div>*/}

        </div>
    )
}