import React from 'react';
import style from './App.module.css';
import {Navbar} from "./component/Navbar/Navbar";
import HeaderContainer from "./component/Header/HeaderContainer";
import {connect} from 'react-redux';
import {initialize} from "./Redux/appReducer";
import {Preloader} from "./assets/Preloader";
import {StateType} from "./Redux/store";
import {compose} from "redux";
import RoutesToContent from "./assets/RoutesToContent";

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

        return <div className={style.appContainer}>


            <div className={style.circle1}> </div>
            <div className={style.circle2}> </div>
            <div className={style.appBlock}>

                {/*<div className={style.header}>*/}
                {/*    <HeaderContainer/>*/}
                {/*</div>*/}

                    <div className={style.navbar}>
                        <Navbar/>
                    </div>
                    <div className={style.content}>
                        <RoutesToContent/>
                    </div>

            </div>

        </div>


    }
}


export default compose<Function>(connect((state: StateType) => {
    return {initialized: state.app.initialized}
}, {initialize}), React.memo)(App);
