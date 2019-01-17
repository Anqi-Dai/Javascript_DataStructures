// this will be the js file that does everyting

const boredAPI = new Bored();

const ui = new UI();

// add event listener to the button
document.getElementById("btn").addEventListener("click", function(e) {
  // Get the input from the user.
  const participantsSelected = document.getElementById("participants");
  const num =
    participantsSelected.options[participantsSelected.selectedIndex].text;
  const typeSelected = document.getElementById("type");
  const type = typeSelected.options[typeSelected.selectedIndex].text;
});

// Get activities.
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
