const API_KEY = "5d2ee91830303688797184d27d21a07d";

const buildHTML = () => {
  document.querySelector("#weather-app").innerHTML = `
        <h2>Weather App</h2>
        <input type="text" id="city" placeholder="Enter city name" />
        <button id="getWeather">Get Weather</button>
        <div id="weather-info"></div>
    `;
};

const fetchWeather = async () => {
  const city = document.querySelector("#city").value;
  if (!city) return alert("Please enter a city name.");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      alert("City not found! Please enter a valid city.");
      return;
    }

    const windStrength = getWindStrength(data.wind.speed);

    const weatherHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Wind: ${windStrength}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
    `;

    document.querySelector("#weather-info").innerHTML = weatherHTML;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data.");
  }
};

const getWindStrength = (speed) => {
  if (speed < 1) return "No wind";
  if (speed < 5) return "Weak wind";
  if (speed < 10) return "Medium wind";
  return "Strong wind";
};

// Initialize UI
buildHTML();

// Add event listener
document.querySelector("#getWeather").addEventListener("click", fetchWeather);

