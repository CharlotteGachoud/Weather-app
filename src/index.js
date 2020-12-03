// Current Date and Time
let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[currentDate.getDay()];

let months = [
  "January",
  "Februar",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[currentDate.getMonth()];

let date = currentDate.getDate();

let hour = currentDate.getHours();

let minutes = currentDate.getMinutes();

let fullCurrentDate = document.querySelector("#date-input");
fullCurrentDate.innerHTML = `${day} ${month} ${date}, ${hour}:${minutes}`;

// Search City and Temp
function search(city){
  let apiKey = "027401657e14d2712c8487adaadbd48b";
  let unit = "metric";
  let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTempAndCity);
}

function getCity(event){
  event.preventDefault();
  let retriveCity = document.querySelector("#cities-input");
  let city = retriveCity.value;
  search(city);
}

let searchCity = document.querySelector("#search-form");
searchCity.addEventListener("submit", getCity);

search("Cork");

// Current Location button
function showTempAndCity(response){
  let city = response.data.name;
  let newCity = document.querySelector("#replace-city");
  newCity.innerHTML = `${city}`;
  let temp = Math.round(response.data.main.temp);
  let newTemp = document.querySelector("#temperature");
  newTemp.innerHTML = `${temp}`;
  let feelsLike = Math.round(response.data.main.feels_like);
  let realFeal = document.querySelector("#feel");
  realFeal.innerHTML = `${feelsLike}`;
  let humidity = response.data.main.humidity;
  let newHumidity = document.querySelector("#humidity-data");
  newHumidity.innerHTML = `${humidity}`;
  let wind = Math.round(response.data.wind.speed);
  let newWind = document.querySelector("#wind-data");
  newWind.innerHTML = `${wind}`;
  let pressure = response.data.main.pressure;
  let newPressure = document.querySelector("#pressure-data");
  newPressure.innerHTML = `${pressure}`;
}

function showPosition(position){
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "027401657e14d2712c8487adaadbd48b";
  let unit = "metric";
  let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTempAndCity);
}

function getCurrentLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentLocationButton = document.querySelector("#location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

// Celsius & Farenheit
function showCelsius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `19`;
}

function showFarenheit(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = ``;
}

let celsius = document.querySelector("#celsius-link");
let farenheit = document.querySelector("#farenheit-link");
celsius.addEventListener("click", showCelsius);
farenheit.addEventListener("click", showFarenheit);