import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    createFollowAction,
    createSetUsersAction,
    createUnFollowAction,
    DispatchActionTypeUsers
} from "../../Redux/usersReducer";
import {StateType, UserElType, UserPageType} from "../../Redux/store";
import {UsersClass} from "./UsersClass";


function mapStateProps(state: StateType) {

    return {
        usersPage: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }

}

function mapDispatchProps(dispatch: (action: DispatchActionTypeUsers) => void) {

    return {
        follow: (userID: number) => {

            dispatch(createFollowAction(userID))
        },
        unfollow: (userID: number) => {

            dispatch(createUnFollowAction(userID))
        },
        setUsers: (items: UserElType[])=> {
            dispatch(createSetUsersAction(items))
        },
    }

}


export const UsersContainer = connect(mapStateProps, mapDispatchProps)(UsersClass);









