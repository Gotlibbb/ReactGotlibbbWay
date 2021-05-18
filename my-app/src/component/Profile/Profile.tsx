import React from "react";
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ContainerPosts} from "./Posts/containerPosts";
import {ProfileType, UserElType} from "../../Redux/store";

type ProfilePropsType = {
    profile: ProfileType | null
    profileStatus: string | null
    updateProfileStatus: (status: Object | null) => void
    savePhotoProfile: (photo: File) => void
    currentUserId: number

    usersPage: UserElType[]
    isFinished: number[]
    getUnFollow: (userId: number) => void
    getFollow: (userId: number) => void

}


function Profile(props: ProfilePropsType) {



    return <div className={classes.profCont}>

            <ProfileInfo {...props}/>
            {props.profile && !props.currentUserId &&<ContainerPosts/>}

        </div>

}

export default React.memo(Profile)


