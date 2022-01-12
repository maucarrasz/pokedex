const selectRegion = document.getElementById("select-region");

function updatePokedexChildsVariables() {
  console.log("Past: " + actualPokedexChilds.length);
  actualPokedexChilds = Array.from(pokedex.children);
  console.log("Now: " + actualPokedexChilds.length);
  actualPokedexLength = actualPokedexChilds.length;
}

async function getRegion(initialIdPokemon, finishIdPokemon) {
  await consultPokemons(initialIdPokemon, finishIdPokemon);
  updatePokedexChildsVariables();

  resetPokemonArrays();
  await createPokemonsNameArray(initialIdPokemon, finishIdPokemon);
  createPokemonIdArray(initialIdPokemon, finishIdPokemon);
  console.log(pokemonsNameArray);
  console.log(pokemonsIdArray);
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

selectRegion.addEventListener("change", function () {
  const optionSelected = this.options[this.options.selectedIndex];

  inputSearch.value = "";
  removeNodeChilds(pokedex);
  if (optionSelected.value === "kanto") {
    getRegionKanto();
  } else if (optionSelected.value === "johto") {
    getRegionJohto();
  } else if (optionSelected.value === "hoenn") {
    getRegionHoenn();
  } else if (optionSelected.value === "sinnoh") {
    getRegionSinnoh();
  } else if (optionSelected.value === "unova") {
    getRegionUnova();
  } else if (optionSelected.value === "kalos") {
    getRegionKalos();
  } else if (optionSelected.value === "alola") {
    getRegionAlola();
  } else if (optionSelected.value === "galar") {
    getRegionGalar();
  }
});

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
