import React from "react";
import classes from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ContainerPosts} from "./Posts/containerPosts";

export function Profile() {

    return <div className={classes.content}>
        <ProfileInfo/>
        <ContainerPosts/>



    </div>
}



