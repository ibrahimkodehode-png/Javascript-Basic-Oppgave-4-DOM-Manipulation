document.getElementById("toggle-button").addEventListener("click", function () {
  const aboutSection = document.getElementById("about");

  // Toggle visibility of the about section
  aboutSection.classList.toggle("hidden");

  // Change button text based on the current state of the section
  if (aboutSection.classList.contains("hidden")) {
    this.textContent = "Show About Us"; // When hidden, change button text to "Show"
  } else {
    this.textContent = "Hide About Us"; // When visible, change button text to "Hide"
  }
});
