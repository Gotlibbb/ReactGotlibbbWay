import {UserElType, UserPageType} from "./store"


let initialState: UserPageType = {
    items: [

    ]
}


export type DispatchActionTypeUsers =
    | ReturnType<typeof createFollowAction>
    | ReturnType<typeof createUnFollowAction>
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
            debugger
            return {
                ...state,
                items: [...state.items,...action.items]
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
