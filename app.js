const menuIcon = document.querySelector(".menu-icon-open");
const closeIcon = document.querySelector(".menu-icon-close");
const navWrapper = document.querySelector(".nav-wrapper");
const dropdownNav = document.querySelectorAll(".dropdown-nav");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function () {
  // Toggle the display of the menu icon
  menuIcon.style.display = "none";
  // Toggle the display of the close icon
  closeIcon.style.display = "block";
  // Toggle the display of the nav
  navWrapper.style.display = "block";
  // Update aria-expanded attribute
  menuIcon.setAttribute("aria-expanded", "true");
  closeIcon.setAttribute("aria-expanded", "false");
});

// Add a click event listener to the close icon
closeIcon.addEventListener("click", function () {
  // Toggle the display of the menu icon
  menuIcon.style.display = "block";
  // Toggle the display of the close icon
  closeIcon.style.display = "none";
  // Toggle the display of the nav
  navWrapper.style.display = "none";
  // Update aria-expanded attribute
  menuIcon.setAttribute("aria-expanded", "false");
  closeIcon.setAttribute("aria-expanded", "true");
});

// TOGGLES THE DROPDOWN NAV MENUS
dropdownNav.forEach((item) => {
  item.addEventListener("click", function () {
    const dropdownList = this.querySelector(".dropdown-list");
    dropdownList.classList.toggle("show-dropdown");
  });
});

// TOGGLES THE ROTATE FOR THE DROPDOWN ARROW
document.querySelectorAll(".dropdown-btn").forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.toggle("rotate");
  });
});
