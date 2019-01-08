// this will actually will be the main js that uses all the classes

const ghibli = new Ghibli();

// ghibli
//   .getAllPeople()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// ghibli
//   .getAllVehicles()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

ghibli
  .getAllFilms()
  .then(data => console.log(data))
  .catch(err => console.log(err));
