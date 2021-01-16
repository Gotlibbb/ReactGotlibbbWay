import classes from "./NewPosts.module.css";
import React from "react";
import myava from "../../../images/my_ava.jpg";
import like from "./../../../images/like-10466.png"

type PostPropsType = {
    post: string
    idPost: string
    likesCount: number
}

export function NewPost(props: PostPropsType) {

    return <div>
        <div className={classes.newPost}>

            <img className={classes.userPhoto} src={myava} alt=""/>

            <span className={classes.post}>{props.post}</span>

            <span className={classes.postLike}> {props.likesCount} <img src={like} alt="123"/> </span>
        </div>
    </div>
}