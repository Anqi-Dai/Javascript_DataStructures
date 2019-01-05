class Weather {
  constructor(city, country) {
    this.city = city;
    this.country = country;
    this.defaultCity = "Boston";
    this.defaultCountry = "usa";
    this.apiKey = "323024f45b5e6987a1c836162449835d";
  }

  // metric system: its base units are the metre, kilogram, celsius etc.
  async getWeather(city, country) {
    const responseWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.defaultCity},${
        this.defaultCountry
      }&APPID=${this.apiKey}&units=metric`
    );

    const responseData = await responseWeather.json();

    // select the data I wanna display here
    return {
      cityName: responseData.name,
      temperature: responseData.main.temp,
      description: responseData.weather[0].main,
      windSpeed: responseData.wind.speed,
      humidity: responseData.main.humidity
    };
  }
}
