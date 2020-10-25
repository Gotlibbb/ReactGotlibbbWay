import myimage from "../../../images/unnamed.jpg";
import myava from "../../../images/hagrid_1.jpg";

import React from "react";
import  classes from "./ProfileInfo.module.css"

export function ProfileInfo() {
    return <div >
        <img className={classes.photoFone} src={myimage}/>

        <div className={classes.user}>
            <h2>Rubeus Hagrid</h2>
            <img className={classes.userAva} src={myava}/>
        </div>
    </div>
}