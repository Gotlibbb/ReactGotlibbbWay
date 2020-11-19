import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalCount,
    setUsers,
    toggleFollowingProgress,
    unfollow,
} from "../../Redux/usersReducer";
import {StateType, UserElType} from "../../Redux/store";
import {Preloader} from "../../assets/Preloader";
import {usersAPI} from "../../Api/api";


type UsersContainerPropsType = {
    usersPage: UserElType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    setUsers: (UsersData: UserElType[]) => void
    setTotalCount: (setTotalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFinished: number[]


}


class UsersAPIClassComponent extends React.Component <UsersContainerPropsType, UserElType> {

    componentDidMount() {
        this.props.setIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount)
        })

    }

    onPageChanged = (page: number) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);

        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
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

        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                usersPage={this.props.usersPage}
                isFetching={this.props.isFetching}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                setUsers={this.props.setUsers}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                isFinished={this.props.isFinished}


            />

        </>

    }


}

function mapStateProps(state: StateType) {

    return {
        usersPage: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFinished: state.usersPage.isFinished
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


export const UsersContainer = connect(mapStateProps,
    {follow, unfollow, setCurrentPage, setIsFetching, setTotalCount, setUsers, toggleFollowingProgress}

)(UsersAPIClassComponent);









