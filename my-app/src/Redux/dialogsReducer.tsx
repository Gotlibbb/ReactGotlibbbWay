import {v1} from "uuid";
import {DialogsPageType, DispatchActionType, MessagesDataElType} from "./store";

let initialState : DialogsPageType  = {
    newMessage: "",

    dialogsData: [
        {dialogsId: v1(), name: "Miroliub"},
        {dialogsId: v1(), name: "Ratibor"},
        {dialogsId: v1(), name: "Inokentii`"},
        {dialogsId: v1(), name: "Iziaslav"},
        {dialogsId: v1(), name: "Iziaslav"},
    ],

    messagesData: [
        {messageId: v1(), message: "Hi"},
        {messageId: v1(), message: "My parents gave me a very difficult name"},
        {messageId: v1(), message: "True?)"},

    ],
}

export const dialogsReducer = (state: DialogsPageType = initialState , action: DispatchActionType):DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE" :
        let newMessage: MessagesDataElType = {
                messageId: v1(),
                message: action.newMessageText,
            };

            // let copyState={...state};
            // copyState.messagesData=[...state.messagesData]
            // copyState.messagesData.push(newMessage);
            // copyState.newMessage = "";
            // return copyState ;

            return {
                ...state,
                messagesData:[...state.messagesData, newMessage],
                newMessage : "",
            }

        case "CHANGE-NEW-MESSAGE" :

            // let copyState={...state};
            // copyState.newMessage = action.newMessageText;
            // return copyState ;

            return {
                ...state,
                newMessage : action.newMessageText,
            }

        default:
            return state;

    }
}

export const createAddMessageAction = (newMessageText: string) => {
    return {
        type: "ADD-MESSAGE",
        newMessageText: newMessageText,
    } as const
};
export const createChangeMessageHandlerAction = (newMessageText: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE",
        newMessageText: newMessageText,
    } as const
};