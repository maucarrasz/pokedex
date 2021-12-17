// const colors = {
//   normal: "#A8A77A",
//   fire: "#EE8130",
//   water: "#6390F0",
//   electric: "#F7D02C",
//   grass: "#7AC74C",
//   ice: "#96D9D6",
//   fighting: "#C22E28",
//   poison: "#A33EA1",
//   ground: "#E2BF65",
//   flying: "#A98FF3",
//   psychic: "#F95587",
//   bug: "#A6B91A",
//   rock: "#B6A136",
//   ghost: "#735797",
//   dragon: "#6F35FC",
//   dark: "#705746",
//   steel: "#B7B7CE",
//   fairy: "#D685AD",
// };

function fetchData(url_api) {
  return fetch(url_api).then(response => response.json());
}
function capitalizeString(string) {
  const stringCapitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return stringCapitalized;
}

async function consultPokemon(id) {
  try {
    const pokemon = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    // console.log(pokemon);
    createPokemon(pokemon);
  } catch {
    console.error(error);
  }
}

async function consultPokemons(numPokemons) {
  let index = 0;
  for (i = 0; i < numPokemons; i++) {
    await consultPokemon(i + 1);
  }
}

consultPokemons(151);

const pokedex = document.getElementById("pokedex");

function createPokemon(pokemon) {
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
  itemImg.setAttribute(
    "src",
    `${pokemon.sprites.other.dream_world.front_default}`
  );
  itemName.textContent = `${capitalizeString(pokemon.name)}`;

  // console.log(`${pokemon.name}, N° de tipos: ${pokemon.types.length}`);

  let type = document.createElement("div");
  itemTypeCtn.appendChild(type);
  let type1 = pokemon.types[0].type.name;
  itemTypeCtn.children[0].textContent = `${capitalizeString(type1)}`;
  // console.log(itemTypeCtn.children[0].textContent.toLowerCase());
  // console.log(itemTypeCtn.children[0].textContent);
  backgroundType(itemTypeCtn.children[0]);

  let type2;
  if (pokemon.types[1]) {
    let type = document.createElement("div");
    itemTypeCtn.appendChild(type);
    type2 = pokemon.types[1].type.name;
    itemTypeCtn.children[1].textContent = `${capitalizeString(type2)}`;
    backgroundType(itemTypeCtn.children[1]);
  }

  let totalLength;
  if (type2) {
    totalLength = type1.length + type2.length;
  } else {
    totalLength = type1.length;
  }
  if (totalLength >= 12) {
    // console.log(`${pokemon.name} ${type1}, ${type2}, ${totalLength}`);
    itemTypeCtn.style.padding = "0";
  }
}

function backgroundType(type) {
  if (type.textContent.toLowerCase() === "normal") {
    type.classList.add("fire");
  } else if (type.textContent.toLowerCase() === "fighting") {
    type.classList.add("fighting");
  } else if (type.textContent.toLowerCase() === "flying") {
    type.classList.add("flying");
  } else if (type.textContent.toLowerCase() === "poison") {
    type.classList.add("poison");
  } else if (type.textContent.toLowerCase() === "ground") {
    type.classList.add("ground");
  } else if (type.textContent.toLowerCase() === "rock") {
    type.classList.add("rock");
  } else if (type.textContent.toLowerCase() === "bug") {
    type.classList.add("bug");
  } else if (type.textContent.toLowerCase() === "ghost") {
    type.classList.add("ghost");
  } else if (type.textContent.toLowerCase() === "steel") {
    type.classList.add("steel");
  } else if (type.textContent.toLowerCase() === "fire") {
    type.classList.add("fire");
  } else if (type.textContent.toLowerCase() === "water") {
    type.classList.add("water");
  } else if (type.textContent.toLowerCase() === "grass") {
    type.classList.add("grass");
  } else if (type.textContent.toLowerCase() === "electric") {
    type.classList.add("electric");
  } else if (type.textContent.toLowerCase() === "psychic") {
    type.classList.add("psychic");
  } else if (type.textContent.toLowerCase() === "ice") {
    type.classList.add("ice");
  } else if (type.textContent.toLowerCase() === "dragon") {
    type.classList.add("dragon");
  } else if (type.textContent.toLowerCase() === "dark") {
    type.classList.add("dark");
  } else if (type.textContent.toLowerCase() === "fairy") {
    type.classList.add("fairy");
  }
}

function elegantId(id) {
  let elegantId = String(id);
  if (elegantId.length === 1) {
    elegantId = `00${elegantId}`;
  } else if (elegantId.length === 2) {
    elegantId = `0${elegantId}`;
  }
  return elegantId;
}
