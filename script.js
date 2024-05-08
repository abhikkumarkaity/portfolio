function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleWorkExperience() {
  var details = document.getElementById("workexp-details");
  details.style.display = (details.style.display === "none") ? "block" : "block";
}