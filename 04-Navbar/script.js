const logo = document.querySelector(".logo");

logo.addEventListener("click", function () {
  const menuitems = document.querySelector(".menu-items");
  menuitems.classList.toggle("show-menu-items");
});
