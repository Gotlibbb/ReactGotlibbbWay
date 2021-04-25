import {createAddMessageAction} from "../../Redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DispatchActionType, StateType} from "../../Redux/store";
import {authUserHOC} from "../../HOC/AuthRedirect";
import {compose} from "redux";
import {getDialogsDataSelector, getMessagesDataSelector, getNewMessageSelector} from "./dialogs-selector";


function mapStateProps(state: StateType) {

    return {
        messagesData: getMessagesDataSelector(state),
        dialogsData: getDialogsDataSelector(state),
        newMessage: getNewMessageSelector(state),
    }

}

function mapDispatchProps(dispatch: (action: DispatchActionType) => void) {

    return {

        addMessages: (message: string) => {
            dispatch(createAddMessageAction(message))
        }
    }

}


export const DialogsContainer = compose<Function>(connect(mapStateProps, mapDispatchProps), authUserHOC)(Dialogs)









