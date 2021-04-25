import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ContainerPosts} from "./Posts/containerPosts";
import {ProfileType} from "../../Redux/store";

type ProfilePropsType = {
    profile: ProfileType | null
    profileStatus: string | null
    updateProfileStatus: (status: Object | null) => void

}


function Profile(props: ProfilePropsType) {

    return <div className={classes.content}>

        <div className={classes.profCont}>
            <ProfileInfo
                profile={props.profile}
                profileStatus={props.profileStatus}
                updateProfileStatus={props.updateProfileStatus}/>
            <ContainerPosts/>

        </div>

    </div>
}

export default React.memo(Profile)


