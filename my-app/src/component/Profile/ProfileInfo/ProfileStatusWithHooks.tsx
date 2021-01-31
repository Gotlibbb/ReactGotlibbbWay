import React, {ChangeEvent, useEffect, useState} from "react";
import classes from "./ProfileInfo.module.css"
import { useDispatch } from "react-redux";
import {updateProfileStatusTC} from "../../../Redux/profileReducer";

type ProfileStatusPropsType = {
    profileStatus: string | null
    updateProfileStatus: (status: Object | null) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {


    let [editMode, setEditMode] = useState<boolean>(false)
    let [lsStatus, setLsStatus] = useState<string | null>(props.profileStatus)

    useEffect(() => {
        setLsStatus(props.profileStatus)
        }, [props.profileStatus]
   )



    const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setLsStatus(e.currentTarget.value)

    }
    const deActivatedEditMod = () => {
        props.updateProfileStatus({status: lsStatus})
        setEditMode(false);
    }



    return <div>
        {editMode
            ?


            <div>
                <input className={classes.input} onChange={changeStatus} autoFocus={true}
                        onBlur={deActivatedEditMod} placeholder={"Fix it"}
                       onKeyPress={(event)=>{
                           if(event.key ==="Enter") deActivatedEditMod()
                       }}
                        value={lsStatus === null || lsStatus === "" ? "" : lsStatus}
            />
            </div>


            :
            <div><span
                onDoubleClick={() => setEditMode(true)}>
                    {lsStatus === null || lsStatus === "" ?
                        <div><span>The account has no status. No status at all.</span></div> : lsStatus}</span>
            </div>
        }
    </div>
}
