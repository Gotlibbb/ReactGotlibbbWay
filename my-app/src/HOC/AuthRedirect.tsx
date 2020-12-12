import {Redirect} from "react-router-dom";
import React, {ComponentClass, FunctionComponent, ReactComponentElement} from "react";
import {StateType} from "../Redux/store";
import {connect} from "react-redux";



let mapStateToPropsRD = (state: StateType) => ({
    isAuth: state.data.isAuth
})

export const authUserHOC = (Component: Function ) =>{

   return connect(mapStateToPropsRD)((props: {isAuth: boolean})=>{
        // if (!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...props} />

    })

}
