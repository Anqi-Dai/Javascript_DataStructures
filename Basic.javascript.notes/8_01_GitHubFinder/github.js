// the class to interact with GitHub API
class GitHub {
  // if have registered the app with GitHub, have to add the properties of client_id and client_secret here
  constructor() {
    // show 5 latest repos
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    // get user profile
    const responseProfile = await fetch(`https://api.github.com/users/${user}`);

    // get user repos
    const responseRepos = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}`
    );

    // get the json data
    const profile = await responseProfile.json();
    const repos = await responseRepos.json();

    return {
      profile: profile,
      repos: repos
    };
  }
}
