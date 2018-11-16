document.getElementById("output").style.visibility = "hidden";

document.getElementById("pound").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  const lbs = e.target.value;

  document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
  document.getElementById("kgOutput").innerHTML = lbs / 2.205;
  document.getElementById("ozOutput").innerHTML = lbs * 16;
});
