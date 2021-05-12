import {AuthDataType} from "./store"
import {Dispatch} from "redux";
import {authAPI} from "../Api/api";
import {stopSubmit} from "redux-form";


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

            }


        default:
            return state;

    }
}

export const setAuthUserData = (id: string | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: "SET_USER_DATA", data: {id, login, email, isAuth}} as const);


export const getAuth = () => {

    return async (dispatch: Dispatch<DispatchActionTypeAuth>) => {
        let data = await authAPI.auth()
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true))
        }
    }
}


export const login = (email: string, password: string, rememberMe: boolean) => {

    return async (dispatch: Dispatch<any>) => {
        let data = await authAPI.login(email, password, rememberMe)
        if (data.resultCode === 0) {
            dispatch(getAuth())
        } else {
            dispatch(stopSubmit("login", {_error: data.messages}))
        }

    }
}
export const logout = () => {

    return async (dispatch: Dispatch<DispatchActionTypeAuth>) => {
        let data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }

    }
}