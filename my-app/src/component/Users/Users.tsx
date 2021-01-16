import React from "react";
import {UserElType} from "../../Redux/store";
import no_ava from '../../images/no_ava.png'
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import {Preloader} from "../../assets/Preloader";

type UsersPropsType = {
    usersPage: UserElType[]
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFinished: number[]
    getUnFollow: (userId: number) => void
    getFollow: (userId: number) => void
    isFetching: boolean


}

export function Users(props: UsersPropsType) {

    let pageCount: number | undefined = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div className={styles.usersPage}>
        <div className={styles.pageS}>
            {pages.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && styles.selectedPage || styles.page}>{p}</span>


            })}
        </div>
        <div>{props.isFetching && <Preloader/>}</div>
        <div className={styles.usersBlock}>
            {props.usersPage.map
            (u => <div key={u.id} className={u.followed ? styles.userFollow : styles.user}>

                    <NavLink to={'/profile/' + u.id}>
                        <div>{u.name}</div>

                        <img src={u.photos.small != null ? u.photos.small : no_ava}
                            // style={u.photos.small === null ? {"opacity": "30%"} : {"opacity": "100%"}}
                             alt={""}/>
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


