import React from "react";
import {UserElType, UserPageType} from "../../Redux/store";
import  axios from 'axios';
import no_ava from '../../images/no_ava.jpg'
import styles from './users.module.css'
import {render} from "react-dom";

type UsersPropsType = {
    usersPage: UserElType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (UsersData: UserElType[]) => void
    pageSize?: number
    totalUsersCount?: number
    currentPage?: number
}




export class UsersClass extends React.Component <UsersPropsType,UserElType> {

    componentDidMount() {
        axios.get<UserPageType>("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }



    render()  {



        return(<div>
                <div>
                    <span className={styles.selectedPage}>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                </div>
                {this.props.usersPage.map(u => <div key={u.id}>

                    <div>{u.name}</div>
                    <img src={u.photos.small != null ? u.photos.small : no_ava} style={{width: "150px"}}/>
                    <div>
                        {
                            u.followed ?

                                <button onClick={() => {

                                    this.props.unfollow(u.id)
                                }}>Unfollow</button> :

                                <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}

                    </div>
                </div>)}
            </div>
        );






    }


}