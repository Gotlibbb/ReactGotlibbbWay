import {UserElType, UserPageType} from "./store"
import {authAPI, usersAPI} from "../Api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/helper";


let initialState = {
    items: [],
    pageSize: 12,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    isFinished: [],


}


export type DispatchActionTypeUsers =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setUsers>;



export const usersReducer = (state: UserPageType = initialState, action: DispatchActionTypeUsers): UserPageType => {
    switch (action.type) {
        case "FOLLOW":

            return {
                ...state,
                items: updateObjectInArray(state.items, action.userID, "id", {followed:true})

            }
        case "UNFOLLOW":

            return {
                ...state,
                items: updateObjectInArray(state.items, action.userID, "id", {followed:false})

            }
        case "SET_USERS":

            return {...state, items: action.items}


        case "SET_CURRENT_PAGE":

            return {
                ...state, currentPage: action.currentPage
            }

        case "SET_USERS_COUNT":

            return {
                ...state, totalCount: action.totalCount
            }
        case "SET_IS_FETCH":

            return {
                ...state, isFetching: action.isFetch
            }
        case "SET_FOLLOWING_PROGRESS":

            return {
                ...state, isFinished: action.isFetch ?
                    [...state.isFinished, action.userId] :
                    state.isFinished.filter(id => id !== action.userId)
            }

        default:
            return state;

    }
}

export const follow = (userID: number) => ({type: "FOLLOW", userID } as const);

export const unfollow = (userID: number) => ({type: "UNFOLLOW", userID} as const);

export const setUsers = (items: UserElType[]) => ({type: "SET_USERS", items} as const);

export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const);

export const setTotalCount = (totalCount: number) => ({type: "SET_USERS_COUNT", totalCount} as const);

export const setIsFetching = (isFetch: boolean) => ({type: "SET_IS_FETCH", isFetch} as const);

export const toggleFollowingProgress = (isFetch: boolean, userId: number) => ({type: "SET_FOLLOWING_PROGRESS", isFetch, userId} as const);


export const getUsers = (currentPage: number, pageSize: number) => {

    return async (dispatch: Dispatch<DispatchActionTypeUsers>) => {
        dispatch(setIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount))
    }
}

const toggleFollow = async (dispatch: Dispatch<DispatchActionTypeUsers>, userId: number, apiMethod: any, actionCreator: Function  ) => {

    dispatch(toggleFollowingProgress(true, userId));

    let data = await apiMethod

    dispatch(toggleFollowingProgress(false, userId));
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
}

export const getUnFollow = (userId: number) => {

    return async (dispatch: Dispatch<DispatchActionTypeUsers>) => {
        toggleFollow(dispatch, userId, authAPI.unFollow(userId), unfollow )
    }
}

export const getFollow = (userId: number) => {

    return async (dispatch: Dispatch<DispatchActionTypeUsers>) => {
        toggleFollow(dispatch, userId, authAPI.follow(userId), follow )
    }
}
