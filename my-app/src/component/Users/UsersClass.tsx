import React from "react";
import {UserElType, UserPageType} from "../../Redux/store";
import axios from 'axios';
import no_ava from '../../images/no_ava.jpg'
import styles from './users.module.css'

type UsersPropsType = {
    usersPage: UserElType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (UsersData: UserElType[]) => void
    setTotalCount: (setTotalCount: number) => void
    pageSize:  number
    totalUsersCount:  number
    currentPage:  number
}


export class UsersClass extends React.Component <UsersPropsType, UserElType> {

    componentDidMount() {
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        })

    }
    onPageChanged = (page:number) => {
         this.props.setCurrentPage(page);
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })

    }

    // пробегаемся по массиву фором, добавляем каждому элементу номер страницы


    render() {


        let pageCount:number|undefined = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

//мапим элементы в спан и следим за активной страницей currentPage сравнивая с элементом

        return (<div>
                <div>
                    {pages.map(p=>{
                        return <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage=== p && styles.selectedPage || "" }>{p}</span>



                    })}
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