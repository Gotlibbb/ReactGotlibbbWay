import React from 'react';
import './App.css';
import {Navbar} from "./component/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./component/News/News";
import {Music} from "./component/Music/Music";
import {Settings} from "./component/Settings/Settings";
import {DialogsContainer} from "./component/Dialogs/DialogsContainer";
import {UsersContainer} from "./component/Users/UsersContainer";
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContainer from "./component/Header/HeaderContainer";
import {Login} from "./component/login/Login";

// import {DialogsContainer} from "./component/Dialogs/DialogsContainer";


function App() {

    // @ts-ignore
    return (
        <BrowserRouter>
            <div className='app-container'>
                <div className={'header'}>
                    <HeaderContainer/>
                </div>

                <div className={"content-block"}>

                    <div className={'navbar'}>
                        <Navbar/>
                    </div>

                    <div className={"content"}>

                        <Route path='/profile/:userId?'

                               render={() => <ProfileContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>

                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>

                        <Route path='/users'

                               render={() => <UsersContainer/>}/>

                        <Route path='/news'
                               render={() => <News/>}/>

                        <Route path='/music'
                               render={() => <Music/>}/>

                        <Route path='/settings'
                               render={() => <Settings/>}/>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
