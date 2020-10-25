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


function mapStateProps(state: StateType) {

    return {
        usersPage: state.usersPage.items
    }

}

function mapDispatchProps(dispatch: (action: DispatchActionTypeUsers) => void) {

    return {
        follow: (userID: number) => {
            debugger
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


export const UsersContainer = connect(mapStateProps, mapDispatchProps)(Users);









