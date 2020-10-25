import {combineReducers, createStore, Store} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";

let reducers = combineReducers({
    dialogPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
})

export let store: Store = createStore(reducers);
