class Weather {
  // only supports the weather in USA right now lol.
  constructor(city) {
    this.city = city;
    this.defaultCity = "Boston";
    this.apiKey = "323024f45b5e6987a1c836162449835d";
  }

  // metric system: its base units are the metre, kilogram, celsius etc.
  async getWeather(city) {
    if (city === "") {
      this.city = this.defaultCity;
    } else {
      this.city = city;
    }
    const responseWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${
        this.city
      },usa&APPID=${this.apiKey}&units=metric`
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
