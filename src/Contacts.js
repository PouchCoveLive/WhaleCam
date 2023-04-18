import React from "react"
import ReactDOM from "react-dom"

function Contacts(props) { /* properties - should take a name, width, height, and src */
    return(
        <div className="contact">
            <img title={props.title} width={props.width} height={props.height} src={props.imgUrl} />
        </div>
    )
}

export default Contacts
