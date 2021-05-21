import React from "react";
import classes from "./profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsOntainer} from "./Posts/PostsСontainer";
import {ProfileType, UserElType} from "../../store/stateType";

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
            {props.profile && !props.currentUserId &&<PostsOntainer/>}

        </div>

}

export default React.memo(Profile)


