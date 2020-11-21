import React from "react";
import classes from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContainerPosts} from "./Posts/containerPosts";
import {ProfileType} from "../../Redux/store";
import myimage from "../../images/photo_fone.jpg";

type ProfilePropsType = {
    profile: ProfileType | null

}

export function Profile(props: ProfilePropsType) {

    return <div className={classes.content}>
        <img className={classes.photoFone} src={myimage} alt={""}/>

        <div className={classes.profCont}>
        <ProfileInfo  profile={props.profile}/>
        <ContainerPosts/>
        </div>

    </div>
}



