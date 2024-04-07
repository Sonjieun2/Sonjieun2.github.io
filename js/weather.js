const API_KEY = "ac5c591103e2272962e9546dd99ed5c6";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const city = document.getElementById("country");
    const weather = document.getElementById("sky");
    const temp = document.getElementById("temperature");

    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    temp.innerText = data.main.temp;
  });
}

function onGeoError() {
  alert("Can't find weather.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);