import ready from "../../js/utils/documentReady.js";

ready(function () {
  // mobile menu
  const menuTrigger = document.querySelector(".js-menu-btn");
  menuTrigger.addEventListener("click", (event) =>{
    event.preventDefault();
    const navMenu = menuTrigger.closest(".header__inner").querySelector(".nav");
    navMenu.classList.toggle("nav--active");
  });
});
