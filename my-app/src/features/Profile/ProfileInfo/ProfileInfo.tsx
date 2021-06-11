import no_ava from '../../-images/no_ava.png'
import React from "react";
import classes from "./profileInfo.module.css"
import {Preloader} from "../../-assets/Preloader";
import {ProfileType, UserElType} from "../../../store/stateType";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import FollowToggle from "../../-assets/FollowToggle";
import {useHistory} from 'react-router-dom';

type ProfileInfoPropsType = {
    profile: ProfileType | null
    profileStatus: string | null
    currentUserId: number
    updateProfileStatus: (status: Object | null) => void
    updateProfileInfo: (info: ProfileType) => void
    savePhotoProfile: (photo: File) => void
    showModal?: (show: boolean) => void

    usersPage: UserElType[]
    isFinished: number[]
    getUnFollow: (userId: number) => void
    getFollow: (userId: number) => void

}


function ProfileInfo(props: ProfileInfoPropsType) {

    const history = useHistory()

    if (!props.profile) {
        return <Preloader/>
    }
    let imgAny = props.profile.photos && (props.profile.photos.large || no_ava);

    const sendPhoto = (e: File) => {
        props.savePhotoProfile(e)
    }

    const currentUser = props.usersPage.find(user => user.id === props.currentUserId);

    const chekInfoContacts = (val: string) => {
        if (props.profile && props.profile.contacts && (props.profile.contacts[val].length > 0)) {
            return <a href={props.profile.contacts[val]}>{props.profile.contacts[val]}</a>
        } else {
            return "information not found..."
        }

    }


    return <div>


        <div className={classes.user}>
            <div className={classes.user__photoBlock}>
                <img className={classes.user__photoBlock__photo} src={imgAny} alt={"imgAny"}/>
                {!props.currentUserId && <label className={classes.user__photoBlock__changePhoto}>
                    ➕<input type="file" className={classes.inputAddPhoto}
                            onChange={(e: any) => sendPhoto(e.target.files[0])}/></label>
                ||
                <>
                    <FollowToggle getUnFollow={props.getUnFollow} getFollow={props.getFollow} user={currentUser}
                                  isFinished={props.isFinished}/>
                    <button onClick={history.goBack}>↢ go back</button>
                </>
                }
            </div>
            <div>
                <div className={classes.user__nameBlock}>
                    <span className={classes.user__nameBlock__name}>{props.profile.fullName}</span>
                    <ProfileStatusWithHooks profileStatus={props.profileStatus}
                                            currentUserId={props.currentUserId}
                                            updateProfileStatus={props.updateProfileStatus}/>
                </div>


                <div className={classes.user__info}>
                    <div><b>Open for interviews: </b>{props.profile.lookingForAJob ? "Yes" : "No"}</div>
                    <div><b>Github : </b>{chekInfoContacts("github")}</div>
                    <div><b>Twitter : </b>{chekInfoContacts("twitter")}</div>
                    <div><b>Instagram : </b>{chekInfoContacts("instagram")}</div>
                    <div><b>Facebook : </b>{chekInfoContacts("facebook")}</div>
                    <div><b>Vk : </b>{chekInfoContacts("vk")}</div>
                    <div><b>About me : </b>{props.profile.aboutMe || "information not found..."}</div>
                    <div><b>Job description
                        : </b>{props.profile.lookingForAJobDescription || "information not found..."}</div>

                </div>
                {!props.currentUserId &&
                <button onClick={() => props.showModal && props.showModal(true)}>Change info</button>}
            </div>
        </div>
    </div>
}

export default React.memo(ProfileInfo)