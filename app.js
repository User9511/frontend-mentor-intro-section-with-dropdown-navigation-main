const mobileMenuTrigger = document.getElementById("mobileMenuTrigger");
const navWrapper = document.getElementById("nav-wrapper");
const featuresDropdownTrigger = document.getElementById("featuresDropdownTrigger");
const companyDropdownTrigger = document.getElementById("companyDropdownTrigger");
const featuresList = document.getElementById("features-list");
const companyList = document.getElementById("company-list");

// Add a click event listener to the mobile menu trigger button
mobileMenuTrigger.addEventListener("click", () => {
  // toggle the active class on the nav wrapper and mobile menu trigger button
  navWrapper.classList.toggle("active");
  mobileMenuTrigger.classList.toggle("active");

  // toggle the aria-expanded attribute on the mobile menu trigger button
  if (navWrapper.classList.contains("active")) {
    mobileMenuTrigger.setAttribute("aria-expanded", "true");
  } else {
    mobileMenuTrigger.setAttribute("aria-expanded", "false");
  }
});

// Add a click event listener to the features dropdown trigger button
featuresDropdownTrigger.addEventListener("click", () => {
  featuresList.classList.toggle("show-dropdown");

  // toggle the aria-expanded attribute on the features dropdown trigger button
  if (featuresList.classList.contains("show-dropdown")) {
    featuresDropdownTrigger.setAttribute("aria-expanded", "true");
  } else {
    featuresDropdownTrigger.setAttribute("aria-expanded", "false");
  }
});

// Add a click event listener to the company dropdown trigger button
companyDropdownTrigger.addEventListener("click", () => {
  companyList.classList.toggle("show-dropdown");

  // toggle the aria-expanded attribute on the company dropdown trigger button
  if (companyList.classList.contains("show-dropdown")) {
    companyDropdownTrigger.setAttribute("aria-expanded", "true");
  } else {
    companyDropdownTrigger.setAttribute("aria-expanded", "false");
  }
});

``;
