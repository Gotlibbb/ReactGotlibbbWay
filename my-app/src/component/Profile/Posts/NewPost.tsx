import classes from "./NewPosts.module.css";
import React from "react";
import myava from "../../../images/my_ava.jpg";

type PostPropsType = {
    post: string
    idPost: string
    deletePost: (id: string) => void
}

function NewPost(props: PostPropsType) {

    return <div>
        <div className={classes.newPost}>

            <img className={classes.userPhoto} src={myava} alt=""/>

            <span className={classes.post}>{props.post}</span>

            <button style={{marginLeft: "10px"}} onClick={()=>props.deletePost(props.idPost)}>x</button>

        </div>
    </div>
}

export default React.memo(NewPost)