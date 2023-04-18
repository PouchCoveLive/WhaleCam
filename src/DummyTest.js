//compoonentDidMount() {
//        this.setState({loading: true})
//        fetch("https://swapi.co/api/people/1")
//            .then(response => response.json())
//            .then(data => {
//                this.setState({
//                    loading: false,
//                    character: data
//                })
//            })
//    }

function test()
{
    var sw_endpoint_url = "https://swapi.co/api/people/1"
    var endpoint_url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.7638&lon=-52.7652&exclude=minutely,hourly,alerts&units=metric&appid=52b7587313e450e4bd0a567680bdca84';
    var XMLHttpRequest = require('xhr2');
    var request = new XMLHttpRequest();
    var temp = 0;

    request.open("GET", endpoint_url);
    request.send();
    request.onload = () => {
        let data = request.response;
        console.log(data)
        const obj = JSON.parse(data)
        console.log(obj);

        let currentWeatherData = obj.main.temp;
        let minWeatherData = obj.main.temp_min;
        let maxWeatherData = obj.main.temp_max;
        let mainConditionWeatherData = obj.weather[0].main;
        let descriptionConditionWeatherData = obj.weather[0].description;

        console.log("current temp: " + currentWeatherData);
        console.log("min temp: " + minWeatherData);
        console.log("max temp: " + maxWeatherData);
        console.log("main condition: " + mainConditionWeatherData);
        console.log("descriptive condition: " + descriptionConditionWeatherData);

        return currentWeatherData
    }
}

let x = test();
console.log(x);

/*
import React, {Component} from "react"

class DummyWeather extends Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            temperature: {},
            main_condition: {},
            desc_condition: {}
        }
    }

    componentDidMount() {
        this.setState({loading: true})
        var endpoint_url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.7638&lon=-52.7652&exclude=minutely,hourly,alerts&units=metric&appid=52b7587313e450e4bd0a567680bdca84';
        var XMLHttpRequest = require('xhr2');
        var request = new XMLHttpRequest();
        var temp = 0;
        request.open("GET", endpoint_url);
        request.send();
        request.onload = () => {
            let data = request.response;
            console.log(data)
            const obj = JSON.parse(data)
            console.log(obj);

            let currentWeatherData = obj.main.temp;
            let minWeatherData = obj.main.temp_min;
            let maxWeatherData = obj.main.temp_max;
            let mainConditionWeatherData = obj.weather[0].main;
            let descriptionConditionWeatherData = obj.weather[0].description;

            console.log("current temp: " + currentWeatherData);
            console.log("min temp: " + minWeatherData);
            console.log("max temp: " + maxWeatherData);
            console.log("main condition: " + mainConditionWeatherData);
            console.log("descriptive condition: " + descriptionConditionWeatherData);

            this.setState({
                loading: false,
                temperature: currentWeatherData,
                desc_condition: descriptionConditionWeatherData,
                main_condition: mainConditionWeatherData
            })

        }
    }

    render() {
        const text = this.state.loading ? "loading..." : "BONG"
        return (
            <div>
                <p> hello </p>
            </div>
        )
    }
}

export default DummyWeather
*/