import React from "react"
import "./popup.css"
import xButton from "./assets/xButton.png"

export default function Popup (props){
    return (props.trigger) ? (
        <div className="popup">
           <div className="popup-inner">
               <button className="close-btn" onClick={() => props.setTrigger(false)}><img src={xButton} alt="X"/></button>
               {props.children}
           </div>
        </div>
    ) : "";

}
