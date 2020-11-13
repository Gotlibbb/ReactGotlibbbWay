import {UserElType, UserPageType} from "./store"


let initialState = {
    items: [ ],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,

}


export type DispatchActionTypeUsers =
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setUsers> ;


export const usersReducer = (state: UserPageType = initialState, action: DispatchActionTypeUsers):UserPageType => {
    switch (action.type) {
        case "FOLLOW":

            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case "UNFOLLOW":

            return {
                ...state,
                //users: [...state.users]
                items: state.items.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case "SET_USERS":

            return  {...state,items: action.items}


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

        default:
            return state;

    }
}

export const follow = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
};
export const unfollow = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
};
export const setUsers = (items: UserElType[]) => {
    return {
        type: "SET_USERS",
        items
    } as const
};
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    } as const
};
export const setTotalCount = (totalCount: number) => {
    return {
        type: "SET_USERS_COUNT",
        totalCount
    } as const
};
export const setIsFetching = (isFetch: boolean) => {
    return {
        type: "SET_IS_FETCH",
        isFetch
    } as const
};
