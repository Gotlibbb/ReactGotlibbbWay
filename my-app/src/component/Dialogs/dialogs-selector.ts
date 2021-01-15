import {StateType} from "../../Redux/store";

export const getMessagesDataSelector = (state: StateType) => state.dialogPage.messagesData;

export const getDialogsDataSelector = (state: StateType) => state.dialogPage.dialogsData;

export const getNewMessageSelector = (state: StateType) => state.dialogPage.newMessage;
