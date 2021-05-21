import {createAddMessageAction} from "../../store/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {DispatchActionType, StateType} from "../../store/stateType";
import {authUserHOC} from "../-hocs/AuthRedirect";
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









