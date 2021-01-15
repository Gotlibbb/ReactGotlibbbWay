import React from "react";
import {connect} from "react-redux";
import {AuthDataType, AuthType} from "../../Redux/store";
import {Header} from "./Header";
import {getAuth, logout} from "../../Redux/authReducer";
import {getAuthSelector, getLoginSelector} from "./header-selector";


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


export default connect(mapStateProps, { logout})(HeaderContainer);









