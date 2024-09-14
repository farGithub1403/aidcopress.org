// Selectors :

const menuBtn = document.querySelector(".header_menu-wrapper");
const menu = document.querySelector(".header_menu");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero-section");

console.log(hero);

// DOM :

document.addEventListener("DOMContentLoaded", () => {
  menuBtn.addEventListener("click", () => {
    // console.log("menu open !!");

    menu.classList.toggle("addFlexToMenu");
    header.classList.toggle("addStyleToHeader");
    hero.classList.toggle("addMarginToHero");
  });
});
