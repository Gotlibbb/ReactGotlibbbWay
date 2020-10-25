import React from "react";
import {createAddMessageAction, createChangeMessageHandlerAction} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DispatchActionType, StateType} from "../../Redux/store";
import {store} from "../../Redux/reduxStore";


function mapStateProps(state: StateType) {
debugger
    return{
        messagesData: state.dialogPage.messagesData,
        dialogsData: state.dialogPage.dialogsData,
        newMessage: state.dialogPage.newMessage
    }

}

function mapDispatchProps(dispatch: (action: DispatchActionType) => void   )  {

    return {

        onChangeMessage: (newText: string) => {
            dispatch(createChangeMessageHandlerAction(newText))
        },
        addMessages: () => {

            dispatch(createAddMessageAction(store.getState().dialogPage.newMessage))
        }
    }

}



export const DialogsContainer = connect(mapStateProps, mapDispatchProps)(Dialogs);









