const openButton = document.querySelector(".open-nav");
const closeButton = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");
const container = document.querySelector(".main-container");

closeButton.addEventListener("click", () => {
  nav.classList.add("navigation-open");
  // container.classList.remove("blur");
});

openButton.addEventListener("click", () => {
  nav.classList.remove("navigation-open");
  // container.classList.add("blur");
});
