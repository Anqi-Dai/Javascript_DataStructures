// This class will implement the functionality of inserting the json data to the created dom elements and then show them in UI

class UI {
  showEachMovie(movie) {
    const div = document.createElement("div");
    div.className = "card border-primary mb-3";
    div.style = "max-width: 16rem;";

    // trim the description if it's too long.
    const desc_len = 300;
    const desc_trim =
      movie.description.length > desc_len
        ? movie.description.substring(0, desc_len - 3) + "..."
        : movie.description;

    div.innerHTML = `
    <div class="card-header">${movie.release_date}</div>
      <div class="card-body">
        <h2 class="card-title"><em>${movie.title}</em></h4>
        <h5 class='card-title'>Director: ${movie.director}</h2>
        <h5 class='card-title'>Rotten Tomato: ${movie.rt_score}</h2>
        <p class="card-text">${desc_trim}</p>
    </div>
    `;

    document.getElementById("flex-container").appendChild(div);
  }
}
