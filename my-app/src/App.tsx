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
import Login from "./component/login/Login";
import { connect } from 'react-redux';
import {getAuth} from "./Redux/authReducer";
import {initialize} from "./Redux/appReducer";
import {StateType} from "./Redux/store";
import {Preloader} from "./assets/Preloader";

type AppPropsType = {
    initialize : () => void
    initialized : boolean

}

class App extends React.Component <AppPropsType> {

    componentDidMount() {

        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
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
}


export default connect((state: StateType)=>{ return {initialized: state.app.initialized}}, {initialize})(App);
