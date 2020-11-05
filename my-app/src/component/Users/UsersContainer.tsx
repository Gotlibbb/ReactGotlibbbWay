import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    createFollowAction,
    createSetUsersAction,
    createUnFollowAction,
    DispatchActionTypeUsers, setCurrentPageAC, setTotalCountAC
} from "../../Redux/usersReducer";
import {StateType, UserElType, UserPageType} from "../../Redux/store";
import {UsersClass} from "./UsersClass";


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
        setCurrentPage: (currentPage: number)=> {
            dispatch(setCurrentPageAC(currentPage))
        },
        follow: (userID: number) => {

            dispatch(createFollowAction(userID))
        },
        unfollow: (userID: number) => {

            dispatch(createUnFollowAction(userID))
        },
        setUsers: (items: UserElType[])=> {
            dispatch(createSetUsersAction(items))
        },
        setTotalCount: (totalUsersCount: number)=> {
            dispatch(setTotalCountAC(totalUsersCount))
        },
    }

}


export const UsersContainer = connect(mapStateProps, mapDispatchProps)(UsersClass);









