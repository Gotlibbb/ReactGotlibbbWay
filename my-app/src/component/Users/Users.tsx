import React from "react";
import {UserElType} from "../../Redux/store";
import no_ava from '../../images/no_ava.jpg'
import styles from "./users.module.css";

type UsersPropsType = {
    usersPage: UserElType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (p: number) => void
    setUsers: (UsersData: UserElType[]) => void

    totalUsersCount: number
    pageSize: number
    currentPage:number

}

export function Users(props: UsersPropsType) {

    // if (props.usersPage.length === 0) {
    //
    //
    //     axios.get<UserPageType>("https://social-network.samuraijs.com/api/1.0/users").then(res => {
    //
    //
    //         props.setUsers(res.data.items)
    //
    //     });
    //
    //
    // }
    let pageCount:number|undefined = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && styles.selectedPage || ""}>{p}</span>


            })}
        </div>
        {props.usersPage.map(u => <div key={u.id}>

            <div>{u.name}</div>
            <img src={u.photos.small != null ? u.photos.small : no_ava} style={{width: "150px"}}/>
            <div>
                {
                    u.followed ?

                        <button onClick={() => {

                            props.unfollow(u.id)
                        }}>Unfollow</button> :

                        <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}

            </div>
        </div>)}
    </div>
}


