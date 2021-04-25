import {createAddPostAction, deletePost, setProfileStatus, setUserProfile} from "./profileReducer";
import {createAddMessageAction} from "./dialogsReducer";

export type DialogsDataElType = {
    dialogsId: string
    name: string
}

export type MessagesDataElType = {
    messageId: string
    message: string
}

export type PostDataElType = {
    idPost: string
    post: string
    likesCount: number
}

export type UserElType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: { small: null | undefined, large: null | undefined }
    status: null
    followed: boolean


}

export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string | null,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string | null,
        "github": string,
        "mainLink": string | null
    },
    "lookingForAJob": boolean,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}

export type AuthDataType = {
    "id": string | null,
    "login": string | null,
    "email": string | null
    "isAuth": boolean
}

export type AuthType = {

    data: AuthDataType
    "messages"?: [],
    "fieldsErrors"?: [],
    "resultCode"?: number
}


export type DialogsPageType = {
    dialogsData: Array<DialogsDataElType>
    messagesData: Array<MessagesDataElType>
    newMessage: string

}

export type ProfilePageType = {
    postData: Array<PostDataElType>
    newPost: string;
    profile: ProfileType | null
    profileStatus: string

}

export type UserPageType = {
    items: UserElType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    isFinished: number[]
}

export type StateType = {

    dialogPage: DialogsPageType
    profilePage: ProfilePageType
    usersPage: UserPageType
    data: AuthDataType
    app: { initialized: boolean }
}

export type DispatchActionType =
    ReturnType<typeof createAddPostAction> |
    ReturnType<typeof createAddMessageAction> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof deletePost> |
    ReturnType<typeof setProfileStatus>
// ReturnType<typeof createChangeMessageHandlerAction>


// export type StoreType = {
//
//     _state: StateType
//     renderTree: (_state: StateType) => void
//     dispatch: (action: DispatchActionType) => void
//     subscribe: (observer: any) => void
//     getState: () => StateType
// }


//
// export const store: StoreType = {
//     _state: {
//         dialogPage: {
//             newMessage: "",
//
//             dialogsData: [
//                 {dialogsId: v1(), name: "Miroliub"},
//                 {dialogsId: v1(), name: "Ratibor"},
//                 {dialogsId: v1(), name: "Inokentii`"},
//                 {dialogsId: v1(), name: "Iziaslav"},
//                 {dialogsId: v1(), name: "Iziaslav"},
//             ],
//
//             messagesData: [
//                 {messageId: v1(), message: "Hi"},
//                 {messageId: v1(), message: "My parents gave me a very difficult name"},
//                 {messageId: v1(), message: "True?)"},
//
//             ],
//         },
//         profilePage: {
//
//             newPost: "",
//
//             postData: [
//                 {idPost: v1(), post: "It`s my first post", likesCount: 5},
//                 {idPost: v1(), post: "I don`t have coronavirus", likesCount: 1},
//                 {idPost: v1(), post: "Hey, don`t go to the forbidden forest!!!", likesCount: 0},
//             ]
//         }
//     },
//
//     renderTree() {
//         console.log("State render")
//     },
//
//
//     subscribe(observer) {
//         this.renderTree = observer;
//     },
//
//     getState() {
//         return this._state
//     },
//
//
//
//     dispatch(action) {
//
//         this._state.profilePage= profileReducer(this._state.profilePage, action )
//         this._state.dialogPage= dialogsReducer(this._state.dialogPage, action )
//
//         this.renderTree(this._state)
//     }
// }
// //




