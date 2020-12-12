import React, {ComponentClass, FunctionComponent} from "react";
import {ProfileType, StateType} from "../../Redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../Redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {authUserHOC} from "../../HOC/AuthRedirect";
import { compose } from "redux";

type ProfilePropsType = RouteComponentProps<{ userId: string }> & {
    profile: ProfileType | null
    getProfile: (userId: string) => void
    isAuth: boolean
}


class ProfileContainer extends React.Component<ProfilePropsType, ProfileType> {


    componentDidMount() {
        this.props.getProfile(this.props.match.params.userId)
    }


    render() {




        return <Profile {...this.props} profile={this.props.profile}/>;

    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile,
})

export default compose<Function>( connect (mapStateToProps, {getProfile}) ,withRouter,authUserHOC)(ProfileContainer)

