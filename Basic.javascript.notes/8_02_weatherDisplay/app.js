// so this will be the main js file that calls those classes and make API calls.

// init weather object
const weather = new Weather();

// init UI object
const ui = new UI();

// so put the ui thing in the .then
weather
  .getWeather()
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
