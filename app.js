const menuIcon = document.querySelector(".menu-icon");
const menuIconClose = document.querySelector(".menu-icon-close");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
  menuIcon.style.display = "none";
  menuIconClose.style.display = "block";
  nav.style.display = "none";
});

menuIconClose.addEventListener("click", function () {
  menuIconClose.style.display = "none";
  menuIcon.style.display = "block";
  nav.style.display = "block";
});
