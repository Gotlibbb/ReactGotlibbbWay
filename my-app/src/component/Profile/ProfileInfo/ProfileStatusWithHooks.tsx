import React, {ChangeEvent, useEffect, useState} from "react";
import classes from "./ProfileInfo.module.css"
import {useDispatch} from "react-redux";
import {setProfileStatus} from "../../../Redux/profileReducer";

type ProfileStatusPropsType = {
    profileStatus: string | null
    updateProfileStatus: (status: Object | null) => void
    isOwner: boolean
}
const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {


    let [editMode, setEditMode] = useState<boolean>(false)
    let [lsStatus, setLsStatus] = useState<string | null>("")
    let dispatch = useDispatch()

    useEffect(() => {
            setLsStatus(props.profileStatus)
        }, [props.profileStatus]
    )


    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setLsStatus(e.currentTarget.value)

    }
    const deActivatedEditMod = () => {
        dispatch(setProfileStatus(lsStatus|| ""))
        props.updateProfileStatus({status: lsStatus})
        setEditMode(false)
    }

    const reActivatedMod = () => {
        setLsStatus(props.profileStatus)
        setEditMode(false);

    }


    return <div className={classes.statusBlock}>

        {editMode && props.isOwner
            ?


            <div className={classes.statusBlock__changeStatus}>

                <input
                    className={classes.input}
                    onChange={changeStatus}
                    autoFocus={true}
                    placeholder={"Fix it"}
                    onKeyPress={(event) => {
                        if (event.key === "Enter") deActivatedEditMod()
                    }}
                    value={lsStatus === null || lsStatus === "" ? "" : lsStatus}
                />
                <button onClick={deActivatedEditMod}>↲</button>
                <button onClick={reActivatedMod}>Х</button>
            </div>

            :

            <div className={classes.statusBlock__status}> <span
                onDoubleClick={() => setEditMode(true)}>
                 {lsStatus === null || lsStatus === "" ?
                     <div><span><b>Status:</b> User has`t status.</span></div> : <b>Status: </b>}{lsStatus}</span>
            </div>
        }
    </div>
}

export default React.memo(ProfileStatusWithHooks)
