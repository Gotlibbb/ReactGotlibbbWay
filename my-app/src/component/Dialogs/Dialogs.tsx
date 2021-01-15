import React, {ChangeEvent} from "react";
import classes from "./Dialogs.module.css";
import {DialogName} from "./DialogName";
import {DialogsMessage} from "./DialogsMessages";
import {DialogsDataElType, MessagesDataElType} from "../../Redux/store";
import {Redirect} from "react-router-dom";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import {Textarea} from "../../assets/FormControls/FormControl";
import {maxLength, required} from "../../utils/validators/validators";

type DialogsPageTypeProps = {
    dialogsData: Array<DialogsDataElType>
    messagesData: Array<MessagesDataElType>
    addMessages: (messsage: string) => void
    // onChangeMessage: (text: string) => void
    newMessage: string
    isAuth: boolean
}


export function Dialogs(props: DialogsPageTypeProps) {

    let dialogsElement = props.dialogsData.map(d => <DialogName dialogsId={d.dialogsId} name={d.name}/>)
    let messagesElement = props.messagesData.map(m => <DialogsMessage messageId={m.messageId}
                                                                      message={m.message}/>)
    // const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = event.currentTarget.value;
    //     props.onChangeMessage(text)
    // }

    const addMessages = ( value : any) => {

        props.addMessages(value.newMessageBody)
    }

    if(!props.isAuth) { return <Redirect to={"/login"}/> }

    return <div className={classes.Dialogs}>
        <div className={classes.dialogsNames}>
            {dialogsElement}
        </div>

        <div className={classes.Messages}>
            {messagesElement}
            <AddMessageForm onSubmit={addMessages}/>
            {/*<div className={classes.communicationBlock} >*/}
            {/*    <textarea className={classes.textarea} onChange={onChangeMessage} value={props.newMessage}/><br/>*/}
            {/*    <button className={classes.btnadd} onClick={addMessages}>Send Message</button>*/}
            {/*</div>*/}
        </div>

    </div>
}
const vax100length = maxLength(100)
const AddMessageForm = reduxForm({form: 'message form'})(
    (props: InjectedFormProps)=>{
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} validate={[required,vax100length ]} placeholder={"enter your message"} name={"newMessageBody"} />
            <button>Send</button>
        </div>
    </form>
})







