import React from "react";
import './Details.css'

function Details(props) {
    return (props.trigger) ? (
        // if the trigger is true, return this block
        <div className="details">
            <div className="details-inner">
                <button className="main-button" onClick={() => props.setTrigger(false)}> Main Page</button>
                {props.children} {/* This displays the content of the detail page */}
            </div>
        </div>
    ) : ""; // otherwise return empty String
}

export default Details; 