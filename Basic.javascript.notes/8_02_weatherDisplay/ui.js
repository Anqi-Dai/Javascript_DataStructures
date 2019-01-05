// insert the information to the UI for display(This should be done in the app.js). The ui.js should be a util script which defines what customized functions there should have.

class UI {
  constructor() {}

  // we insert the info fetched from the API to the DOM
  displayWeather(city, temperature, description, wind, humidity) {
    document.getElementById("city").textContent = city;
    document.getElementById("temperature").textContent = `${temperature} °C`;
    document.getElementById("description").textContent = description;
    document.getElementById("wind").textContent = `Wind Speed: ${wind}`;
    document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
  }
}
