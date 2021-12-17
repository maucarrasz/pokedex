let pokemonTypes = document.querySelectorAll(".pokemon__type");
pokemonTypes = Array.from(pokemonTypes);

for (e of pokemonTypes) {
  if (e.children.length === 1) {
    e.style.justifyContent = "flex-start";
  } else if (e.children.length === 2) {
    e.style.justifyContent = "space-between";
  }
}
// console.log(pokemonTypes[0].children.length);
// console.log(pokemonTypes[0].childNodes);
