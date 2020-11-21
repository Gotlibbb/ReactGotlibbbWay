import axios from "axios";
import {AuthType, ProfileType, UserPageType} from "../Redux/store";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "7356db4d-2dd5-4272-8da5-db03322fb687"}
});


export const usersAPI = {

    getUsers(currentPage: number, pageSize: number) {

        return instance.get<UserPageType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }

}

export const authAPI = {

    unFollow(id: number) {
        return instance.delete<AuthType>(`follow/${id}`).then(response => response.data)
    },

    follow(id: number) {
        return instance.post<AuthType>(`follow/${id}`).then(response => response.data)
    },
    auth() {

        return instance.get<AuthType>(`auth/me`).then(response => response.data)
    },


}
export const profileAPI = {

    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/` + userId).then(response => response.data)
    },
    // putMyPhoto(userId: string){
    //     return instance.put<ProfileType>(`profile/` + userId).then(response => response.data  )
    // }

}
