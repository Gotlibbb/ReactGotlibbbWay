import React from "react";
import {connect} from "react-redux";
import {AuthDataType, AuthType} from "../../store/stateType";
import Header from "./Header";
import {logout} from "../../store/reducers/authReducer";
import {getAuthSelector, getLoginSelector} from "./header-selector";
import { compose } from "redux";


type HeaderContainerPropsType = {
    auth: boolean
    login: string | null
    logout: () => void
}


class HeaderContainer extends React.Component <HeaderContainerPropsType, AuthDataType> {

    componentDidMount() {


    }

    render() {

        return <>
            <Header auth={this.props.auth} login={this.props.login} logout={this.props.logout}/>
        </>

    }


}

function mapStateProps(state: AuthType) {

    return {
        auth: getAuthSelector(state),
        login: getLoginSelector(state),

    }

}


export default compose<Function>(connect(mapStateProps, {logout}), React.memo)(HeaderContainer);









