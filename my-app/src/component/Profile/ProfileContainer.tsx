import React from "react";
import {Users} from "../Users/Users";
import axios from "axios";
import {ProfileType, StateType} from "../../Redux/store";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profileReducer";
import { withRouter, RouteComponentProps } from "react-router-dom";

type ProfilePropsType = RouteComponentProps<{userId:string}> & {
    setUserProfile : (profile : ProfileType)=>void
    profile: ProfileType|null
}



class ProfileContainer extends React.Component<ProfilePropsType, ProfileType> {



    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {userId="2"}
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId).then(response => {
            this.props.setUserProfile(response.data);
        })
    }


    render() {

        return <Profile {...this.props} profile={this.props.profile} />;
    }
}

let mapStateToProps = (state: StateType) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));



