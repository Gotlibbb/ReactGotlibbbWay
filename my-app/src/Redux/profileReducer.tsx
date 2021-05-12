import {DispatchActionType, PostDataElType, ProfilePageType, ProfileType,} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../Api/api";


let initialState: ProfilePageType = {
    newPost: "",
    postData: [
        {idPost: "1", post: "It`s my first post", likesCount: 5},
        {idPost: "2", post: "I don`t have coronavirus", likesCount: 1},
        {idPost: "3", post: "Hey, don`t go to the forbidden forest!!!", likesCount: 0},
    ],
    profile: null,
    profileStatus: "",


}

export const profileReducer = (state: ProfilePageType = initialState, action: DispatchActionType): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST" : {
            let newPost: PostDataElType = {
                idPost: "4",
                post: action.post,
                likesCount: 0,
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
            }


        }


        case "SET_USER_PROFILE" :

            return {
                ...state,
                profile: action.profile
            }


        case "SET_PROFILE_STATUS" :

            return {
                ...state,
                profileStatus: action.profileStatus
            }

        case "SET_PHOTO_PROFILE" :

            return {
                ...state, profile: state.profile ? {...state.profile , photos: action.photoProfile} : null
            }

        case "DELETE_POST" :

            return {
                ...state, postData: state.postData.filter(p => p.idPost !== action.postId)
            }


        default:
            return state;

    }
};

export const createAddPostAction = (post: string) => ({type: "ADD-POST", post} as const);

export const setUserProfile = (profile: ProfileType | null) => ({type: "SET_USER_PROFILE", profile} as const);

export const setProfileStatus = (profileStatus: string) => ({type: "SET_PROFILE_STATUS", profileStatus} as const);

export const setPhotoProfile = (photoProfile: any) => ({type: "SET_PHOTO_PROFILE", photoProfile} as const);

export const deletePost = (postId: string) => ({type: "DELETE_POST", postId} as const)


export const getProfile = (userId: string) => {

    return async (dispatch: Dispatch<DispatchActionType>) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data));
    }
}

export const getProfileStatus = (userId: string) => {

    return async (dispatch: Dispatch<DispatchActionType>) => {
        let data = await profileAPI.getProfileStatus(userId)
        dispatch(setProfileStatus(data));
    }
}

export const updateProfileStatusTC = (status: Object) => {

    return async (dispatch: Dispatch<DispatchActionType>) => {
        let data = await profileAPI.updateProfileStatus(status)
        if (data.data.resultCode === 0) {
            dispatch(setProfileStatus(data));
        }
    }
}
export const savePhotoProfile = (photoProfile: File) => {

    return async (dispatch: Dispatch<DispatchActionType>) => {
        let data = await profileAPI.putPhotoProfile(photoProfile)
        if (data.data.resultCode === 0) {
            console.log(data.data.data)
            dispatch(setPhotoProfile(data.data.data.photos));
        }
    }
}