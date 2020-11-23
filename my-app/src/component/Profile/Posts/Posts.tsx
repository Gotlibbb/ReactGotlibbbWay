import React, {ChangeEvent} from "react";
import {NewPost} from "./NewPost";
import {PostDataElType} from "../../../Redux/store";
import classes from "./Posts.module.css"


type PostTypeProps = {
    postDataEl: Array<PostDataElType>
    newPost: string
    changeHandler: (text: string) => void
    addPost: () => void
}


export function Posts(props: PostTypeProps) {

    let postElement = props.postDataEl.map(p => <NewPost idPost={p.idPost} post={p.post} likesCount={p.likesCount}/>);

    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const x = event.currentTarget.value;
        props.changeHandler(x)
    }
    const addPost = () => {
        props.addPost()
    }

    return <div className={classes.posts}>
        <div className={classes.textareaBlock}><
            textarea className={classes.textarea} value={props.newPost} onChange={changeHandler}/>
        </div>
        <div className={classes.btnSendBlock}>
            <input
                className={classes.btnSend}
                type="submit"
                value="Add post"
                onClick={addPost}
            />
        </div>
        <div className={classes.title}>My posts:</div>
        <div className={classes.postsBlock}>
            {postElement}
        </div>
    </div>
}

