const cardContainer = document.querySelector(".card-container"),
  card = document.querySelector(".card"),
  cardInfo = document.querySelector(".card-info"),
  closeContainer = document.getElementById("close-container");

const cardId = cardContainer.querySelector(".pokemon__id"),
  cardName = cardContainer.querySelector(".pokemon__name"),
  cardImage = cardContainer.querySelector(".pokemon__img"),
  cardTypesContainer = cardContainer.querySelector(".pokemon__type"),
  cardLegendary = cardContainer.querySelector(".pokemon__legendary"),
  cardHeight = cardContainer.querySelector(".additional__height"),
  cardWeight = cardContainer.querySelector(".additional__weight"),
  cardGender = cardContainer.querySelector(".pokemon__gender"),
  cardAbout = cardContainer.querySelector(".about__content"),
  cardAbilitiesContainer = cardContainer.querySelector(".abilities-container"),
  cardEggGroupsContainer = cardContainer.querySelector(".egg-groups-container");

let cardStatsNumberArray = Array.from(
  cardContainer.querySelectorAll(".stat .stat__number")
);

updateClickEventsToOpenCard();

closeContainer.addEventListener("click", closeCard);
document.addEventListener("click", function (e) {
  let click = e.target;
  if (click == cardContainer) {
    closeCard();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeCard();
  }
});
