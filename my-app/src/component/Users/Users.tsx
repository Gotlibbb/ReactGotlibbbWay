import React from "react";
import {UserElType} from "../../Redux/store";
import no_ava from '../../images/no_ava.jpg'
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    usersPage: UserElType[]
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFinished: number[]
    getUnFollow: (userId: number) => void
    getFollow: (userId: number) => void


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
                            <button disabled={props.isFinished.some(id => id === u.id)} onClick={() => {
                                props.getUnFollow(u.id)
                            }}>Unfollow</button> :
                            <button disabled={props.isFinished.some(id => id === u.id)} onClick={() => {
                                props.getFollow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </div>
            )}
        </div>
    </div>
}


