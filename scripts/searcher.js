const inputSearch = document.getElementById("input-search"),
  btnSearch = document.getElementById("btn-search"),
  divNotFound = document.getElementById("not-found");

inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchPokemon();
  }
});
inputSearch.addEventListener("input", refreshAllPokemons);

btnSearch.addEventListener("click", searchPokemon);

function refreshAllPokemons() {
  let inputValue = inputSearch.value;
  if (inputValue.length === 0) {
    refreshHiddenClasses();
    for (let i in pokedexChilds) {
      pokedexChilds[i].classList.remove("hidden");
    }
  }
}

function pokemonNotFound() {
  pokedex.classList.add("hidden");
  divNotFound.classList.remove("hidden");
}
function refreshHiddenClasses() {
  pokedex.classList.remove("hidden");
  divNotFound.classList.add("hidden");
}

function searchPokemon() {
  let inputValue = inputSearch.value;

  if (inputValue.length !== 0) {
    if (pokemonsNameArray.includes(inputValue)) {
      refreshHiddenClasses();
      let pokemonNameIndex = pokemonsNameArray.indexOf(inputValue);
      console.log(`El pokemon ${inputValue} existe!!`);

      for (let pokemonIndex in pokedexChilds) {
        pokedexChilds[pokemonIndex].classList.add("hidden");

        if (pokemonIndex == pokemonNameIndex) {
          pokedexChilds[pokemonIndex].classList.remove("hidden");
        }
      }
    } else if (pokemonsIdArray.includes(inputValue)) {
      refreshHiddenClasses();
      let pokemonIdIndex = pokemonsIdArray.indexOf(inputValue);

      for (let pokemonIndex in pokedexChilds) {
        pokedexChilds[pokemonIndex].classList.add("hidden");

        if (pokemonIndex == pokemonIdIndex) {
          pokedexChilds[pokemonIndex].classList.remove("hidden");
        }
      }
    } else {
      console.log(`El pokemon no existe :c`);
      pokemonNotFound();
    }
  }
}
