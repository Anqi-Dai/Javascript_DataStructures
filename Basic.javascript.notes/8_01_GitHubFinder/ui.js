class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class='card card-body mb-3'>
        <div class='row'> 
          <div class='col-md-3'>
            <img class='img-fluid mb-2' src='${user.avatar_url}'>
            <a href='${
              user.html_url
            }' target='_blank' class ='btn btn-primary btn-block mb-4'>View Profile</a>
          </div>
          <div class='col-md-9'>
            <span class='badge badge-primary'>Public Repos: ${
              user.public_repos
            }</span>
            <span class='badge badge-secondary'>Public Gists: ${
              user.public_gists
            }</span>
            <span class='badge badge-success'>Followers: ${
              user.followers
            }</span>
            <span class='badge badge-info'>Following: ${user.following}</span>
            <br><br>
            <ul class='list-group'>
              <li class='list-group-item'>Company: ${user.company}</li>
              <li class='list-group-item'>Website/Blog: ${user.blog}</li>
              <li class='list-group-item'>Location: ${user.location}</li>
              <li class='list-group-item'>Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class='page-heading mb-3'>Lateset Repos</h3>
      <div id='repos'></div>
    `;
  }

  // clear alert if there is one already there so that we don't display too many alert red bars
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      //remove function works on a dom element
      currentAlert.remove();
    }
  }

  // show alert when the user is not found
  showAlert(message, className) {
    // clear any existing alert

    this.clearAlert();

    // creat a div and insert it like I did in the booklist project
    const div = document.createElement("div");

    div.className = className;

    div.appendChild(document.createTextNode(message));

    // get the parent element and the neighbor element so that you can insert
    const container = document.querySelector(".searchContainer");

    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    // make the alert disappear and show the most recent found user
    // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // clear profile when the search box is empty
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
