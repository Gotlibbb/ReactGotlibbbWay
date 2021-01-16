import React, {ChangeEvent} from "react";
import classes from "./ProfileInfo.module.css"

type ProfileStatusPropsType = {
    profileStatus: string | null
    updateProfileStatus: (status: Object | null) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    //local state
    state = {
        editMode: false,
        lsStatus: this.props.profileStatus
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        // this.props.updateProfileStatus({status: this.state.lsStatus})
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                lsStatus: this.props.profileStatus
            })
        }

    }

    activatedEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivatedEditMode = () => {
        this.setState({
            editMode: false

        })
        this.props.updateProfileStatus({status: this.state.lsStatus})
    }

    changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            lsStatus: e.currentTarget.value
        })

    }

    render() {
        return <div>
            {this.state.editMode
                ?


                <div><input className={classes.input} onChange={this.changeStatus} autoFocus={true}
                            onBlur={this.deActivatedEditMode} placeholder={"Fix it"}
                            value={this.state.lsStatus === null || this.state.lsStatus === "" ? "" : this.state.lsStatus}/>
                </div>


                :
                <div><span
                    onDoubleClick={this.activatedEditMode}>{this.state.lsStatus === null || this.state.lsStatus === "" ?
                    <div><span>The account has no status. No status at all.</span></div> : this.state.lsStatus}</span>
                </div>
            }
        </div>
    }
}
