import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";

import {
    createFollowAction,
    createSetUsersAction,
    createUnFollowAction,
    setCurrentPageAC,
    setTotalCountAC,
    DispatchActionTypeUsers,
} from "../../Redux/usersReducer";

import {StateType, UserElType, UserPageType} from "../../Redux/store";
import axios from "axios";




type UsersPropsType = {
    usersPage: UserElType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (UsersData: UserElType[]) => void
    setTotalCount: (setTotalCount: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
}




class UsersAPIClassComponent extends React.Component <UsersPropsType, UserElType> {

    componentDidMount() {
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        })

    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page);
        axios.get<UserPageType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })

    }

    // пробегаемся по массиву фором, добавляем каждому элементу номер страницы


    render() {


        let pageCount: number | undefined = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

//мапим элементы в спан и следим за активной страницей currentPage сравнивая с элементом

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            usersPage={this.props.usersPage}

            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            setUsers={this.props.setUsers}
            unfollow={this.props.unfollow}
        />


    }


}

function mapStateProps(state: StateType) {

    return {
        usersPage: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }

}

function mapDispatchProps(dispatch: (action: DispatchActionTypeUsers) => void) {

    return {
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        follow: (userID: number) => {

            dispatch(createFollowAction(userID))
        },
        unfollow: (userID: number) => {

            dispatch(createUnFollowAction(userID))
        },
        setUsers: (items: UserElType[]) => {
            dispatch(createSetUsersAction(items))
        },
        setTotalCount: (totalUsersCount: number) => {
            dispatch(setTotalCountAC(totalUsersCount))
        },
    }

}

export const UsersContainer = connect(mapStateProps, mapDispatchProps)(UsersAPIClassComponent);









