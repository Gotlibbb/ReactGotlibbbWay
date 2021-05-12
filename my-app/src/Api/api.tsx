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

    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<AuthType>(`auth/login`, {email, password, rememberMe} ).then(response => response.data)
    },

    logout() {
        return instance.delete<AuthType>(`auth/login` ).then(response => response.data)
    },


}
export const profileAPI = {

    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/` + userId).then(response => response.data)
    },
    getProfileStatus(userId: string) {
        return instance.get(`profile/status/` + userId).then(response => response.data)
    },
    updateProfileStatus(status: Object) {
        return instance.put(`profile/status` , status ).then(response => response.data)
    },
    putPhotoProfile(photoProfile : File) {
        const formData = new FormData()
        formData.append("image", photoProfile)

        return instance.put(`profile/photo`, formData, {headers: {
            'Content-Type' : 'multipart/form-data'
            }}  ).then(response => response)
    },
}
