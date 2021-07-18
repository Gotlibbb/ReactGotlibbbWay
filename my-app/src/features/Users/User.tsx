import React from "react";
import {UserElType} from "../../store/stateType";
import no_ava from '../-images/no_ava.png'
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import FollowToggle from "../-assets/FollowToggle";

type UserPropsType = {

    user: UserElType
    isFinished: number[]
    getUnFollow: (userId: number) => void
    getFollow: (userId: number) => void
}



export function User({user, ...props}: UserPropsType) {


    return <div key={user.id} className={styles.user}>

        <NavLink to={'/ReactGotlibbbWay/profile/' + user.id}>
            <div>{user.name}</div>

            <img src={user.photos.small || no_ava}
                 alt={""}/>
        </NavLink>
        <FollowToggle getUnFollow={props.getUnFollow} getFollow={props.getFollow} user={user} isFinished={props.isFinished}/>
    </div>

}

