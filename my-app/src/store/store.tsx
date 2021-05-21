import {applyMiddleware, combineReducers, compose, createStore, Store} from "redux";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {profileReducer} from "./reducers/profileReducer";
import {usersReducer} from "./reducers/usersReducer";
import {authReducer} from "./reducers/authReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./reducers/appReducer";

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