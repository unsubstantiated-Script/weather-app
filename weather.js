class Weather {
    constructor(city, country) {
        this.apiKey = '70364f554536e98c01778e000b6c53ec'
        this.city = city
        this.country = country
    }

    //Fetch weather from API 

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=imperial&appid=${this.apiKey}`)

        const responseData = await response.json()

        return responseData
    }


    //Change Weather Location
    changeLocation(city, country) {
        this.city = city
        this.country = country
    }
}