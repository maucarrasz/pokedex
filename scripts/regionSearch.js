const selectRegion = document.getElementById("select-region"),
  loader = document.getElementById("loader");

selectRegion.addEventListener("change", function () {
  const optionSelected = this.options[this.options.selectedIndex];

  if (optionSelected.value === "kanto") {
    getCompleteRegion(getRegionKanto);
  } else if (optionSelected.value === "johto") {
    getCompleteRegion(getRegionJohto);
  } else if (optionSelected.value === "hoenn") {
    getCompleteRegion(getRegionHoenn);
  } else if (optionSelected.value === "sinnoh") {
    getCompleteRegion(getRegionSinnoh);
  } else if (optionSelected.value === "unova") {
    getCompleteRegion(getRegionUnova);
  } else if (optionSelected.value === "kalos") {
    getCompleteRegion(getRegionKalos);
  } else if (optionSelected.value === "alola") {
    getCompleteRegion(getRegionAlola);
  } else if (optionSelected.value === "galar") {
    getCompleteRegion(getRegionGalar);
  }
});
