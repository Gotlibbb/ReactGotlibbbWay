import React from "react";
import {UserElType} from "../../store/stateType";
import styles from "./users.module.css";
import {Preloader} from "../-assets/Preloader";
import Pagination from "../-assets/FormControls/Pagination";
import {User} from "./User";

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

    return <div className={styles.usersPage}>

        {props.isFetching ? <Preloader/> :
            <>
                <Pagination totalUsersCount={props.totalUsersCount}
                            currentPage={props.currentPage}
                            onPageChanged={props.onPageChanged}
                            pageSize={props.pageSize}
                />
                <div className={styles.usersBlock}>
                    {props.usersPage.map(u => <User user={u}
                                                    getUnFollow={props.getUnFollow}
                                                    getFollow={props.getFollow}
                                                    isFinished={props.isFinished}/>
                    )}
                </div>
            </>
        }


    </div>
}

