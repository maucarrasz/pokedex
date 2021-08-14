const API = `https://pokeapi.co/api/v2/pokemon/`;
const extension_all_pokemons = `?limit=1118%27`;

const obtenerDatosPokemonesPokeapi = async url_Api => {
  try {
    let urls_pokemones = [];
    let data_pokemones = [];
    let pokemones = await fetchData(`${url_Api}`);
    console.log(pokemones);

    for (i = 0; i < pokemones.count; i++) {
      let url_pokemon = pokemones.results[i].url;
      urls_pokemones.push(url_pokemon);
    }
    for (i = 0; i < pokemones.count; i++) {
      try {
        let data_pokemon = await fetchData(`${urls_pokemones[i]}`);
        data_pokemones.push(data_pokemon);
      } catch {
        let data_pokemon = "Unknown";
        data_pokemones.push(data_pokemon);
      }
    }
    console.log(data_pokemones);
    return data_pokemones;
  } catch {
    let error = new Error(`Error: ${url_Api}`);
    return console.error(error);
  }
};

const printManyPokemonCards = async () => {
  console.log("Trayendo datos...");
  // Obtener el value del input
  let inputNumberUser = document.querySelector(".user-number-pokemons");
  let num_pokemones = inputNumberUser.value;
  num_pokemones = Number(num_pokemones);

  // Obtenemos los datos de todos los Pokemones
  let pokemones = await obtenerDatosPokemonesPokeapi(
    `${API}${extension_all_pokemons}`
  );

  const main = document.querySelector(".main");

  let lista_nombres = [];
  let lista_pesos = [];
  let lista_urls_imagenes = [];

  // Form element 1
  const userContainer = document.querySelector(".element-form-container");
  const questionUser = document.querySelector(".user-number-question");
  const inputUser = document.querySelector(".user-number-pokemons");
  const btn = document.getElementById("btn-pokemons");
  const subtitle = document.getElementById("subtitle");

  // Form element 2
  const questionUser2 = document.querySelector(".user-name-question");
  const inputUser2 = document.querySelector(".user-name-pokemon");
  const btn2 = document.getElementById("btn-name-pokemon");

  // Alert Message
  const infoMsg = document.querySelector(".msg-alert");

  // Creamos 3 arrays (Todo en orden)
  // El 1ro con los nombres de cada Pokemon
  // El 2do con sus pesos
  // El 3ero con las urls de sus images
  for (i = 0; i < num_pokemones; i++) {
    // Name
    let pokemon_name = pokemones[i].species.name;
    // Capitalize name
    pokemon_name = pokemon_name[0].toUpperCase() + pokemon_name.slice(1);
    lista_nombres.push(pokemon_name);
    // Weight
    let pokemon_weight = pokemones[i].weight;
    lista_pesos.push(pokemon_weight);
    // Url Imagen
    let url_images_pokemon = pokemones[i].sprites;
    let url_image = url_images_pokemon.other["official-artwork"].front_default;

    // Si no hay url art-work cambiamos a url front_default
    if (url_image === null) {
      url_image = url_images_pokemon.front_default;
    }
    lista_urls_imagenes.push(url_image);
  }

  // Eliminamos Contenido de formulario para obtener datos del user
  let containerFormElement = btn.parentNode;
  let form = containerFormElement.parentNode;
  containerFormElement.removeChild(questionUser);
  containerFormElement.removeChild(inputUser);
  containerFormElement.removeChild(btn);
  form.removeChild(containerFormElement);

  let containerFormElement2 = btn2.parentNode;
  containerFormElement2.removeChild(questionUser2);
  containerFormElement2.removeChild(inputUser2);
  containerFormElement2.removeChild(btn2);
  form.removeChild(containerFormElement2);

  // Eliminamos mensaje "choose one"
  let containerMsg = infoMsg.parentNode;
  containerMsg.removeChild(infoMsg);

  // Insertamos subtitulo
  subtitle.innerHTML = `Number of Pokemons: <span>${num_pokemones}</span>`;

  // Imprimimos los datos e imagen de cada Pokemón
  for (i = 0; i < num_pokemones; i++) {
    let container = document.createElement("div");
    container.id = "pokemon-container";
    main.appendChild(container);

    let img = document.createElement("img");
    img.src = lista_urls_imagenes[i];
    img.alt = "Imagen Pokemon";
    let p = document.createElement("p");
    p.innerHTML = `Name: ${lista_nombres[i]}<br>
    Weight: ${lista_pesos[i]}kg<br>`;

    container.appendChild(img);
    container.appendChild(p);

    let pokemon_id = document.createElement("div");
    pokemon_id.id = "pokemon-id";
    container.appendChild(pokemon_id);
    pokemon_id.innerHTML = `#${Number(i) + 1}`;
  }
};

