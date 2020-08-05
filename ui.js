class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.desc = document.getElementById("w-desc");
        this.string = document.getElementById("w-string");
        this.icon = document.getElementById("w-icon");
        this.details = document.getElementById("w-details");
        this.humidity = document.getElementById("w-humidity");
        this.windDir = document.getElementById("w-wind-direction");
        this.windSpd = document.getElementById("w-wind-speed");
        this.pressure = document.getElementById("w-pressure");
    }

    paint(weather) {

        //put in country given....
        this.location.innerHTML = weather.name + ", " + weather.sys.country;

        function jsUcfirst(str) {
            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }

        this.desc.textContent = jsUcfirst(weather.weather[0].description)
        this.string.textContent = weather.main.temp + " ° F";


        this.icon.setAttribute(
            'src',
            `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
        )
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`

        this.windSpd.textContent = `Wind Speed: ${weather.wind.speed} mi/h`

        function getDirection(angle) {
            var directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
            return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
        }

        this.windDir.textContent = `Wind Direction: ${weather.wind.deg}° ${getDirection(weather.wind.deg)}`

        this.pressure.textContent = `Pressure: ${weather.main.pressure} hpa`
    }
}