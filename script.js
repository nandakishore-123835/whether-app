function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "cdd4837a279f8661e2334d951ba45ba5";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log("Fetching URL:", url); // Debug log

  fetch(url)
    .then(response => {
      console.log("Status:", response.status);
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      console.log("API Response:", data);
      document.getElementById("cityName").innerText = `Weather in ${data.name}`;
      document.getElementById("temp").innerText = `Temperature: ${data.main.temp} °C`;
      document.getElementById("desc").innerText = `Condition: ${data.weather[0].description}`;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(error => {
      console.error("Error:", error.message);
      document.getElementById("cityName").innerText = "Error: " + error.message;
      document.getElementById("temp").innerText = "";
      document.getElementById("desc").innerText = "";
      document.getElementById("icon").src = "";
    });
}

