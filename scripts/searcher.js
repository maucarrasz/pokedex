const inputSearch = document.getElementById("input-search"),
  divNotFound = document.getElementById("not-found");

inputSearch.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchPokemon();
  }
});
inputSearch.addEventListener("input", refreshAllPokemons);

function refreshAllPokemons() {
  let inputValue = inputSearch.value;
  if (inputValue.length === 0) {
    refreshHiddenClasses();
    for (let i in actualPokedexChilds) {
      actualPokedexChilds[i].classList.remove("hidden");
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
function onlyPokedexItemClass(element) {
  return (
    element.classList.length === 1 &&
    element.classList.contains("pokedex__item")
  );
}

function searchPokemon() {
  let inputValue = inputSearch.value.toLowerCase().trim();

  if (inputValue.length > 0) {
    refreshHiddenClasses();
    console.log("Pokemon Name Array: ", pokemonsNameArray);
    console.log("Pokemon Id Array: ", pokemonsIdArray);

    if (isNaN(inputValue) && inputValue.length > 2) {
      for (let index in actualPokedexChilds) {
        actualPokedexChilds[index].classList.add("hidden");
      }

      pokemonsNameArray.forEach(function (pokemon) {
        if (pokemon.includes(inputValue)) {
          let pokemonIndex = pokemonsNameArray.indexOf(pokemon);
          console.log(`El pokemon ${pokemonsNameArray[pokemonIndex]} existe!!`);

          actualPokedexChilds[pokemonIndex].classList.remove("hidden");
        }
      });
    } else if (pokemonsIdArray.includes(inputValue)) {
      console.log("Hola");
      let pokemonIdIndex = pokemonsIdArray.indexOf(inputValue);
      console.log(pokemonIdIndex);
      console.log(actualPokedexChilds);
      for (let pokemonIndex in actualPokedexChilds) {
        actualPokedexChilds[pokemonIndex].classList.add("hidden");

        if (pokemonIndex == pokemonIdIndex) {
          actualPokedexChilds[pokemonIndex].classList.remove("hidden");
        }
      }
    }

    console.log(actualPokedexChilds);
    console.log("Id Array: ", pokemonsIdArray);
    if (!actualPokedexChilds.some(onlyPokedexItemClass)) {
      pokemonNotFound();
    } else if (
      Number(inputValue) < Number(pokemonsIdArray[0]) ||
      Number(inputValue) >
        Number(pokemonsIdArray[actualPokedexChilds.length - 1])
    ) {
      pokemonNotFound();
    }
  }
}
