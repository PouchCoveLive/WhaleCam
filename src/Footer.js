import React from "react"
import ReactDOM from "react-dom"
import Contacts from "./Contacts"


function Footer () {
    return(
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                <br />
                <a href="https://pouchcove.ca/">
                    <img
                        src="https://pouchcove.ca/site/uploads/2020/09/cropped-Favicon-Clear-BG.png"
                        width="50"
                        height="50"/>
                </a>
                <br />
                <a href="https://www.youtube.com/@pouchcovecam9548"> 
                    <img
                        src="https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png"
                        width="100"
                        height="100"/>
                </a>
                <br />
                <a href="https://www.facebook.com/townofpouchcove">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                        width="50"
                        height="50"/>
                </a>
                <br />
                <a href="https://twitter.com/PouchCoveCam">
                    <img
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
                        width="75"
                        height="75"/>
                </a>
                <br />
            </div>
        </div>
    )
}

export default Footer
