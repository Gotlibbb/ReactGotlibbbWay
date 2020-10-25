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
// import {DialogsContainer} from "./component/Dialogs/DialogsContainer";


function App() {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/Profile'
                           render={() => <Profile/>}/>

                    <Route path='/Dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/News'
                           render={() => <News/>}/>

                    <Route path='/Music'
                           render={() => <Music/>}/>

                    <Route path='/Settings'
                           render={() => <Settings/>}/>
                    <Route path='/Users'
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
