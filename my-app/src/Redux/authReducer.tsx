import {AuthDataType} from "./store"
import {Dispatch} from "redux";
import {authAPI} from "../Api/api";


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
                isAuth: true,
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


export const getAuth = () => {

    return (dispatch: Dispatch<DispatchActionTypeAuth>) => {

        authAPI.auth().then(data => {

            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email))

            }

        })


    }
}