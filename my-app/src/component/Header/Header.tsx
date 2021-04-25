import React from "react";
import classes from "./Header.module.css"
import {useHistory} from "react-router-dom";
import logo from "../../images/logo192.png"

type HeaderPropsType = {
    auth: boolean
    login: string | null
    logout: () => void
}

function Header(props: HeaderPropsType) {
    let history = useHistory()
    return <header className={classes.header}>
        <img
            src={logo}
            alt="logo"/>
        <span className={classes.name}>{props.login||"Please login"}</span>
        {props.auth &&
            <div className={classes.login}>
                    <button onClick={() => {
                        props.logout()
                        history.push('login')
                    }}>Log out
                    </button>

            </div>

        }
    </header>
}

export default React.memo(Header)