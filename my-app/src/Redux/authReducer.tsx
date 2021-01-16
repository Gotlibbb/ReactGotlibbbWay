import React from "react";
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

export const setAuthUserData = (id: string | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "SET_USER_DATA",
        data: {id, login, email, isAuth}
    } as const
};


export const getAuth = () => {

    return (dispatch: Dispatch<DispatchActionTypeAuth>) => {

        return authAPI.auth().then(data => {

            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true))

            }

        })


    }
}


export const login = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch: Dispatch<any>) => {

        authAPI.login(email, password, rememberMe).then(data => {

            if (data.resultCode === 0) {
                dispatch(getAuth())

            } else {
                debugger
                dispatch(stopSubmit("login", {_error: data.messages}))
            }

        })


    }
}
export const logout = () => {

    return (dispatch: Dispatch<any>) => {

        authAPI.logout().then(data => {

            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))

            }


        })


    }
}