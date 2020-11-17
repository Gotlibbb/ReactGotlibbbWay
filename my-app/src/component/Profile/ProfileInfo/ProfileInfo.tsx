import myimage from "../../../images/unnamed.jpg";
import myava from "../../../images/hagrid_1.jpg";
import no_ava from '../../../images/no_ava.jpg'


import React from "react";
import  classes from "./ProfileInfo.module.css"
import {Preloader} from "../../../assets/Preloader";
import {ProfilePageType, ProfileType} from "../../../Redux/store";

type ProfileInfoPropsType={
    profile: ProfileType|null
}

export function ProfileInfo(props:ProfileInfoPropsType) {

    if (!props.profile) {return <Preloader/>}
    return <div >
        <img className={classes.photoFone} src={myimage}/>

        <div className={classes.user}>
            <h2>{props.profile.fullName}</h2>
            <img className={classes.userAva} src={props.profile.photos.large ? props.profile.photos.large : no_ava }/>
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.contacts.github}</div>
        </div>
    </div>
}