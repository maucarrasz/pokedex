const bgCardContainer = document.getElementById("bgcard-container"),
  cardContainer = document.querySelector(".card-container"),
  closeContainer = document.getElementById("close-container");

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

function closeCard() {
  bgCardContainer.classList.add("hidden");
}
function openCard() {
  bgCardContainer.classList.remove("hidden");
}
