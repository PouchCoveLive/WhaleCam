import React from "react"
import Header from "./Header"
import MainStreamContent from "./MainStreamContent"
import MainInformation from "./MainInformation"
import MainProjectDesc from "./MainProjectDesc"
import Footer from "./Footer"
import EmailInput from "./EmailInput"
import Weather from "./Weather"
import InfoHeader from "./InfoHeader"

function App() {
    return (
        <div>
            <Header />
            <InfoHeader />
            <Weather />
            <MainInformation />
            <MainStreamContent />
            <MainProjectDesc />
            <Footer />
        </div>
    )
}

//class App extends React.Component {
//
//    //methods can go here method(){}
//
//    render(){
//        //const style = this.method() {this.props.whatever}
//        return(
//            <div>
//                <Header /> //i could put something in here for props. thats how to pass down to another fx
//                <MainStreamContent />
//                <EmailInput />
//                <Footer />
//            </div>
//        )
//    }
//
//}

export default App
