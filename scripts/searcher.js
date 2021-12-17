const inputSearch = document.getElementById("input-search"),
  btnSearch = document.getElementById("btn-search");

inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchPokemon();
  }
});

btnSearch.addEventListener("click", searchPokemon);

function searchPokemon() {
  let inputValue = inputSearch.value;

  if (pokemonsNameArray.includes(inputValue)) {
    let pokemonNameIndex = pokemonsNameArray.indexOf(inputValue);
    console.log(`El pokemon ${inputValue} existe!!`);

    for (let pokemonIndex in pokedexChilds) {
      pokedexChilds[pokemonIndex].classList.add("hidden");

      if (pokemonIndex == pokemonNameIndex) {
        pokedexChilds[pokemonIndex].classList.remove("hidden");
      }
    }
  } else if (pokemonsIdArray.includes(inputValue)) {
    let pokemonIdIndex = pokemonsIdArray.indexOf(inputValue);

    for (let pokemonIndex in pokedexChilds) {
      pokedexChilds[pokemonIndex].classList.add("hidden");

      if (pokemonIndex == pokemonIdIndex) {
        pokedexChilds[pokemonIndex].classList.remove("hidden");
      }
    }
  } else {
    console.log(`El pokemon no existe :c`);
  }
}
