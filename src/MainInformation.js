import React from "react"
import EmailInput from "./EmailInput"

function MainInformation() {
    let separator =''
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth()+1;
    let year = newDate.getFullYear();

    //let monthStr = new Intl.DateTimeFormat('default', { month: 'long' }).format(month)
    
    if(month == "1")
    {
        month = "January"
    }

    if(month == "2")
    {
        month = "February"
    }

    if(month == "3")
    {
        month = "March"
    }

    if(month == "4")
    {
        month = "April"
    }

    if(month == "5")
    {
        month = "May"
    }

    if(month == "6")
    {
        month = "June"
    }

    if(month == "7")
    {
        month = "July"
    }

    if(month == "8")
    {
        month = "August"
    }

    if(month == "9")
    {
        month = "September"
    }

    if(month == "10")
    {
        month = "October"
    }

    if(month == "11")
    {
        month = "November"
    }

    if(month == "12")
    {
        month = "December"
    }

    let currentDate = `${month}${" "}${date}${", "}${year}`

    return (
        <div class="time-text" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <span>{currentDate}</span>
        </div>
    )
}

export default MainInformation