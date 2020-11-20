import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    data: authReducer,
})

export let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;