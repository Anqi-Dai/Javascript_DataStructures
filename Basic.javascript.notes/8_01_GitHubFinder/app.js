// init a github instance
const github = new GitHub();

// event listener for the search box

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // show alert
      } else {
        // add the profile to the UI (which will be done in the ui.js)
        console.log(data);
      }
    });
  } else {
    // clear the profile
  }
});
