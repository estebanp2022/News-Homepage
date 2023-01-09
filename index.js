const openButton = document.querySelector(".open-nav");
const closeButton = document.querySelector(".close-nav");
const nav = document.querySelector(".nav");
const navContainer = document.querySelector(".nav-container");

closeButton.addEventListener("click", () => {
  nav.classList.toggle("navigation-open");
  navContainer.classList.remove("show-nav");
});

openButton.addEventListener("click", () => {
  nav.classList.toggle("navigation-open");
  navContainer.classList.add("show-nav");
});
