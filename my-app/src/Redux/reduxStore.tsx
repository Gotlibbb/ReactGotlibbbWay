import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./appReducer";

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    data: authReducer,
    form: formReducer,
    app: appReducer,
})

 // @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

 // let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;