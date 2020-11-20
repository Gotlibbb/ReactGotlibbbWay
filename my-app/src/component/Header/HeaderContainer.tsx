import React from "react";
import {connect} from "react-redux";
import {AuthDataType, AuthType} from "../../Redux/store";
import {Header} from "./Header";
import {getAuth} from "../../Redux/authReducer";


type HeaderContainerPropsType = {
    auth: boolean
    login: string | null
    getAuth: () => void
}


class HeaderContainer extends React.Component <HeaderContainerPropsType, AuthDataType> {

    componentDidMount() {

        this.props.getAuth()

    }

    render() {

        return <>
            <Header auth={this.props.auth} login={this.props.login}/>
        </>

    }


}

function mapStateProps(state: AuthType) {

    return {
        auth: state.data.isAuth,
        login: state.data.login
    }

}


export default connect(mapStateProps, {getAuth})(HeaderContainer);









