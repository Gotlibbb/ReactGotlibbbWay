import {AuthDataType, AuthType} from "./store"


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export type DispatchActionTypeAuth =

    | ReturnType<typeof setAuthUserData>;


export const authReducer = (state: AuthDataType = initialState, action: DispatchActionTypeAuth): AuthDataType => {
    switch (action.type) {

        case "SET_USER_DATA":

            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state;

    }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null) => {
    return {
        type: "SET_USER_DATA",
        data: {id, login, email}
    } as const
};

