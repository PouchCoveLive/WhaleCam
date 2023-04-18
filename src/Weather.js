import React, {Component} from "react"

var currentTemp;
var currentDesc;
var currentCond;
var weatherPhoto;
var capitalizedDesc;

class DummyWeather extends Component {
    constructor(){
        super()
        this.state = {
            loading: false,
            temperature: {},
            main_condition: {},
            desc_condition: {},
            photo: {}
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

            currentTemp = currentWeatherData.toFixed(1)
            currentDesc = descriptionConditionWeatherData
            capitalizedDesc = currentDesc.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            currentCond = mainConditionWeatherData


            this.setState({
                loading: false,
                temperature: currentWeatherData,
                desc_condition: descriptionConditionWeatherData,
                main_condition: mainConditionWeatherData
            })
        }
    }

    render() {
        const text = this.state.loading ? "loading..." : "Done"
        if (currentCond === "Thunderstorm")
        {
            weatherPhoto = require('./assets/weather/wWarning.png')
        }
        else if (currentCond === "Drizzle")
        {
            weatherPhoto = require('./assets/weather/wRainy.png')
        }
        else if (currentCond === "Rain")
        {
            weatherPhoto = require('./assets/weather/wRainy.png')
        }
        else if (currentCond === "Snow")
        {
            weatherPhoto = require('./assets/weather/wSnowy.png')
        }
        else if (currentCond === "Atmosphere")
        {
            weatherPhoto = require('./assets/weather/wWarning.png')
        }
        else if (currentCond === "Clear")
        {
            weatherPhoto = require('./assets/weather/wSunny.png')
        }
        else if (currentCond === "Clouds")
        {
            if (currentDesc === "few clouds: 11-25%")
            {
                weatherPhoto = require('./assets/weather/wCloudySun.png')
            }
            else if (currentDesc === "scattered clouds: 25-50%")
            {
                weatherPhoto = require('./assets/weather/wCloudySun.png')
            }
            else
            {
                weatherPhoto = require('./assets/weather/wCloudy.png')
            }
        }
        let currentT = new Date();
        let hour = currentT.getHours();

        if (hour < "7" || hour >= "19")
        {
            weatherPhoto = require('./assets/weather/wNight.png')
        }

        return (
            <div>
                <div class="weather" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                    <span>
                        <text>{currentTemp}&#8451;</text>
                    </span>
                    <img
                        src={weatherPhoto}
                        height="50"
                        width="50"
                        />
                </div>
                <div class="weather-desc" style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
                    <span>
                        <text>{capitalizedDesc}</text>
                    </span>
                </div>
            </div>
        )
    }
}

export default DummyWeather
