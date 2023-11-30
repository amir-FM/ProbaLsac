import React from "react"
import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="form">
                <form noValidate>
                    <span id="title">Login</span>

                    <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control inp_text"
                    id="email"
                    />

                    <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
