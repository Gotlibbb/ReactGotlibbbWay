import React from "react";
import {connect} from "react-redux";
import {AuthDataType, AuthType} from "../../Redux/store";
import axios from "axios";
import {Header} from "./Header";
import {setAuthUserData} from "../../Redux/authReducer";


type HeaderContainerPropsType = {
    setAuthUserData: (id: number | null, login: string | null, email: string | null) => void
    auth:boolean
    login: string | null
}


class HeaderContainer extends React.Component <HeaderContainerPropsType, AuthDataType> {

    componentDidMount() {

        axios.get<AuthType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }

            })

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


export default connect(mapStateProps, {setAuthUserData})(HeaderContainer);









