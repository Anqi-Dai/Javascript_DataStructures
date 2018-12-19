// the class to interact with GitHub API
class GitHub {
  // if have registered the app with GitHub, have to add the properties of client_id and client_secret here

  async getUser(user) {
    const responseProfile = await fetch(`https://api.github.com/users/${user}`);
    const profile = await responseProfile.json();
    return {
      profile: profile
    };
  }
}
