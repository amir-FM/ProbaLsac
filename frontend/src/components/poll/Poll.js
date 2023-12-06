import React from "react"
import "./poll.css"

export default function Poll (){
    return (
        <div className="poll">
            <p id="titlu">Titlu</p>
            <p id="subtitlu">Make a choice:</p>
            <ul>
                <li>option 1</li>
                <li>option 2</li>
                <li>option 3</li>
                <li>option 4</li>
            </ul>
        </div>
    )
}
