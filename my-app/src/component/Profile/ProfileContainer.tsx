import React from "react";
import {ProfileType, StateType} from "../../Redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter, Redirect} from "react-router-dom";
import {profileAPI} from "../../Api/api";

type ProfilePropsType = RouteComponentProps<{ userId: string }> & {
    profile: ProfileType | null
    getProfile: (userId: string) => void
    isAuth : boolean
}


class ProfileContainer extends React.Component<ProfilePropsType, ProfileType> {


    componentDidMount() {
        debugger
        this.props.getProfile(this.props.match.params.userId)
        // @ts-ignore
        // profileAPI.putMyPhoto("11928").then(data=> data.photos.large("https://wired-7.org/b/src/1530566425534.jpg"))
    }


    render() {

        if(!this.props.isAuth) { return <Redirect to={"/login"}/> }
        return <Profile {...this.props} profile={this.props.profile}/>;

    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.data.isAuth
})


export default connect(mapStateToProps, {getProfile})(withRouter(ProfileContainer));



