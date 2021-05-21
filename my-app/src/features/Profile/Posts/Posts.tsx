import React from "react";
import NewPost from "./newPosts/NewPost";
import {PostDataElType} from "../../../store/stateType";
import classes from "./Posts.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../-assets/FormControls/FormControl";
import { useDispatch } from "react-redux";
import {deletePostAC} from "../../../store/reducers/profileReducer";


type PostTypeProps = {
    postDataEl: Array<PostDataElType>
    newPost: string
    addPost: (value: any) => void
}


function Posts(props: PostTypeProps) {

    let dispatch = useDispatch()


    const deletePost = (id: string) => {
        dispatch(deletePostAC(id))
    }

    let postElement = props.postDataEl.map((p, index) =>
        <NewPost idPost={p.idPost} post={p.post} key={index} deletePost={deletePost}/>
    );

    const addPost = (value: any) => {
        props.addPost(value.postText)
        value.postText =""
    }

    return <div className={classes.posts}>
        <PostForm onSubmit={addPost}/>
        <div className={classes.postsBlock}>
            {postElement}
        </div>
    </div>
}



const PostForm = reduxForm({form: "addPost"})((props: InjectedFormProps) => {
    const onKeyPress = (key: string, event: any) => {
        return key === 'Enter' && event()
    }

    return <form onSubmit={props.handleSubmit} onKeyPress={(e) => onKeyPress(e.key, props.handleSubmit)}>
        <div className={classes.textareaBlock}>
            <Field className={classes.textarea} component={Textarea} placeholder={"Write a post..."} name={"postText"}
                   />
                <button className={classes.btnSend}>Add post</button>
        </div>
    </form>
})

export default React.memo(Posts)