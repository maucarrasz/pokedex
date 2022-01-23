const inputSearch = document.getElementById("input-search"),
  divNotFound = document.getElementById("not-found");

inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchPokemon();
  }
});
inputSearch.addEventListener("input", refreshAllPokemons);
