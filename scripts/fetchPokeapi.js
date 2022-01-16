const pokedex = document.getElementById("pokedex"),
  bgCardContainer = document.getElementById("bgcard-container");

let actualPokedexChilds = Array.from(pokedex.children),
  actualPokedexLength = actualPokedexChilds.length,
  pokemonsNameArray = [],
  pokemonsIdArray = [];

async function consultPokemonsKanto() {
  for (i = 1; i <= 151; i++) {
    await consultPokemonKanto(i);
  }
}
async function consultPokemonKanto(id) {
  try {
    const pokemon = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // console.log(pokemon);
    insertPokemonKanto(pokemon, id);
  } catch {
    console.error(error);
  }
}
function insertPokemonKanto(pokemon, id) {
  let pokedexItem = actualPokedexChilds[id - 1];
  let itemId = pokedexItem.querySelector(".pokemon__id");
  let itemImg = pokedexItem.querySelector(".pokemon__img");
  let itemName = pokedexItem.querySelector(".pokemon__name");
  let itemTypeCtn = pokedexItem.querySelector(".pokemon__type");

  itemId.textContent = `#${elegantId(pokemon.id)}`;

  let src;
  let imageUrl1 = pokemon.sprites.other.dream_world.front_default;
  let imageUrl2 = pokemon.sprites.other["official-artwork"].front_default;
  let imageUrl3 = pokemon.sprites.other.home.front_default;

  if (imageUrl1 !== null) {
    src = imageUrl1;
  } else if (imageUrl2 !== null) {
    src = imageUrl2;
  } else if (imageUrl3 !== null) {
    src = imageUrl3;
  }

  itemImg.setAttribute("src", src);

  itemName.textContent = `${pokemon.species.name}`;

  let type = document.createElement("div");
  itemTypeCtn.appendChild(type);
  let type1 = pokemon.types[0].type.name;
  type.textContent = `${type1}`;
  backgroundType(type);
  // console.log("Tipo 1: ", type1);

  let type2;
  if (pokemon.types[1]) {
    let type = document.createElement("div");
    itemTypeCtn.appendChild(type);
    type2 = pokemon.types[1].type.name;
    type.textContent = `${type2}`;
    backgroundType(type);
    // console.log("Tipo 2: ", type2);
  }

  if (itemTypeCtn.childNodes.length === 1) {
    backgroundLinearGradient(pokedexItem, bgColors[type1], bgColors[type1]);
  } else if (itemTypeCtn.childNodes.length === 2) {
    backgroundLinearGradient(pokedexItem, bgColors[type1], bgColors[type2]);
  }

  let totalLength;
  if (type2) {
    totalLength = type1.length + type2.length;
  } else {
    totalLength = type1.length;
  }

  if (totalLength >= 12) {
    itemTypeCtn.style.padding = "0";
  }
  if (totalLength >= 15) {
    let arrayTypes = Array.from(itemTypeCtn.children);
    for (type of arrayTypes) {
      type.style.padding = "4px 8px";
    }
  }

  if (itemName.textContent.length > 11) {
    itemName.style.fontSize = "1.8rem";
  }
}
consultPokemonsKanto();
createPokemonsNameArray(1, actualPokedexLength);
createPokemonIdArray(1, actualPokedexLength);

async function consultPokemons(initialPokemonId, finishPokemonId) {
  for (i = initialPokemonId; i <= finishPokemonId; i++) {
    await consultPokemon(i);
  }
}
async function consultPokemon(id) {
  try {
    const pokemon = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // console.log(pokemon);
    createNewPokemon(pokemon, id);
  } catch {
    console.error(error);
  }
}

function createNewPokemon(pokemon, id) {
  let itemContainer = document.createElement("li");
  let itemBg = document.createElement("div");
  let item = document.createElement("div");
  let itemId = document.createElement("p");
  let itemImg = document.createElement("img");
  let itemName = document.createElement("p");
  let itemTypeCtn = document.createElement("div");

  pokedex.appendChild(itemContainer);
  itemContainer.appendChild(itemBg);
  itemBg.appendChild(item);
  item.appendChild(itemId);
  item.appendChild(itemImg);
  item.appendChild(itemName);
  item.appendChild(itemTypeCtn);

  itemContainer.classList.add("pokedex__item");
  itemBg.classList.add("bg-pokemon");
  item.classList.add("pokemon");
  itemId.classList.add("pokemon__id");
  itemImg.classList.add("pokemon__img");
  itemName.classList.add("pokemon__name");
  itemTypeCtn.classList.add("pokemon__type");

  itemId.textContent = `#${elegantId(pokemon.id)}`;

  let src;
  let imageUrl1 = pokemon.sprites.other.dream_world.front_default;
  let imageUrl2 = pokemon.sprites.other["official-artwork"].front_default;
  let imageUrl3 = pokemon.sprites.other.home.front_default;

  if (imageUrl1 !== null) {
    src = imageUrl1;
  } else if (imageUrl2 !== null) {
    src = imageUrl2;
  } else if (imageUrl3 !== null) {
    src = imageUrl3;
  }

  itemImg.setAttribute("src", src);

  itemName.textContent = `${pokemon.name}`;
  itemName.setAttribute("translate", "no");

  let type = document.createElement("div");
  itemTypeCtn.appendChild(type);
  let type1 = pokemon.types[0].type.name;
  type.textContent = `${type1}`;
  backgroundType(type);
  // console.log("Tipo 1: ", type1);

  let type2;
  if (pokemon.types[1]) {
    let type = document.createElement("div");
    itemTypeCtn.appendChild(type);
    type2 = pokemon.types[1].type.name;
    type.textContent = `${type2}`;
    backgroundType(type);
    // console.log("Tipo 2: ", type2);
  }

  if (itemTypeCtn.childNodes.length === 1) {
    backgroundLinearGradient(itemContainer, bgColors[type1], bgColors[type1]);
  } else if (itemTypeCtn.childNodes.length === 2) {
    backgroundLinearGradient(itemContainer, bgColors[type1], bgColors[type2]);
  }

  let totalLength;
  if (type2) {
    totalLength = type1.length + type2.length;
  } else {
    totalLength = type1.length;
  }

  if (totalLength >= 12) {
    itemTypeCtn.style.padding = "0";
  }
  if (totalLength >= 15) {
    let arrayTypes = Array.from(itemTypeCtn.children);
    for (type of arrayTypes) {
      type.style.padding = "4px 8px";
    }
  }

  if (itemName.textContent.length > 11) {
    itemName.style.fontSize = "1.8rem";
  }
}

async function createPokemonsNameArray(initialPokemonName, finishPokemonName) {
  const data = await fetchData(
    "https://pokeapi.co/api/v2/pokemon-species?limit=898"
  );
  const pokemons = Array.from(data.results);

  for (let i = initialPokemonName; i <= finishPokemonName; i++) {
    pokemonsNameArray.push(pokemons[i - 1].name);
  }
}

function createPokemonIdArray(initialPokemonId, finishPokemonId) {
  for (let i = initialPokemonId; i <= finishPokemonId; i++) {
    pokemonsIdArray.push(String(i));
  }
}

// go top in reloaded
window.scrollTo(0, 0);

console.log(`N° de Pokemones en Pokeapi: 898`);
console.log(`N° de Pokemones en mi Pokedex: ${actualPokedexLength}`);

console.log(pokemonsNameArray);
console.log(pokemonsIdArray);
