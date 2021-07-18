import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../-assets/FormControls/FormControl";
import {connect} from "react-redux";
import {login} from "../../store/reducers/authReducer";
import {Redirect} from "react-router-dom";
import style from "../-assets/FormControls/formControl.module.css"
import {StateType} from "../../store/stateType";
import {getAuthSelector} from "../Header/header-selector";
import { compose } from "redux";

const LogForm = reduxForm({form: 'login'})
((props: InjectedFormProps) => {

    return <form onSubmit={props.handleSubmit} className={style.loginBlock}>
            <h1>Welcome</h1>
        <p>For test purpose login: free@samuraijs.com
and password: free</p>
        <div >
            <Field component={Input} placeholder={"Email"} name={"email"}/>
        </div>

        <div>
            <Field component={Input}  placeholder={"Password"} name={"password"}
                   type={"password"}/>
        </div>

        {/*<div style={{display: "flex", justifyContent: "center"}}>*/}
        {/*    <Field  style={{fontSize: "25px"}} components={Input} type={"checkbox"} name={"remember me"}/>*/}
        {/*    <span style={{fontSize: "25px"}}>Remember me</span>*/}
        {/*</div>*/}

        <div>
            <button>Login</button>
        </div>

        {props.error &&
        <div className={style.authError}>{props.error}</div>
        }
    </form>
})

type LoginPropsType = {
    login: Function
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {

    if (props.isAuth) return <Redirect to={'/ReactGotlibbbWay/profile'}/>


    const onSubmit = (formData: any) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return <div>

        <LogForm onSubmit={onSubmit}/>

    </div>
}

export default compose<Function>(connect((state: StateType) => {return {isAuth: getAuthSelector(state)}}, {login}), React.memo)(Login)