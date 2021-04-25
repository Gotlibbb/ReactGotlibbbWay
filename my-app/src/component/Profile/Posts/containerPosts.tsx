import {createAddPostAction} from "../../../Redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {DispatchActionType, StateType} from "../../../Redux/store";
import React from "react";
import {compose} from "redux";


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


export const ContainerPosts = compose<Function>(connect(mapStateProps, mapDispatchProps),React.memo)(Posts);
