import { useState } from "react"
import logo from "../deps/logo.png"
import "./nav.css"
import {Popup, Login, Register} from "./index.js"

export default function Navbar () {
    const [logged, setLogged] = useState(true);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    //const [login, setLogin] = useState(false);
    //const [login, setLogin] = useState(false);
    return (
        <div className="nav">
            <img src={logo} alt="logo" />
            {logged ?
                (<>
                    <button id="btn" onClick={() => setLogin(true)}>Login</button>
                    <button id="btn" onClick={() => setRegister(true)}>Register</button>
                    <Popup trigger={login} setTrigger={setLogin}><Login /></Popup>
                    <Popup trigger={register} setTrigger={setRegister}><Register /></Popup>
                </>) :
                (<>
                    <button id="btn" onClick={() => setLogin(true)}>Create poll</button>
                    <button id="btn" onClick={() => setLogged(false)}>Log out</button>
                </>)}
        </div>
    )
}
