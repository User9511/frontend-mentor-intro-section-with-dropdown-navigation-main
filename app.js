// Select the menu icon and close icon elements
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".menu-icon-close");
const nav = document.querySelector("nav");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
  // Toggle the display of the menu icon
  menuIcon.style.display = "none";
  // Toggle the display of the close icon
  closeIcon.style.display = "block";
  // Toggle the display of the nav
  nav.style.display = "none";
});

// Add a click event listener to the close icon
closeIcon.addEventListener("click", function () {
  // Toggle the display of the menu icon
  menuIcon.style.display = "block";
  // Toggle the display of the close icon
  closeIcon.style.display = "none";
  // Toggle the display of the nav
  nav.style.display = "block";
});
