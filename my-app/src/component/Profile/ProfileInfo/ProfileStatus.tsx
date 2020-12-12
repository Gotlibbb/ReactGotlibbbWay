import React from "react";

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state =  {
        editMode: false
    }

    activatedEditMode = () => {
        this.setState({
            editMode : true
        })
    }

    deActivatedEditMode = () =>  {
        this.setState({
            editMode : false
        })
    }

    render() {
        return <div>
            {!this.state.editMode&&<div><span onDoubleClick={this.activatedEditMode}>{this.props.status}</span></div>}
            {this.state.editMode&&<div><input autoFocus={true} onBlur={this.deActivatedEditMode} value={this.props.status}/></div>}

        </div>
    }
}