import no_ava from '../../../images/no_ava.png'
import React from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../../assets/Preloader";
import {ProfileType} from "../../../Redux/store";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    profileStatus: string | null
    isOwner: boolean
    updateProfileStatus: (status: Object | null) => void
    savePhotoProfile: (photo: File) => void

}

function ProfileInfo(props: ProfileInfoPropsType) {

    if (!props.profile) {
        return <Preloader/>
    }
    let imgAny = props.profile.photos.large ? props.profile.photos.large : no_ava;

    const sendPhoto = (e: File ) => {
       props.savePhotoProfile(e)
    }

    return <div>


        <div className={classes.user}>
            <h2 className={classes.user__name}>{props.profile.fullName}</h2>
            <img className={classes.user__photo} src={imgAny} alt={"imgAny"}/>
            {props.isOwner && <input type="file" onChange={(e: any) => sendPhoto(e.target.files[0])}/>}
            <div className={classes.user__info}>
                <div>
                    <ProfileStatusWithHooks profileStatus={props.profileStatus}
                                            isOwner={props.isOwner}
                                            updateProfileStatus={props.updateProfileStatus}/>
                </div>
                <div><b>About me : </b>{props.profile.aboutMe || "information not found..."}</div>
                <div><b>Open for interviews: </b>{props.profile.lookingForAJob ? "Yes" : "No"}</div>
                <div><b>Github : </b>{props.profile.contacts.github || "information not found..."}</div>
                <div><b>Twitter : </b>{props.profile.contacts.twitter || "information not found..."}</div>
                <div><b>Instagram : </b>{props.profile.contacts.instagram || "information not found..."}</div>
                <div><b>Facebook : </b>{props.profile.contacts.facebook || "information not found..."}</div>
                <div><b>Vk : </b>{props.profile.contacts.vk || "information not found..."}</div>
            </div>
        </div>
    </div>
}

export default React.memo(ProfileInfo)