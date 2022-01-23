async function createPokemonCard(id) {
  const pokemon = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemonSpecies = await fetchData(pokemon.species.url);

  cardId.textContent = `#${elegantId(pokemon.id)}`;
  cardName.textContent = `${pokemon.species.name}`;
  cardName.setAttribute("translate", "no");

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
  cardImage.setAttribute("src", src);

  let weightKg = pokemon.weight / 10;
  let heightMeters = pokemon.height / 10;
  cardHeight.textContent = `${heightMeters}m`;
  cardWeight.textContent = `${weightKg}kg`;

  let genRate = pokemonSpecies.gender_rate;
  if (genRate === -1) {
    cardGender.textContent = genderRate(genRate);
  } else if (Array.isArray(genderRate(genRate))) {
    let genderArray = genderRate(genRate);
    let divMale = document.createElement("div"),
      divFemale = document.createElement("div"),
      spanMaleNum = document.createElement("span"),
      spanFemaleNum = document.createElement("span"),
      spanMaleIcon = document.createElement("span"),
      spanFemaleIcon = document.createElement("span");
    spanMaleNum.classList.add("gender__male");
    spanMaleIcon.classList.add("male-icon");
    spanFemaleNum.classList.add("gender__female");
    spanFemaleIcon.classList.add("female-icon");
    spanMaleIcon.textContent = "♂";
    spanFemaleIcon.textContent = "♀";

    spanMaleNum.textContent = `${genderArray[0]}% `;
    spanFemaleNum.textContent = `${genderArray[1]}% `;

    cardGender.appendChild(divMale);
    cardGender.appendChild(divFemale);
    divMale.appendChild(spanMaleNum);
    divMale.appendChild(spanMaleIcon);
    divFemale.appendChild(spanFemaleNum);
    divFemale.appendChild(spanFemaleIcon);
  }

  let aboutContent;
  for (let text of pokemonSpecies.flavor_text_entries) {
    if (text.language.name === "en") {
      aboutContent = text.flavor_text;
    }
  }

  let globalRegex1 = /\n/g;
  let globalRegex2 = /\f/g;
  aboutContent = aboutContent.replace(globalRegex1, " ");
  aboutContent = aboutContent.replace(globalRegex2, " ");

  cardAbout.textContent = aboutContent;

  let divType = document.createElement("div");
  cardTypesContainer.appendChild(divType);
  let type1 = pokemon.types[0].type.name;
  divType.classList.add("box", "type");

  divType.textContent = `${type1}`;
  backgroundType(divType);

  let type2;
  if (pokemon.types[1]) {
    let divType = document.createElement("div");
    cardTypesContainer.appendChild(divType);
    type2 = pokemon.types[1].type.name;
    divType.classList.add("box", "type");

    divType.textContent = `${type2}`;
    backgroundType(divType);
  }

  if (cardTypesContainer.childNodes.length === 1) {
    backgroundLinearGradient(card, bgColors[type1], bgColors[type1]);
  } else if (cardTypesContainer.childNodes.length === 2) {
    backgroundLinearGradient(card, bgColors[type1], bgColors[type2]);
  }
  console.group(`${pokemon.species.name} stats:`);
  console.log(pokemon.stats);
  console.groupEnd(`${pokemon.species.name} stats:`);
  pokemon.stats.forEach((stat, i) => {
    cardStatsNumberArray[i].textContent = `${stat.base_stat}`;
  });

  let divAbility = document.createElement("div");
  cardAbilitiesContainer.appendChild(divAbility);
  let ability1 = pokemon.abilities[0].ability.name;
  divAbility.classList.add("box", "ability");

  ability1 = ability1.replace("-", " ");
  divAbility.textContent = `${ability1}`;

  let ability2;
  if (pokemon.abilities[1]) {
    let divAbility = document.createElement("div");
    cardAbilitiesContainer.appendChild(divAbility);
    ability2 = pokemon.abilities[1].ability.name;
    divAbility.classList.add("box", "ability");

    ability2 = ability2.replace("-", " ");
    divAbility.textContent = `${ability2}`;
  }

  if (pokemonSpecies.egg_groups[0]) {
    let divEggGroup = document.createElement("div");
    divEggGroup.classList.add("box", "egg-group");
    let eggGroup1 = pokemonSpecies.egg_groups[0].name;
    eggGroup1 = eggGroup1.replace("-", " ");
    divEggGroup.textContent = `${eggGroup1}`;

    cardEggGroupsContainer.appendChild(divEggGroup);
  } else {
    let divEggGroup = document.createElement("div");
    divEggGroup.textContent = `No Egg group`;
    cardEggGroupsContainer.appendChild(divEggGroup);
  }

  let eggGroup2;
  if (pokemonSpecies.egg_groups[1]) {
    let divEggGroup = document.createElement("div");
    divEggGroup.classList.add("box", "egg-group");
    eggGroup2 = pokemonSpecies.egg_groups[1].name;
    eggGroup2 = eggGroup2.replace("-", " ");
    divEggGroup.textContent = `${eggGroup2}`;

    cardEggGroupsContainer.appendChild(divEggGroup);
  }

  if (pokemon.types.length === 1) {
    let uniqueType = cardTypesContainer.querySelector("div:nth-child(1)");
    uniqueType.style.marginRight = "0px";
  }
}
function resetCardTemplate() {
  card.style.background = "khaki";
  cardId.textContent = "###";
  cardName.textContent = "";
  cardImage.setAttribute("src", "./src/silueta-pikachu.png");
  cardHeight.textContent = "";
  cardWeight.textContent = "";
  cardAbout.textContent = "";
  for (let statNumber of cardStatsNumberArray) {
    statNumber.textContent = "##";
  }
  removeNodeChilds(cardTypesContainer);
  removeNodeChilds(cardGender);
  removeNodeChilds(cardAbilitiesContainer);
  removeNodeChilds(cardEggGroupsContainer);
}
function closeCard() {
  bgCardContainer.classList.add("hidden");
  resetCardTemplate();
}
function openCard() {
  bgCardContainer.classList.remove("hidden");
  scrollTopCard();
}
function scrollTopCard() {
  if (cardInfo.scrollTop > 0) {
    cardInfo.scrollTop = 0;
  }
}
// Initial addEventListener to each pokedex item in first reloaded
function updateClickEventsToOpenCard() {
  console.log("OpenCard ya funciona!");
  console.log("Cantidad Pokedex:", actualPokedexLength);
  for (let i = 0; i < actualPokedexLength; i++) {
    actualPokedexChilds[i].addEventListener("click", function () {
      createPokemonCard(pokemonsIdArray[i]);
      openCard();
    });
    // actualPokedexChilds[i].addEventListener("click", scrollTopCard);
  }
}
