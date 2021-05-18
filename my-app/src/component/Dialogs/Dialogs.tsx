import React from "react";
import classes from "./Dialogs.module.css";
import DialogName from "./DialogName";
import DialogsMessage from "./DialogsMessages";
import {DialogsDataElType, MessagesDataElType} from "../../Redux/store";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../assets/FormControls/FormControl";

type DialogsPageTypeProps = {
    dialogsData: Array<DialogsDataElType>
    messagesData: Array<MessagesDataElType>
    addMessages: (message: string) => void
    newMessage: string
    isAuth: boolean
}


export function Dialogs(props: DialogsPageTypeProps) {

    let dialogsElement = props.dialogsData.map((d, index) => <DialogName dialogsId={d.dialogsId} name={d.name} key={index}/>)
    let messagesElement = props.messagesData.map((m,index) => <DialogsMessage messageId={m.messageId}
                                                                      message={m.message} key={index}/>)

    const addMessages = (value: any) => {

        props.addMessages(value.newMessageBody)
    }

    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }


    return <div className={classes.Dialogs}>
        <div className={classes.dialogsNames}>
            {dialogsElement}
        </div>

        <div className={classes.Messages}>
            {messagesElement}
            <AddMessageForm onSubmit={addMessages}/>
        </div>

    </div>
}

const AddMessageForm = reduxForm({form: 'message form'})(
    (props: InjectedFormProps) => {
        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}  placeholder={"enter your message"}
                       name={"newMessageBody"}/>
                <button>Send</button>
            </div>
        </form>
    })







