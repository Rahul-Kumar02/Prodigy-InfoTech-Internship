//seacrh your city
const cityInput = document.getElementById("cityInput");
// console.log(weatherInputSearch);



// city name
const city = document.getElementById("cityName");
// console.log(cityName);

// Weather Temp
const weatherTemp = document.getElementById("temperature");
// console.log(weatherTemp);

// weather name
const weatherName = document.getElementById("description");
// console.log(weatherName);

// weather icon
const weatherIcon = document.getElementById("weatherIcon");
// console.log(weatherIcon);

// weather humidity
const weatherHumidity = document.getElementById("humidity");
// console.log(weatherHumidity);

// weather wind speed
const weatherWindSpeed = document.getElementById("windSpeed");
// console.log(weatherWindSpeed);

// search button from form 
const searchButton = document.getElementById("searchButton");
// console.log(searchButton);



// function to fetch weather data
const getWeatherData = async (cityName) => {
  
    // api key
    const API_KEY = "853e67a9f845360c9a701efe695d7416";
    //  api url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    try {
        if (!cityName) {
            alert("Please enter a city name");
            return;
        }
        // fetching data from api

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        city.innerText = data.name;
        weatherTemp.innerText = Math.round(data.main.temp) + "°C";
        weatherName.innerText = data.weather[0].main;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        weatherHumidity.innerText = "Humidity "   + data.main.humidity + "% " ;
        weatherWindSpeed.innerText = " Wind Speed "   + data.wind.speed + " km/h";

       

       
    } catch (error) {
        
        console.log("Error fetching weather data:", error);
    }
    

  
};


searchButton.addEventListener("click",async (e) => {
  e.preventDefault();
  const city = cityInput.value;
  // console.log(city);
  getWeatherData(city);
    cityInput.value = "";
});