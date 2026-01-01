/* static/js/script.js */

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = toggleButton.querySelector("i");

  // Check if user has a saved preference
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    // Toggle icon (Moon <-> Sun) and save preference
    if (body.classList.contains("light-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
      localStorage.setItem("theme", "light");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
      localStorage.setItem("theme", "dark");
    }
  });
});
