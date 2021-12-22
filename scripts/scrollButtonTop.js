addEventListener("DOMContentLoaded", function () {
  const buttonGoTop = document.getElementById("go-top");

  function actualScroll() {
    return document.documentElement.scrollTop || document.body.scrollTop;
  }
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  function getScroll() {
    if (actualScroll() < 450) {
      buttonGoTop.classList.add("hidden");
    } else {
      buttonGoTop.classList.remove("hidden");
    }
  }

  buttonGoTop.addEventListener("click", scrollTop);
  window.addEventListener("scroll", getScroll);
});
