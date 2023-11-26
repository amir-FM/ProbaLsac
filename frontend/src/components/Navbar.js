import React from "react"
import logo from "../deps/logo.png"
import "./nav.css"
export default function Navbar (props) {
    const {setButtonPopup, buttonPopup} = props;
    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            <ul>
                <li><button onClick={() => setButtonPopup(true)}>Login</button></li>
                <li><button>Register</button></li>
            </ul>
        </div>
    )
}
