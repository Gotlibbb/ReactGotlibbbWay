import React, {ComponentClass, FunctionComponent} from "react";
import {ProfileType, StateType} from "../../Redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../Redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {authUserHOC} from "../../HOC/AuthRedirect";
import { compose } from "redux";

type ProfilePropsType = RouteComponentProps<{ userId: string }> & {
    profile: ProfileType | null
    getProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
    updateProfileStatus: (status: Object| null) => void
    isAuth: boolean
    profileStatus: string
    authoresId: string
}


class ProfileContainer extends React.Component<ProfilePropsType, ProfileType> {


    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId ) {
            userId = this.props.authoresId
            if (!userId ) this.props.history.push("/login")


        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)

    }


    render() {
        return <Profile {...this.props}/>;

    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus,
    authoresId : state.data.id
})

export default compose<Function>( connect (mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}), authUserHOC,withRouter)(ProfileContainer)

