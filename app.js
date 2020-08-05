//Init Storage 

const storage = new Storage()

const weatherLocation = storage.getLocationData()

//Init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.country)

//Init UI
const ui = new UI()

//Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather)


//Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    const city = document.getElementById('city').value
    const country = document.getElementById('country').value

    weather.changeLocation(city, country)

    //SetLocation in LS

    storage.setLocationData(city, country)

    //Get and display weather
    getWeather();

    //Close the modal

    $('#locModal').modal('hide');
})


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err))
}