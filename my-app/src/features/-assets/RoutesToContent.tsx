import {Route} from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import Login from "../Login/Login";
import {DialogsContainer} from "../Dialogs/DialogsContainer";
import {UsersContainer} from "../Users/UsersContainer";
// import {News} from "../News/News";
// import {Music} from "../Music/Music";
// import {Settings} from "../Settings/Settings";
import React from "react";

const RoutesToContent = () => {
    return <>
        <Route path='/profile/:userId?'
               us
               render={() => <ProfileContainer/>}/>
        <Route path='/login'
               render={() => <Login/>}/>
        <Route path='/dialogs'
               render={() => <DialogsContainer/>}/>
        <Route path='/users'
               render={() => <UsersContainer/>}/>
        {/*<Route path='/news'*/}
        {/*       render={() => <News/>}/>*/}
        {/*<Route path='/music'*/}
        {/*       render={() => <Music/>}/>*/}
        {/*<Route path='/settings'*/}
        {/*       render={() => <Settings/>}/>*/}
    </>
}

export default React.memo(RoutesToContent)