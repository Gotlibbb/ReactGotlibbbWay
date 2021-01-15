import React from "react";
import {Dispatch} from "redux";
import { getAuth } from "./authReducer";

type initialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}


export type DispatchActionTypeApp =

    | ReturnType<typeof setInitialized>

    ;



export const appReducer = (state: initialStateType = initialState, action: DispatchActionTypeApp): initialStateType => {
    switch (action.type) {

        case "INITIALIZED_SUCCEED":

            return {
                ...state,
                initialized: true

            }


        default:
            return state;

    }
}

export const setInitialized = () => {
    return {
        type: "INITIALIZED_SUCCEED",
    }
};




export const initialize = () => {

    return (dispatch: Dispatch<any>) => {
let promise = dispatch(getAuth())

        Promise.all([promise]).then(()=>{
            dispatch(setInitialized())
        })

    }

};
