document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("input");
  const header = document.querySelector("header");

  // Smooth Scroll Effect for Header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "#cc0000";
      header.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    } else {
      header.style.background = "#ff4d4d";
      header.style.boxShadow = "none";
    }
  });

  // Search Box Animation
  searchInput.addEventListener("focus", () => {
    searchInput.style.borderColor = "#ffcc00";
    searchInput.style.boxShadow = "0px 4px 10px rgba(255, 204, 0, 0.5)";
  });

  searchInput.addEventListener("blur", () => {
    searchInput.style.borderColor = "white";
    searchInput.style.boxShadow = "none";
  });
});
