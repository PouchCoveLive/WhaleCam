import React from "react"
import './style.css';
import Contacts from "./Contacts"

var bgColors = {"Blue": "#629ED9"}
var facebookSource = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
function Header() {
    return (
        <div className="header">
            <a href="https://pouchcove.ca/">
                <img
                    src="https://pouchcove.ca/site/uploads/2020/09/cropped-Favicon-Clear-BG.png"
                    width="70"
                    height="70"
                />
            </a>
            <h1> Pouch Cove Harbour Live Stream </h1>
        </div>
    )
}

export default Header

/* Class name stuff relate to CSS JS files */
/* anchor tags will be helpful here */