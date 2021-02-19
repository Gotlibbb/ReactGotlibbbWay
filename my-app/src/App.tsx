import React from 'react';
import style from './App.module.css';
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
import {connect} from 'react-redux';
import {initialize} from "./Redux/appReducer";
import {Preloader} from "./assets/Preloader";
import { StateType } from "./Redux/store";

type AppPropsType = {
    initialize: () => void
    initialized: boolean

}

class App extends React.Component <AppPropsType> {

    componentDidMount() {

        this.props.initialize()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <BrowserRouter>
                <div className={style.appContainer}>
                    <div className={style.header}>
                        <HeaderContainer/>
                    </div>

                    <div className={style.contentBlock}>

                        <div className={style.navbar}>
                            <Navbar/>
                        </div>

                        <div className={style.content}>

                            <Route path='/profile/:userId?'
us
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


export default connect((state: StateType) => {
    return {initialized: state.app.initialized}
}, {initialize})(App);
