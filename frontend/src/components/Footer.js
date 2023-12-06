import React from "react"
import "./footer.css"
import igLogo from "../deps/insta.png"
import fbLogo from "../deps/facebk.png"
import twLogo from "../deps/twitch.png"

export default function Footer () {
    return (
        <div className="footer">
            <ul>
                <li><a href="https://www.instagram.com/" target="_blank"><img src={igLogo} /></a></li>
                <li><a href="https://www.facebook.com/" target="_blank"><img src={fbLogo} /></a></li>
                <li><a href="https://www.twitch.tv/" target="_blank"><img src={twLogo} /></a></li>
            </ul>
        </div>
    )
}
