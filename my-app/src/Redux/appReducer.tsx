import {Dispatch} from "redux";
import {getAuth} from "./authReducer";

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

export const setInitialized = () => ({type: "INITIALIZED_SUCCEED"} as const);


export const initialize = () => {

    return async (dispatch: Dispatch<any>) => {
        await dispatch(getAuth())
        await dispatch(setInitialized())
    }
};
