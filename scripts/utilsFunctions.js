function fetchData(url_api) {
  return fetch(url_api).then(response => response.json());
}
function capitalizeString(string) {
  const stringCapitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return stringCapitalized;
}
function genderRate(rate) {
  if (rate === -1) {
    console.log("Genderless");
    return "Genderless";
  } else {
    let genderPercentages = [];
    let genderFemaleRate = (rate / 8) * 100;
    let genderMaleRate = 100 - genderFemaleRate;
    genderPercentages.push(genderMaleRate);
    genderPercentages.push(genderFemaleRate);
    console.log(`Male: ${genderPercentages[0]}%`);
    console.log(`Female: ${genderPercentages[1]}%`);
    return genderPercentages;
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
