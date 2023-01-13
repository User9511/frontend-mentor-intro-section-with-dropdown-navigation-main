// // Select the menu icon and close icon elements
// const menuIcon = document.querySelector(".menu-icon");
// const closeIcon = document.querySelector(".menu-icon-close");
// const nav = document.querySelector("nav");
// const dropdownNav = document.querySelector(".dropdown-nav");
// const dropdownList = document.querySelector(".dropdown-list");

// // Add a click event listener to the menu icon
// menuIcon.addEventListener("click", function () {
//   // Toggle the display of the menu icon
//   menuIcon.style.display = "none";
//   // Toggle the display of the close icon
//   closeIcon.style.display = "block";
//   // Toggle the display of the nav
//   nav.style.display = "none";
// });

// // Add a click event listener to the close icon
// closeIcon.addEventListener("click", function () {
//   // Toggle the display of the menu icon
//   menuIcon.style.display = "block";
//   // Toggle the display of the close icon
//   closeIcon.style.display = "none";
//   // Toggle the display of the nav
//   nav.style.display = "block";
// });

// const features = document.querySelector("#features");
// const featuresList = document.querySelector(".features-list");
// const company = document.querySelector("#company");
// const companyList = document.querySelector(".company-list");

// features.addEventListener("click", function () {
//   featuresList.classList.toggle("show-dropdown");
// });

// company.addEventListener("click", function () {
//   companyList.classList.toggle("show-dropdown");
// });

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

dropdownNav.forEach((item) => {
  item.addEventListener("click", function () {
    const dropdownList = this.querySelector(".dropdown-list");
    dropdownList.classList.toggle("show-dropdown");
  });
});
