import classes from "./Dialogs.module.css";
import React from "react";

type PropsDialogsMessageType = {
    message: string
    messageId: string
}

function DialogsMessage(props: PropsDialogsMessageType) {
    return <div className={classes.message}>{props.message}</div>
}

export default React.memo(DialogsMessage)