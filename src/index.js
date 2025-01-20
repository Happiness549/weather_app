function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
let temperature =response.data.temperature.current;
let cityElement = document.querySelector("#weather-app-city");

cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
    
}

function searchCity(city){
let apiKey = "a3a1343146b16e73bot14905caf06faa";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");
let cityElemntForm = document.querySelector("#weather-app-city");

searchCity(searchInput.value);

}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("paris");