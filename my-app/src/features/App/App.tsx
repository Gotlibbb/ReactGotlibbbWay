import React from 'react';
import style from './app.module.css';
import {Navbar} from "../Navbar/Navbar";
import {connect} from 'react-redux';
import {initialize} from "../../store/reducers/appReducer";
import {Preloader} from "../-assets/Preloader";
import {StateType} from "../../store/stateType";
import {compose} from "redux";
import RoutesToContent from "../-assets/RoutesToContent";

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
