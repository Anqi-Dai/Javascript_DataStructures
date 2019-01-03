// init a github instance
const github = new GitHub();

// init a UI class
const ui = new UI();

// event listener for the search box

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // show alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // add the profile to the UI (which will be done in the ui.js)
        ui.showProfile(data.profile);
        // add the repos to the UI
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear the profile
    ui.clearProfile();
  }
});
