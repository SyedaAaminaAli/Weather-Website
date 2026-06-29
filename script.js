// =====================================
// WEATHER APP USING OPEN WEATHER API
// File Name: class18.js
// =====================================

// API Key
const apiKey = "bd5e378503939ddaee76f12ad7a97608";

// Function to get weather
function getWeather() {

    // Get city name
    let city = document.getElementById("cityInput").value.trim();

    // Check if input is empty
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather
    fetch(url)

        .then(response => response.json())

        .then(data => {

            // City not found
            if (data.cod == "404") {

                document.getElementById("result").style.display = "block";

                document.getElementById("result").innerHTML =
                "❌ City not found!";

                return;
            }

            // Weather Data
            let temperature = data.main.temp;
            let humidity = data.main.humidity;
            let weatherDescription = data.weather[0].description;
            let country = data.sys.country;
            
           

            // Display Result
            document.getElementById("result").style.display = "block";

            document.getElementById("result").innerHTML = `
                <h3>🌍 Weather Details</h3>
                <p><b>City:</b> ${city}, ${country}</p>
                <p>🌡 Temperature: ${temperature} °C</p>
                <p>💧 Humidity: ${humidity}%</p>
                <p>☁ Condition: ${weatherDescription}</p>
            `;
        })

           
        .catch(error => {

            console.log(error);

            document.getElementById("result").style.display = "block";

            document.getElementById("result").innerHTML =
            "⚠ Error fetching data!";
        });

}