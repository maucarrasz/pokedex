async function fetchData(url_api) {
  return fetch(url_api).then(response => response.json());
}
function capitalizeString(string) {
  const stringCapitalized = string.charAt(0).toUpperCase() + string.slice(1);
  return stringCapitalized;
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
function genderRate(rate) {
  if (rate === -1) {
    return "Genderless";
  } else {
    let genderPercentages = [];
    let genderFemaleRate = (rate / 8) * 100;
    let genderMaleRate = 100 - genderFemaleRate;
    genderPercentages.push(genderMaleRate);
    genderPercentages.push(genderFemaleRate);
    return genderPercentages;
  }
}
function removeNodeChilds(parentNode) {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}

function backgroundType(type) {
  if (type.textContent.toLowerCase() === "normal") {
    type.classList.add("normal");
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

const bgColors = {
  normal: "rgba(224, 224, 161, 1)",
  fire: "rgba(255, 172, 112, 1)",
  water: "rgba(173, 192, 237, 1)",
  electric: "rgba(255, 223, 95, 1)",
  grass: "rgba(159, 230, 124, 1)",
  ice: "rgba(172, 228, 228, 1)",
  fighting: "rgba(255, 133, 127, 1)",
  poison: "rgba(226, 144, 226, 1)",
  ground: "rgba(235, 207, 133, 1)",
  flying: "rgba(193, 175, 244, 1)",
  psychic: "rgba(255, 128, 166, 1)",
  bug: "rgba(215, 227, 114, 1)",
  rock: "rgba(226, 201, 98, 1)",
  ghost: "rgba(142, 116, 184, 1)",
  dragon: "rgba(145, 104, 242, 1)",
  dark: "rgba(126, 106, 92, 1)",
  steel: "rgba(196, 196, 215, 1)",
  fairy: "rgba(247, 176, 192, 1)",
};

function backgroundLinearGradient(element, bg1, bg2) {
  let linearGradient =
    "linear-gradient(180deg," + bg1 + " 20%," + bg2 + " 100%)";
  element.style.background = linearGradient;
  // element.style.background = `red`;
  console.log(element.style.background);
}
