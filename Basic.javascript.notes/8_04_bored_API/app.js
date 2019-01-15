// this will be the js file that does everyting

const boredAPI = new Bored();

const ui = new UI();

// get easy one
boredAPI
  .getActivity("easy", 1, "recreational")
  .then(activity => {
    ui.showActivity("easy", activity);
  })
  .catch(err => console.log(err));

// get normal one
boredAPI
  .getActivity("normal", 1, "recreational")
  .then(activity => {
    ui.showActivity("normal", activity);
  })
  .catch(err => console.log(err));

// get hard one
boredAPI
  .getActivity("hard", 1, "recreational")
  .then(activity => {
    ui.showActivity("hard", activity);
  })
  .catch(err => console.log(err));
