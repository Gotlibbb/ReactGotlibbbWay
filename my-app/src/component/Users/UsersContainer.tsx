import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {getFollow, getUnFollow, getUsers, setCurrentPage, setIsFetching,} from "../../Redux/usersReducer";
import {StateType, UserElType} from "../../Redux/store";
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getIsFetchingSelector,
    getIsFinishedSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersPageSelector
} from "./user-selector";


type UsersContainerPropsType = {
    usersPage: UserElType[]
    setCurrentPage: (currentPage: number) => void
    getUsers: (currentPage: number, pageSize: number, page?: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFinished: number[]
    getUnFollow: (userId: number) => void
    getFollow: (userId: number) => void

}


class UsersAPIClassComponent extends React.Component <UsersContainerPropsType, UserElType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);

    }

    // пробегаемся по массиву фором, добавляем каждому элементу номер страницы


    render() {


        let pageCount: number | undefined = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

//мапим элементы в спан и следим за активной страницей currentPage сравнивая с элементом

        return <>

            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                usersPage={this.props.usersPage}
                onPageChanged={this.onPageChanged}
                isFinished={this.props.isFinished}
                getUnFollow={this.props.getUnFollow}
                getFollow={this.props.getFollow}
                isFetching={this.props.isFetching}


            />

        </>

    }


}

function mapStateProps(state: StateType) {

    return {
        usersPage: getUsersPageSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        isFinished: getIsFinishedSelector(state),

    }

}

// function mapDispatchProps(dispatch: (action: DispatchActionTypeUsers) => void) {
//
//     return {
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         follow: (userID: number) => {
//
//             dispatch(createFollowAction(userID))
//         },
//         unfollow: (userID: number) => {
//
//             dispatch(createUnFollowAction(userID))
//         },
//         setUsers: (items: UserElType[]) => {
//             dispatch(createSetUsersAction(items))
//         },
//         setTotalCount: (totalUsersCount: number) => {
//             dispatch(setTotalCountAC(totalUsersCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         },
//     }
//
// }
let mdtp = {
    setCurrentPage,
    setIsFetching,

    getUnFollow,
    getFollow,
    getUsers
}

export const UsersContainer = compose<Function>(connect(mapStateProps, mdtp))(UsersAPIClassComponent)










