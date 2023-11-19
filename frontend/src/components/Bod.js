import React from "react"
import bg from "../deps/bg.png"
import "./bod.css"

export default function Bod () {
    return (
        <div className="Bod" style={{ backgroundImage:`url(${bg})` }}>
            <div id="citat"><p>"Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit organizatorilor să culeagă feedback direct de la audiența lor și să înțeleagă mai bine nevoile și dorințele acesteia."</p></div>
        </div>
    )
}
