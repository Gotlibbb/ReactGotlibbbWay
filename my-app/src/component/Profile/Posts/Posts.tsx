import React from "react";
import NewPost from "./NewPost";
import {PostDataElType} from "../../../Redux/store";
import classes from "./Posts.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../assets/FormControls/FormControl";


type PostTypeProps = {
    postDataEl: Array<PostDataElType>
    newPost: string
    addPost: (value: any) => void
}


function Posts(props: PostTypeProps) {

    let postElement = props.postDataEl.map((p, index) => <NewPost idPost={p.idPost} post={p.post} likesCount={p.likesCount} key={index}/>);

    const addPost = (value: any) => {
        props.addPost(value.postText)
        value.postText =""
    }

    return <div className={classes.posts}>
        <PostForm onSubmit={addPost}/>
        <div className={classes.title}>My posts:</div>
        <div className={classes.postsBlock}>
            {postElement}
        </div>
    </div>
}


const maxLength100 = maxLength(100)
const PostForm = reduxForm({form: "addPost"})((props: InjectedFormProps) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={classes.textareaBlock}>
            <Field className={classes.textarea} component={Textarea} placeholder={"Write a post..."} name={"postText"}
                   validate={[required, maxLength100]}/>
            <div className={classes.btnSendBlock}>
                <button className={classes.btnSend}>Add post</button>
            </div>
        </div>
    </form>
})

export default React.memo(Posts)