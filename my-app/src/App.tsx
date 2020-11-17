import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Navbar} from "./component/Navbar/Navbar";
import {Profile} from "./component/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./component/News/News";
import {Music} from "./component/Music/Music";
import {Settings} from "./component/Settings/Settings";
import {DialogsContainer} from "./component/Dialogs/DialogsContainer";
import {Users} from "./component/Users/Users";
import {UsersContainer} from "./component/Users/UsersContainer";
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContainer from "./component/Header/HeaderContainer";
// import {DialogsContainer} from "./component/Dialogs/DialogsContainer";


function App() {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer />}/>

                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/users'

                           render={() => <UsersContainer  />}/>

                    <Route path='/news'
                           render={() => <News/>}/>

                    <Route path='/music'
                           render={() => <Music/>}/>

                    <Route path='/settings'
                           render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
