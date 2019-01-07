// so this will be the main js file that calls those classes and make API calls.

// init weather object
const weather = new Weather();

// init UI object
const ui = new UI();

// let the dom load the boston weather by default(once the page loads)
document.addEventListener("DOMContentLoaded", e => {
  weather
    .getWeather("Boston")
    .then(data => {
      ui.displayWeather(
        data.cityName,
        data.temperature,
        data.description,
        data.windSpeed,
        data.humidity
      );
    })
    .catch(err => console.log(err));
});

// event listner for clicking the submit button
document.getElementById("searchBtn").addEventListener("click", e => {
  const searchCity = document.getElementById("searchCity").value;

  // so put the ui thing in the .then
  weather
    .getWeather(searchCity)
    .then(data => {
      ui.displayWeather(
        data.cityName,
        data.temperature,
        data.description,
        data.windSpeed,
        data.humidity
      );
    })
    .catch(err => console.log(err));

  e.preventDefault();
});
