import classes from "./NewPosts.module.css";
import React from "react";
import myava from "../../../images/my_ava.jpg";

type PostPropsType= {
    post: string
    idPost : string
    likesCount: number
}

export function NewPost(props: PostPropsType) {

    return <div >
        <div className={classes.newPost}>

        <img src={myava} alt=""/>

        <span className={classes.post}>{props.post}</span>

        <span className={classes.postLike}> like {props.likesCount}</span>
        </div>
    </div>
}