import { useState } from "react"
import logo from "./logo.png"
import "./nav.css"
import {Popup, Login, Register} from "../index.js"
import { useCookies } from "react-cookie"

export default function Navbar () {
    const [cookies, setCookie, removeCookie] = useCookies(["user"])
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            {!cookies.user ?
                (<>
                    <button id="btn" onClick={() => setLogin(true)}>Login</button>
                    <button id="btn" onClick={() => setRegister(true)}>Register</button>
                 <Popup trigger={login} setTrigger={setLogin}><Login setCookie={setCookie} /></Popup>
                    <Popup trigger={register} setTrigger={setRegister}><Register /></Popup>
                </>) :
                (<>
                    <button id="btn">Create poll</button>
                 <button id="btn" onClick={() => removeCookie("user")}>Log out</button>
                </>)}
        </div>
    )
}
