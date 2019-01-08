//  this class will fetch information from the Ghibli API
class Ghibli {
  // Get all the films!
  async getAllFilms() {
    const responseData = await fetch("https://ghibliapi.herokuapp.com/films");

    const response = await responseData.json();

    return response;
  }

  // Get all the people!
  async getAllPeople() {
    const responseData = await fetch("https://ghibliapi.herokuapp.com/people");

    const response = await responseData.json();

    return response;
  }

  // Get all the vehicles!
  async getAllVehicles() {
    const responseData = await fetch(
      "https://ghibliapi.herokuapp.com/vehicles"
    );

    const response = await responseData.json();

    return response;
  }
}
