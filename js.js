// ===== About Us toggle button =====
document.getElementById("toggle-button").addEventListener("click", function () {
  const aboutSection = document.getElementById("about");
  aboutSection.classList.toggle("hidden");
  this.textContent = aboutSection.classList.contains("hidden")
    ? "Show About Us"
    : "Hide About Us";
});

// ===== Recommendation System =====
const recommendBtn = document.getElementById("recommend-btn");
const recommendationBox = document.getElementById("recommendation");

// Array of sports info objects
const sportsInfo = [
  {
    name: "football",
    minAge: 6,
    maxAge: 12,
    explanation:
      "Football is great for coordination, teamwork, and endurance. Best for kids 6 and older.",
  },
  {
    name: "basketball",
    minAge: 7,
    maxAge: 12,
    explanation:
      "Basketball improves speed, agility, and leadership skills. Ideal for children aged 7+.",
  },
  {
    name: "martial-arts",
    minAge: 5,
    maxAge: 12,
    explanation:
      "Martial Arts teaches discipline, respect, and self-control. Suitable for kids 5 and older.",
  },
  {
    name: "brain",
    minAge: 4,
    maxAge: 12,
    explanation:
      "Brain development activities, like chess and strategy games, enhance mental growth. Perfect for ages 4+.",
  },
];

// Function to get recommendation
function getRecommendation(age, sport) {
  // Find the sport info object
  const sportData = sportsInfo.find((s) => s.name === sport);

  if (!sportData) return "Please select a valid sport.";

  // Check if age fits
  if (age < sportData.minAge) {
    return `This sport is generally recommended for ages ${sportData.minAge}-${sportData.maxAge}.`;
  } else {
    return sportData.explanation;
  }
}

// Event listener for button
recommendBtn.addEventListener("click", () => {
  const age = parseInt(document.getElementById("age").value);
  const sport = document.getElementById("sport").value;

  // Basic validation
  if (!age || !sport) {
    recommendationBox.textContent = "Please select both age and sport.";
    return;
  }

  const recommendation = getRecommendation(age, sport);
  recommendationBox.textContent = recommendation;
});
