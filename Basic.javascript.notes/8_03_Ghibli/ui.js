// This class will implement the functionality of inserting the json data to the created dom elements and then show them in UI

class UI {
  showEachMovie(movie) {
    const div = document.createElement("div");
    div.className = "card border-primary mb-3";

    // wanna make the background-color of the card like this: rgba(random number between 0 and 255, random number between 0 and 255, the RT-score, 0.2)
    const randomNumberR1 = Math.ceil(Math.random() * 255 + 1);
    const randomNumberG1 = Math.ceil(Math.random() * 255 + 1);
    const randomNumberR2 = Math.ceil(Math.random() * 255 + 1);
    const randomNumberG2 = Math.ceil(Math.random() * 255 + 1);
    div.style = `max-width: 16rem; background:
    linear-gradient(rgba(${randomNumberR1},${randomNumberG1},${Math.ceil(
      movie.rt_score * 2.55
    )},0.4), rgba(${randomNumberR2},${randomNumberG2},${Math.ceil(
      movie.rt_score * 2.55
    )},0.2))`;

    // trim the description if it's too long.
    const desc_len = 250;
    const desc_trim =
      movie.description.length > desc_len
        ? movie.description.substring(0, desc_len - 3) + "..."
        : movie.description;

    div.innerHTML = `
    <div class="card-header">${movie.release_date}</div>
      <div class="card-body">
        <h2 class="card-title"><em>${movie.title}</em></h4>
        <h5 class='card-title'>Rotten Tomato: ${movie.rt_score}</h2>
        <p class="card-text">${desc_trim}</p>
    </div>
    `;

    document.getElementById("flex-container").appendChild(div);
  }
}
