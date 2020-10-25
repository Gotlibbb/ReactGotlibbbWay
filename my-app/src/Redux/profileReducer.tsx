import {v1} from "uuid";
import {DispatchActionType, PostDataElType, ProfilePageType,} from "./store";

let initialState : ProfilePageType ={
    newPost: "",

    postData: [
        {idPost: v1(), post: "It`s my first post", likesCount: 5},
        {idPost: v1(), post: "I don`t have coronavirus", likesCount: 1},
        {idPost: v1(), post: "Hey, don`t go to the forbidden forest!!!", likesCount: 0},
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: DispatchActionType):ProfilePageType => {
    switch (action.type) {
        case "ADD-POST" :
            {
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
                    newPost:""
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
