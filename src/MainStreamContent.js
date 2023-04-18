import React from "react"

function MainStreamContent() {

    return (
        <div class="stream" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <div>
                <iframe
                    align="middle"
                    width="840"
                    height="473"
                    src="https://www.youtube.com/embed/TLASOp8vgoc?autoplay=1"
	    		//TODO - Replace this link with the live stream one from the PouchCoveYoutubeChannel
                    title="Pouch Cove Harbour Stream">
                </iframe>
            </div>
        </div>
    )
}

export default MainStreamContent

//<iframe width="560" height="315" src="https://www.youtube.com/embed/TLASOp8vgoc" title="YouTube video player"
//frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


// For all javascipt normal function calls we want to use {} inbetween what is javascript and what is JSX
// {`${firstname}`} for example
// So we will want to inside a function call whatever JS stuff for the backend and then go from that. EzPz
