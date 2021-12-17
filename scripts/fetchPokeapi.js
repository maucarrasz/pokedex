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

function consultPokemons(numPokemons) {
  let index = 0;
  for (i = 0; i < numPokemons; i++) {
    consultPokemon(i + 1);
  }
}

consultPokemons(151);

const pokedex = document.getElementById("pokedex");

function createPokemon(pokemon) {
  let itemContainer = document.createElement("li");
  let item = document.createElement("div");
  let itemId = document.createElement("p");
  let itemImg = document.createElement("img");
  let itemName = document.createElement("p");
  let itemTypeCtn = document.createElement("div");

  pokedex.appendChild(itemContainer);
  itemContainer.appendChild(item);
  item.appendChild(itemId);
  item.appendChild(itemImg);
  item.appendChild(itemName);
  item.appendChild(itemTypeCtn);

  itemContainer.classList.add("pokedex__item");
  item.classList.add("pokemon");
  itemId.classList.add("pokemon__id");
  itemImg.classList.add("pokemon__img");
  itemName.classList.add("pokemon__name");
  itemTypeCtn.classList.add("pokemon__type");

  itemId.textContent = `#${pokemon.id}`;
  itemImg.setAttribute(
    "src",
    `${pokemon.sprites.other.dream_world.front_default}`
  );
  itemName.textContent = `${pokemon.name}`;

  let type = document.createElement("div");
  itemTypeCtn.appendChild(type);
  itemTypeCtn.children[0].textContent = `${pokemon.types[0].type.name}`;
}
