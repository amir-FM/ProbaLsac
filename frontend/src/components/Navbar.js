import React from "react"
import logo from "../deps/logo.png"
import "./nav.css"
export default function Navbar () {
    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            <ul>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </div>
    )
}
