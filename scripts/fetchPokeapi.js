const pokedex = document.getElementById("pokedex"),
  pokedexChilds = Array.from(pokedex.children),
  pokedexLength = pokedexChilds.length,
  bgCardContainer = document.getElementById("bgcard-container");

let pokemonsNameArray = [],
  pokemonsIdArray = [];

async function consultPokemon(id) {
  try {
    const pokemon = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
    createPokemon(pokemon, id);
    // console.log(pokemon);
  } catch {
    console.error(error);
  }
}

async function consultPokemons(numPokemons) {
  for (i = 0; i < numPokemons; i++) {
    await consultPokemon(i + 1);
  }
}

function createPokemon(pokemon, id) {
  let pokedexItem = pokedexChilds[id - 1];
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

async function createPokemonsNameArray() {
  const data = await fetchData(
    "https://pokeapi.co/api/v2/pokemon-species?limit=898"
  );
  const pokemons = Array.from(data.results);

  for (let pokemon of pokemons) {
    pokemonsNameArray.push(pokemon.name);
  }
}

function createPokemonIdArray(numPokemons) {
  for (let i = 1; i <= numPokemons; i++) {
    pokemonsIdArray.push(String(i));
  }
}

// function createNewPokemonItem(pokemon) {
//   let itemContainer = document.createElement("li");
//   let itemBg = document.createElement("div");
//   let item = document.createElement("div");
//   let itemId = document.createElement("p");
//   let itemImg = document.createElement("img");
//   let itemName = document.createElement("p");
//   let itemTypeCtn = document.createElement("div");

//   pokedex.appendChild(itemContainer);
//   itemContainer.appendChild(itemBg);
//   itemBg.appendChild(item);
//   item.appendChild(itemId);
//   item.appendChild(itemImg);
//   item.appendChild(itemName);
//   item.appendChild(itemTypeCtn);

//   itemContainer.classList.add("pokedex__item");
//   itemBg.classList.add("bg-pokemon");
//   item.classList.add("pokemon");
//   itemId.classList.add("pokemon__id");
//   itemImg.classList.add("pokemon__img");
//   itemName.classList.add("pokemon__name");
//   itemTypeCtn.classList.add("pokemon__type");

//   itemId.textContent = `#${elegantId(pokemon.id)}`;
//   itemImg.setAttribute(
//     "src",
//     `${pokemon.sprites.other.dream_world.front_default}`
//   );
//   itemName.textContent = `${pokemon.name}`;

//   let type = document.createElement("div");
//   itemTypeCtn.appendChild(type);
//   let type1 = pokemon.types[0].type.name;
//   itemTypeCtn.children[0].textContent = `${type1}`;
//   backgroundType(itemTypeCtn.children[0]);

//   let type2;
//   if (pokemon.types[1]) {
//     let type = document.createElement("div");
//     itemTypeCtn.appendChild(type);
//     type2 = pokemon.types[1].type.name;
//     itemTypeCtn.children[1].textContent = `${type2}`;
//     backgroundType(itemTypeCtn.children[1]);
//   }

//   let totalLength;
//   if (type2) {
//     totalLength = type1.length + type2.length;
//   } else {
//     totalLength = type1.length;
//   }
//   if (totalLength >= 12) {
//     itemTypeCtn.style.padding = "0";
//   }
// }

function numPokemonsPokeapi() {
  let numPokemons = 898;
  console.log(`N° de Pokemones en Pokeapi: ${numPokemons}`);
}

// go top in reloaded
window.scrollTo(0, 0);

consultPokemons(pokedexLength);
createPokemonsNameArray();
createPokemonIdArray(pokedexLength);

numPokemonsPokeapi();
console.log(`N° de Pokemones en mi Pokedex: ${pokedexLength}`);
