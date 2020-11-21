import React from "react";
import {ProfileType, StateType} from "../../Redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter, Redirect} from "react-router-dom";

type ProfilePropsType = RouteComponentProps<{ userId: string }> & {
    profile: ProfileType | null
    getProfile: (userId: string) => void
    isAuth : boolean
}


class ProfileContainer extends React.Component<ProfilePropsType, ProfileType> {


    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }


    render() {
        debugger
        if(!this.props.isAuth) { return <Redirect to={"/login"}/> }
        return <Profile {...this.props} profile={this.props.profile}/>;

    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.data.isAuth
})


export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));



