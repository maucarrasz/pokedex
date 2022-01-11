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
function removesHidden(element) {
  return element.classList.length === 1;
}

function searchPokemon() {
  let inputValue = inputSearch.value.toLowerCase().trim();

  if (inputValue.length > 0) {
    refreshHiddenClasses();
    console.log("Pokemon Name Array: ", pokemonsNameArray);

    if (isNaN(inputValue) && inputValue.length > 2) {
      for (let index in pokedexChilds) {
        pokedexChilds[index].classList.add("hidden");
      }

      pokemonsNameArray.forEach(function (pokemon) {
        if (pokemon.includes(inputValue)) {
          let pokemonIndex = pokemonsNameArray.indexOf(pokemon);
          console.log(`El pokemon ${pokemonsNameArray[pokemonIndex]} existe!!`);

          pokedexChilds[pokemonIndex].classList.remove("hidden");
        }
      });
    } else if (
      pokemonsIdArray.includes(inputValue) &&
      Number(inputValue) <= pokedexChilds.length
    ) {
      let pokemonIdIndex = pokemonsIdArray.indexOf(inputValue);

      for (let pokemonIndex in pokedexChilds) {
        pokedexChilds[pokemonIndex].classList.add("hidden");

        if (pokemonIndex == pokemonIdIndex) {
          pokedexChilds[pokemonIndex].classList.remove("hidden");
        }
      }
    }
    if (
      !pokedexChilds.some(removesHidden) ||
      Number(inputValue) < 0 ||
      Number(inputValue) > pokedexChilds.length
    ) {
      pokemonNotFound();
    }
  }
}
