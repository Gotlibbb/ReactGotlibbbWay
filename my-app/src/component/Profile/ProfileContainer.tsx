import React from "react";
import {ProfileType, StateType} from "../../Redux/store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfile,
    getProfileStatus,
    savePhotoProfile,
    setUserProfile,
    updateProfileStatusTC
} from "../../Redux/profileReducer";
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
    setUserProfile: (profile: ProfileType| null) => void
    savePhotoProfile: (photo: File) => void

}


class ProfileContainer extends React.Component<ProfilePropsType, ProfileType> {

    refreshUser () {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authId
            if (!userId) this.props.history.push("/login")


        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.refreshUser()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<ProfileType>, snapshot?: any) {
        if (this.props.match.params.userId!== prevProps.match.params.userId ) {
            this.props.setUserProfile(null)
            this.refreshUser()
        }
    }

    componentWillUnmount() {
        this.props.setUserProfile(null)
    }


    render() {
        return <Profile {...this.props} isOwner={!this.props.match.params.userId} />;

    }
}

let mapStateToProps = (state: StateType) => ({

    profile: getProfileSelector(state),
    profileStatus: getProfileStatusSelector(state),
    authId: getAuthIdSelector(state),
})

export default compose<Function>(connect( mapStateToProps, {savePhotoProfile, setUserProfile ,getProfile, getProfileStatus, updateProfileStatus: updateProfileStatusTC}),
    React.memo, authUserHOC, withRouter)(ProfileContainer)

