import React from "react"
import {useState} from "react"
import "./main.css"
import bg from "./deps/bg.png"
import {Navbar, Bod, Footer, Popup, Login, Register} from "./components"

export default function () {
    const [buttonLogin, setButtonLogin] = useState(false);
    const [buttonReg, setButtonReg] = useState(false);
    return (
        <div>
            <Navbar setButtonLogin={setButtonLogin} buttonLogin={buttonLogin} setButtonReg={setButtonReg} buttonReg={buttonReg}/>
            <Bod />
            <Footer />
            <Popup trigger={buttonLogin} setTrigger={setButtonLogin}><Login /></Popup>
            <Popup trigger={buttonReg} setTrigger={setButtonReg}><Register /></Popup>
        </div>
    )
}
