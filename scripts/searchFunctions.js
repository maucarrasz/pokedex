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

    if (isNaN(inputValue) && inputValue.length > 2) {
      for (let index in actualPokedexChilds) {
        actualPokedexChilds[index].classList.add("hidden");
      }

      pokemonsNameArray.forEach((pokemon, index) => {
        if (pokemon.includes(inputValue)) {
          console.log(`El pokemon ${pokemonsNameArray[index]} existe!!`);

          actualPokedexChilds[index].classList.remove("hidden");
        }
      });
    } else if (pokemonsIdArray.includes(inputValue)) {
      let pokemonIdIndex = pokemonsIdArray.indexOf(inputValue);
      for (let pokemonIndex in actualPokedexChilds) {
        actualPokedexChilds[pokemonIndex].classList.add("hidden");

        if (pokemonIndex == pokemonIdIndex) {
          actualPokedexChilds[pokemonIndex].classList.remove("hidden");
        }
      }
    }

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

// Region Searching

function resetPokemonNameArray() {
  pokemonsNameArray.length = 0;
}
function resetPokemonIdArray() {
  pokemonsIdArray.length = 0;
}
function resetPokemonArrays() {
  resetPokemonNameArray();
  resetPokemonIdArray();
}
function resetPokedex() {
  inputSearch.value = "";
  removeNodeChilds(pokedex);
  pokedex.classList.add("hidden");
}
function updatePokedexChildsVariables() {
  actualPokedexChilds = Array.from(pokedex.children);
  actualPokedexLength = actualPokedexChilds.length;
}
function loaderAppear() {
  loader.classList.remove("hidden");
}
function loaderDisappear() {
  loader.classList.add("hidden");
}

async function getRegion(initialIdPokemon, finishIdPokemon) {
  resetPokedex();
  await consultPokemons(initialIdPokemon, finishIdPokemon);
  updatePokedexChildsVariables();

  resetPokemonArrays();
  await createPokemonsNameArray(initialIdPokemon, finishIdPokemon);
  createPokemonIdArray(initialIdPokemon, finishIdPokemon);
  // console.log(pokemonsNameArray);
  // console.log(pokemonsIdArray);

  // Add click event card info to each pokemon card
  updateClickEventsToOpenCard();
}
async function getRegionKanto() {
  await getRegion(1, 151);
}
async function getRegionJohto() {
  await getRegion(152, 251);
}
async function getRegionHoenn() {
  await getRegion(252, 386);
}
async function getRegionSinnoh() {
  await getRegion(387, 494);
}
async function getRegionUnova() {
  await getRegion(495, 649);
}
async function getRegionKalos() {
  await getRegion(650, 721);
}
async function getRegionAlola() {
  await getRegion(722, 809);
}
async function getRegionGalar() {
  await getRegion(810, 898);
}

async function getCompleteRegion(callback) {
  loaderAppear();
  await callback();
  loaderDisappear();
  pokedex.classList.remove("hidden");
}
