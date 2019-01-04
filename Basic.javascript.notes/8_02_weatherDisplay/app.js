// so this will be the main js file that calls those classes and make API calls.

// init weather object
const weather = new Weather();

weather
  .getWeather()
  .then(data => console.log(data))
  .catch(err => console.log(err));
