const toogleBtn = document.querySelector(".navbar_toogleBtn");
const menu = document.querySelector(".navbar_menu");
const util = document.querySelector(".navbar_util");

toogleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  util.classList.toggle("active");
});
