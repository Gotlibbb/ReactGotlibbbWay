import React, {useState} from "react";
import classes from "./profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsContainer} from "./Posts/PostsСontainer";
import {ProfileType, UserElType} from "../../store/stateType";
import { ModalWindowInfo } from "./ProfileInfo/ModalWindowInfo";

type ProfilePropsType = {
    profile: ProfileType | null
    profileStatus: string | null
    updateProfileStatus: (status: Object | null) => void
    updateProfileInfo: (info: ProfileType | null) => void
    savePhotoProfile: (photo: File) => void
    currentUserId: number

    usersPage: UserElType[]
    isFinished: number[]
    getUnFollow: (userId: number) => void
    getFollow: (userId: number) => void

}



function Profile(props: ProfilePropsType) {

    let [showModal, setShowModal] = useState(false)




    return <div className={classes.profCont}>

            <ProfileInfo {...props} showModal={setShowModal}/>
            {props.profile && !props.currentUserId &&<PostsContainer/>}
            {!props.currentUserId && showModal && <ModalWindowInfo updateProfileInfo={props.updateProfileInfo} profileInfo={props.profile} showModal={setShowModal}/>}

        </div>

}

export default React.memo(Profile)


