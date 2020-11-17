import {combineReducers, createStore, Store} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    dialogPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    data:authReducer,
})

export let store: Store = createStore(reducers);

// @ts-ignore
window.store=store;