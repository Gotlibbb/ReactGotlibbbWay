import React from "react";
import {UserElType, UserPageType} from "../../Redux/store";
import  axios from 'axios';
import no_ava from '../../images/no_ava.jpg'

type UsersPropsType = {
    usersPage: UserElType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (UsersData: UserElType[]) => void
}

export function Users(props: UsersPropsType) {

    if (props.usersPage.length === 0) {
        debugger;

        axios.get<UserPageType>("https://social-network.samuraijs.com/api/1.0/users").then(res => {


            props.setUsers(res.data.items)
            debugger
        });


    }
    return <div>

        {props.usersPage.map(u => <div key={u.id}>

            <div>{u.name}</div>
            <img src={ u.photos.small != null  ? u.photos.small : no_ava }  style={{width:"150px"}}/>
            <div>
                {
                    u.followed ?

                        <button onClick={() => {
                            debugger
                            props.unfollow(u.id)
                        }}>Unfollow</button> :

                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

            </div>


            {/*<div>{u.location.city}</div>*/}
            {/*<div>{u.location.country}</div>*/}

        </div>)}
    </div>
}