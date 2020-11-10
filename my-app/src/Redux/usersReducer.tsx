import {UserElType, UserPageType} from "./store"


let initialState = {
    items: [ ],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,

}


export type DispatchActionTypeUsers =
    | ReturnType<typeof createFollowAction>
    | ReturnType<typeof createUnFollowAction>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof createSetUsersAction> ;


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

        default:
            return state;

    }
}

export const createFollowAction = (userID: number) => {
    return {
        type: "FOLLOW",
        userID
    } as const
};
export const createUnFollowAction = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID
    } as const
};
export const createSetUsersAction = (items: UserElType[]) => {
    return {
        type: "SET_USERS",
        items
    } as const
};
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        currentPage
    } as const
};
export const setTotalCountAC = (totalCount: number) => {
    return {
        type: "SET_USERS_COUNT",
        totalCount
    } as const
};
