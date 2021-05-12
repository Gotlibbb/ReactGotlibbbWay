import React from "react";
import {UserElType} from "../../Redux/store";
import no_ava from '../../images/no_ava.png'
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";

type UserPropsType = {

    user: UserElType
    isFinished: number[]
    getUnFollow: (userId: number) => void
    getFollow: (userId: number) => void
}

export function User( {user, ...props}: UserPropsType) {


    return <div key={user.id} className={user.followed ? styles.userFollow : styles.user}>

                    <NavLink to={'/profile/' + user.id}>
                        <div>{user.name}</div>

                        <img src={user.photos.small || no_ava}
                             alt={""}/>
                    </NavLink>
                    <div>
                        {user.followed ?
                            <button disabled={props.isFinished.some(id => id === user.id)} onClick={() => {
                                props.getUnFollow(user.id)
                            }}>Unfollow</button> :
                            <button disabled={props.isFinished.some(id => id === user.id)} onClick={() => {
                                props.getFollow(user.id)
                            }}>Follow</button>
                        }
                    </div>
                </div>

}

