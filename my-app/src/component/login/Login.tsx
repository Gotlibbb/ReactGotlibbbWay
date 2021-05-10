import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../assets/FormControls/FormControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../../assets/FormControls/formControl.module.css"
import {StateType} from "../../Redux/store";
import {getAuthSelector} from "../Header/header-selector";
import { compose } from "redux";

const LogForm = reduxForm({form: 'login'})
((props: InjectedFormProps) => {

    return <form onSubmit={props.handleSubmit}>

        <div >
            <Field component={Input} validate={[required]} placeholder={"Email"} name={"email"}/>
        </div>

        <div>
            <Field component={Input} validate={[required]} placeholder={"Password"} name={"password"}
                   type={"password"}/>
        </div>

        <div>
            <Field component={Input} type={"checkbox"} name={"remember me"}/>
            Remember me
        </div>

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

    if (props.isAuth) return <Redirect to={'/profile'}/>


    const onSubmit = (formData: any) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return <div>
        <h1>Welcome</h1>
        <LogForm onSubmit={onSubmit}/>

    </div>
}

export default compose<Function>(connect((state: StateType) => {return {isAuth: getAuthSelector(state)}}, {login}), React.memo)(Login)