import {UserElType} from "../../store/stateType";
import React from "react";

type FollowTogglePropsType = {
    user: UserElType | undefined
    isFinished: number[]
    getUnFollow: (userId: number) => void
    getFollow: (userId: number) => void
}

const FollowToggle = (props: FollowTogglePropsType) => {
    let userId = props.user &&  props.user.id || 0

    return <div>
        {props.user && props.user.followed ?
            <button disabled={props.isFinished.some(id => id === userId)} onClick={() => {
                props.getUnFollow(userId)
            }}>Unfollow</button> :
            <button disabled={props.isFinished.some(id => id === userId)} onClick={() => {
                props.getFollow(userId)
            }}>Follow</button>
        }
    </div>
}

export default React.memo(FollowToggle)