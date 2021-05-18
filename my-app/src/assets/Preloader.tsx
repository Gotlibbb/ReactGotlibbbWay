import React from "react";
import preloader from "../images/preloader.gif";


export const Preloader =()=>{
    return(
        <div style={{ position: "absolute", top: "40%", left: "35%"}}><img src={preloader} alt="preloader" style={{width: "500px"}}/></div>
    )
}