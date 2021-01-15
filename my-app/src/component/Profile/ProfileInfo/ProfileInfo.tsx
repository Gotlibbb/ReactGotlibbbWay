
import no_ava from '../../../images/no_ava.png'


import React from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../../assets/Preloader";
import {ProfileType} from "../../../Redux/store";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    profileStatus: string| null
    updateProfileStatus: (status: Object| null) => void
}

export function ProfileInfo(props: ProfileInfoPropsType) {

    if (!props.profile) {
        return <Preloader/>
    }
    let imgAny = props.profile.photos.large ? props.profile.photos.large : no_ava;

    return <div>


        <div className={classes.user}>
            <h2>{props.profile.fullName}</h2>
            <img className={classes.userAva} src={imgAny} alt={""}/>
            <div>
                <ProfileStatus profileStatus={props.profileStatus}  updateProfileStatus={props.updateProfileStatus}/>
            </div>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.contacts.github}</div>
        </div>
    </div>
}