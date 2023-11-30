import React from "react"
import "./footer.css"
import igLogo from "../deps/insta.png"
import fbLogo from "../deps/facebk.png"
import twLogo from "../deps/twitch.png"

export default function Footer () {
    return (
        <div className="footer">
            <ul>
                <li><img src={igLogo} /></li>
                <li><img src={fbLogo} /></li>
                <li><img src={twLogo} /></li>
            </ul>
        </div>
    )
}
