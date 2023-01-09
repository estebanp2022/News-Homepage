const openButton = document.querySelector(".open-nav");
const closeButton = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");
// const main = document.querySelector("main");

closeButton.addEventListener("click", () => {
  nav.classList.toggle("navigation-open");
  // main.classList.remove("blur");
});

openButton.addEventListener("click", () => {
  nav.classList.toggle("navigation-open");
  // main.classList.add("blur");
});
