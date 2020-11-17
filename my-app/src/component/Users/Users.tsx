import React from "react";
import {AuthType, UserElType} from "../../Redux/store";
import no_ava from '../../images/no_ava.jpg'
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    usersPage: UserElType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (p: number) => void
    setUsers: (UsersData: UserElType[]) => void
    isFetching: boolean
    totalUsersCount: number
    pageSize: number
    currentPage: number

}

export function Users(props: UsersPropsType) {

    let pageCount: number | undefined = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div className={styles.usersPage}>
        <div>
            {pages.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && styles.selectedPage || styles.page}>{p}</span>


            })}
        </div>
        <div className={styles.usersBlock}>
            {props.usersPage.map
            (u => <div key={u.id} className={styles.user}>

                <div>{u.name}</div>
                <NavLink to={'/profile/' + u.id}>

                    <img src={u.photos.small != null ? u.photos.small : no_ava}
                         style={{width: "150px", borderRadius: "40%"}} alt={""}/>
                </NavLink>
                <div>
                    {u.followed ?
                        <button onClick={() => {
                            axios.delete<AuthType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {"API-KEY": "7356db4d-2dd5-4272-8da5-db03322fb687"}
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                })
                        }}>Unfollow</button> :
                            <button onClick={() => {
                                axios.post<AuthType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {"API-KEY": "7356db4d-2dd5-4272-8da5-db03322fb687"}
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}>Follow</button>
                    }
                </div>
            </div>
            )}
        </div>
    </div>
}


