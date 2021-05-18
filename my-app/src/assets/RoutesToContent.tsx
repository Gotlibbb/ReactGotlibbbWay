import {Route} from "react-router-dom";
import ProfileContainer from "../component/Profile/ProfileContainer";
import Login from "../component/login/Login";
import {DialogsContainer} from "../component/Dialogs/DialogsContainer";
import {UsersContainer} from "../component/Users/UsersContainer";
import {News} from "../component/News/News";
import {Music} from "../component/Music/Music";
import {Settings} from "../component/Settings/Settings";
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