// The 2nd question -> Print one Specific Pokemon Card

// ...

const printThePokemonCard = async () => {
  console.log("Trayendo datos...");
  // Obtenemos los datos de todos los Pokemones
  let data_pokemones = await obtenerDatosPokemonesPokeapi(
    `${API}${extension_all_pokemons}`
  );
  console.log(data_pokemones);

  // Obtener el value del input
  let inputNamePokemon = document.querySelector(".user-name-pokemon");
  let userNamePokemon = inputNamePokemon.value;
  userNamePokemon = userNamePokemon.toLowerCase();

  // Si es el Pokemon que el User puso guardamos la info del Pokemon en una variable
  let pokemon = data_pokemones.find(element => {
    if (element.species.name === userNamePokemon) {
      return element;
    } else {
      return null;
    }
  });

  // Si pokemon no existe mandamos error message. Si existe le imprimimos el Pokemon Card

  if (!pokemon) {
    // Ponemos mensaje de entrada invalida
    let invalidMsg = document.querySelector(".msg-invalid-option");
    invalidMsg.classList.add("invalid-msg-style");
    invalidMsg.innerHTML = "Ingrese una opción válida y no se crea vivo ❗❗";
  } else {
    // Pokemon Name
    let pokemon_name = pokemon.species.name;
    pokemon_name = pokemon_name[0].toUpperCase() + pokemon_name.slice(1);

    // Pokemon Id
    let pokemon_pokedex_id = pokemon.id;

    // Pokemon Weight
    let pokemon_weight = pokemon.weight;

    // Url Pokemon Image
    let url_images_pokemon = pokemon.sprites;
    let url_image = url_images_pokemon.other["official-artwork"].front_default;

    // Si no hay url art-work cambiamos a url front_default
    if (url_image === null) {
      url_image = url_images_pokemon.front_default;
    }

    // Form element 1
    const userContainer = document.querySelector(".element-form-container");
    const questionUser = document.querySelector(".user-number-question");
    const inputUser = document.querySelector(".user-number-pokemons");
    const btn = document.getElementById("btn-pokemons");
    const subtitle = document.getElementById("subtitle");

    // Form element 2
    const questionUser2 = document.querySelector(".user-name-question");
    const inputUser2 = document.querySelector(".user-name-pokemon");
    const btn2 = document.getElementById("btn-name-pokemon");

    // Alert Message
    const infoMsg = document.querySelector(".msg-alert");

    const main = document.querySelector(".main");

    // Eliminamos Contenido de formulario para obtener datos del user
    let containerFormElement = btn.parentNode;
    let form = containerFormElement.parentNode;
    containerFormElement.removeChild(questionUser);
    containerFormElement.removeChild(inputUser);
    containerFormElement.removeChild(btn);
    form.removeChild(containerFormElement);

    let containerFormElement2 = btn2.parentNode;
    containerFormElement2.removeChild(questionUser2);
    containerFormElement2.removeChild(inputUser2);
    containerFormElement2.removeChild(btn2);
    form.removeChild(containerFormElement2);

    // Eliminamos mensaje "choose one"
    let containerMsg = infoMsg.parentNode;
    containerMsg.removeChild(infoMsg);

    // Insertamos subtitulo
    subtitle.innerHTML = `We found the pokemon "${pokemon_name}"`;

    // Prueba: Imprimimos los datos e imagen del Pokemón
    let container = document.createElement("div");
    container.id = "pokemon-container";
    main.appendChild(container);

    let img = document.createElement("img");
    img.src = url_image;
    img.alt = "Imagen Pokemon";
    let p = document.createElement("p");
    p.innerHTML = `Name: ${pokemon_name}<br>
            Weight: ${pokemon_weight}kg<br>`;

    container.appendChild(img);
    container.appendChild(p);

    let pokemon_id = document.createElement("div");
    pokemon_id.id = "pokemon-id";
    container.appendChild(pokemon_id);
    pokemon_id.innerHTML = `#${pokemon_pokedex_id}`;
  }
};
