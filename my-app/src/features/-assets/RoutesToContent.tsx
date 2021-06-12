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
        <Route path='/ReactGotlibbbWay/profile/:userId?'
               us
               render={() => <ProfileContainer/>}/>
        <Route path='/ReactGotlibbbWay/login'
               render={() => <Login/>}/>
        <Route path='/ReactGotlibbbWay/dialogs'
               render={() => <DialogsContainer/>}/>
        <Route path='/ReactGotlibbbWay/users'
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