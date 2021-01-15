import React from "react";
import {createAddPostAction} from "../../../Redux/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {DispatchActionType, StateType} from "../../../Redux/store";
import {store} from "../../../Redux/reduxStore";


function mapStateProps(state: StateType) {
    return {
        postDataEl: state.profilePage.postData,
        newPost: state.profilePage.newPost
    }

}

function mapDispatchProps(dispatch: (action: DispatchActionType) => void) {

    return {


        addPost: (post: string) => {

            dispatch(createAddPostAction(post))
        }
    }

}


export const ContainerPosts = connect(mapStateProps, mapDispatchProps)(Posts);
