// Selecting elements from the DOM
let container = document.querySelector("#container");
let button = document.querySelector("button");
let icon = document.querySelector("i");

// Adding a click event listener to the button
button.addEventListener("click", () => {
  // Toggling the "dark-theme" class on the container
  container.classList.toggle("dark-theme");

  // Checking if the "dark-theme" class is present after the toggle
  if (container.classList.contains("dark-theme")) {
    // If dark theme is enabled, update the icon and text color
    icon.setAttribute("class", "fa-solid fa-sun");
    icon.style.cssText = "color: rgb(207, 192, 12)";
  } else {
    // If dark theme is disabled, update the icon and text color
    icon.setAttribute("class", "fa-solid fa-moon");
    icon.style.cssText = "color: rgb(32, 33, 36)";
  }
});
