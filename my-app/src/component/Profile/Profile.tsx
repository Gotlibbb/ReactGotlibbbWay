import React from "react";
import classes from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContainerPosts} from "./Posts/containerPosts";
import {ProfileType} from "../../Redux/store";
import myImage from "../../images/photo_fone.jpg";

type ProfilePropsType = {
    profile: ProfileType | null
    profileStatus: string | null
    updateProfileStatus: (status: Object | null) => void

}



    export function Profile(props: ProfilePropsType) {

        return <div className={classes.content}>
            <img className={classes.photoFone} src={myImage} alt={"myImage"}/>

            <div className={classes.profCont}>
                <ProfileInfo profile={props.profile} profileStatus={props.profileStatus}
                             updateProfileStatus={props.updateProfileStatus}/>
                <ContainerPosts/>

            </div>

        </div>
    }



