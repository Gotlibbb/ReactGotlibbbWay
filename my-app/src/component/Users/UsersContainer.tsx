import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {getFollow, getUnFollow, getUsers, setCurrentPage, } from "../../Redux/usersReducer";
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


class UsersAPIClassComponent extends React.PureComponent <UsersContainerPropsType, UserElType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);

    }

    // пробегаемся по массиву фором, добавляем каждому элементу номер страницы


    render() {
        console.log("render")

        let pageCount: number | undefined = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

//мапим элементы в спан и следим за активной страницей currentPage сравнивая с элементом

        return <>

            <Users
                onPageChanged={this.onPageChanged}
                {...this.props}
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

export const UsersContainer = compose<Function>(connect(mapStateProps, {setCurrentPage,  getUnFollow, getFollow, getUsers}), React.memo)(UsersAPIClassComponent)










