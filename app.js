// TOGGLES THE MOBILE NAV MENU ICON OPEN/CLOSE§
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".menu-icon-close");
const nav = document.querySelector("nav");
const dropdownNav = document.querySelectorAll(".dropdown-nav");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
  // Toggle the display of the menu icon
  menuIcon.style.display = "none";
  // Toggle the display of the close icon
  closeIcon.style.display = "block";
  // Toggle the display of the nav
  nav.style.display = "block";
});

// Add a click event listener to the close icon
closeIcon.addEventListener("click", function () {
  // Toggle the display of the menu icon
  menuIcon.style.display = "block";
  // Toggle the display of the close icon
  closeIcon.style.display = "none";
  // Toggle the display of the nav
  nav.style.display = "none";
});

// TOGGLES THE DROPDOWN NAV MENUS
dropdownNav.forEach((item) => {
  item.addEventListener("click", function () {
    const dropdownList = this.querySelector(".dropdown-list");
    dropdownList.classList.toggle("show-dropdown");
  });
});

// ROTATE THE DROPDOWN  MENU ICON
const featuresBtn = document.getElementById("features");
const featuresArrow = featuresBtn.querySelector("img");
const companyBtn = document.getElementById("company");
const companyArrow = companyBtn.querySelector("img");

featuresBtn.addEventListener("click", function () {
  featuresArrow.classList.toggle("rotate");
});

companyBtn.addEventListener("click", function () {
  companyArrow.classList.toggle("rotate");
});
