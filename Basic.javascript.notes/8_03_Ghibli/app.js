// this will actually will be the main js that uses all the classes

const ghibli = new Ghibli();

const ui = new UI();

// ghibli
//   .getAllPeople()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// ghibli
//   .getAllVehicles()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// show movie and its related information in a card and all the cards will lie in a flexbox
ghibli
  .getAllFilms()
  .then(movies => {
    movies.forEach(movie => ui.showEachMovie(movie));
  })
  .catch(err => console.log(err));
