import React from "react"
import {useState} from "react"
import "./main.css"
import bg from "./deps/bg.png"
import {Navbar, Bod, Footer, Popup, Login} from "./components"

export default function () {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <Navbar setButtonPopup={setButtonPopup} buttonPopup={buttonPopup} />
            <Bod />
            <Footer />
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}><Login /></Popup>
        </div>
    )
}
