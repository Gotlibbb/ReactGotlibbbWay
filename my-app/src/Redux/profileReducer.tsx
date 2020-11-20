import {v1} from "uuid";
import {DispatchActionType, PostDataElType, ProfilePageType, ProfileType,} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../Api/api";


let initialState: ProfilePageType = {
    newPost: "",

    postData: [
        {idPost: v1(), post: "It`s my first post", likesCount: 5},
        {idPost: v1(), post: "I don`t have coronavirus", likesCount: 1},
        {idPost: v1(), post: "Hey, don`t go to the forbidden forest!!!", likesCount: 0},
    ],
    profile: null

}

export const profileReducer = (state: ProfilePageType = initialState, action: DispatchActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST" : {
            let newPost: PostDataElType = {
                idPost: v1(),
                post: action.post,
                likesCount: 0,
            };

            // let copyState={...state};
            //     copyState.postData=[...state.postData];
            //     copyState.postData.push(newPost);
            //     copyState.newPost = "";
            //     return copyState;

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPost: ""
            }


        }


        case "CHANGE-NEW-TEXT" :
            // let copyState={...state};
            // copyState.newPost = action.newText;
            // return copyState;

            return {
                ...state,
                newPost: action.newText
            }


        case "SET_USER_PROFILE" :

            return {
                ...state,
                profile: action.profile
            }


        default:
            return state;

    }
};

export const createAddPostAction = (post: string) => {

    return {
        type: "ADD-POST",
        post: post,
    } as const
};
export const createChangeHandlerAction = (newText: string) => {


    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText,
    } as const
};
export const setUserProfile = (profile: ProfileType) => {


    return {
        type: "SET_USER_PROFILE",
        profile,
    } as const
};

export const getProfile = (userId: string = "11928") => {

    return (dispatch: Dispatch<DispatchActionType>) => {

        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}