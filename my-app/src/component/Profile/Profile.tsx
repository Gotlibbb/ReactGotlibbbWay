import React from "react";
import classes from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContainerPosts} from "./Posts/containerPosts";
import {ProfilePageType, ProfileType} from "../../Redux/store";

type ProfilePropsType={
    profile: ProfileType|null
}

export function Profile(props: ProfilePropsType ) {

    return <div className={classes.content}>


        <ProfileInfo profile={props.profile}   />
        <ContainerPosts/>



    </div>
}



