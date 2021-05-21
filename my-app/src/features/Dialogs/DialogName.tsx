import classes from "./dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsDialogsNameType = {
    dialogsId: string
    name: string
}

function DialogName(props: PropsDialogsNameType) {
    return <div className={classes.name}><NavLink to={"/Dialogs/" + props.dialogsId}>{props.name}</NavLink></div>
}

export default React.memo(DialogName)