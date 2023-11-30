import React from "react"
import logo from "../deps/logo.png"
import "./nav.css"
export default function Navbar (props) {
    const {setButtonLogin, buttonLogin, setButtonReg, buttonReg} = props;
    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            <button id="btn" onClick={() => setButtonLogin(true)}>Login</button>
            <button id="btn" onClick={() => setButtonReg(true)}>Register</button>
        </div>
    )
}
