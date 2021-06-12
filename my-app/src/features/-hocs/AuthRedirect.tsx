import {Redirect} from "react-router-dom";
import React from "react";
import {StateType} from "../../store/stateType";
import {connect} from "react-redux";


let mapStateToPropsRD = (state: StateType) => ({
    isAuth: state.data.isAuth
})

export const authUserHOC = (Component: Function) => {

    return connect(mapStateToPropsRD)((props: { isAuth: boolean }) => {
        if (!props.isAuth) return <Redirect to={"/ReactGotlibbbWay/login"}/>
        return <Component {...props} />

    })

}
