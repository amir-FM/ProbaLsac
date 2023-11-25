import React from "react"
import "./bod.css"
import Poll from "./Poll.js"
import testoasa from "../deps/testoasa.png"

export default function Bod () {
    return (
        <div className="Bod">
            <div id="citat">
            <p>"Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia."</p>
            <img src={testoasa} alt="testoasa" />
            </div>
            <div className="Polls">
                <Poll />
                <Poll />
                <Poll />
                <Poll />
            </div>
        </div>
    )
}
