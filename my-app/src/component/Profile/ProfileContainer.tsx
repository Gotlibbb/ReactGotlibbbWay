import React from "react";
import {ProfileType, StateType} from "../../Redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {authUserHOC} from "../../HOC/AuthRedirect";
import {compose} from "redux";
import {getAuthIdSelector, getProfileSelector, getProfileStatusSelector} from "./profile-selector";

type ProfilePropsType = RouteComponentProps<{ userId: string }> & {
    profile: ProfileType | null
    getProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
    updateProfileStatus: (status: Object | null) => void
    isAuth: boolean
    profileStatus: string
    authId: string
}


class ProfileContainer extends React.Component<ProfilePropsType, ProfileType> {


    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authId
            if (!userId) this.props.history.push("/login")


        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)

    }


    render() {
        return <Profile {...this.props}/>;

    }
}

let mapStateToProps = (state: StateType) => ({
    profile: getProfileSelector(state),
    profileStatus: getProfileStatusSelector(state),
    authId: getAuthIdSelector(state),
})

export default compose<Function>(connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}), authUserHOC, withRouter)(ProfileContainer)

