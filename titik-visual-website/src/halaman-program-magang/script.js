document.addEventListener("DOMContentLoaded", function () {

  const filterButtons = document.querySelectorAll(".filter-btn");
  const searchInput = document.querySelector(".search-bar input");
  const internshipCards = document.querySelectorAll(".internship-card");

  let activeFilter = "Semua";

  // Function to filter internship cards by category and search text
  function filterCards() {
    const searchTerm = searchInput.value.toLowerCase();

    internshipCards.forEach(card => {
      const cardCategories = Array.from(card.querySelectorAll(".card-tags .tag")).map(tag => tag.textContent.toLowerCase());
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector(".card-body > p").textContent.toLowerCase();

      // Check if card matches active filter or filter is "semua"
      const matchesFilter = (activeFilter.toLowerCase() === "semua") || cardCategories.some(cat => cat === activeFilter.toLowerCase());

      // Check if title or description contains search term
      const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);

      if (matchesFilter && matchesSearch) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

  // Filter buttons click event
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.textContent.trim();
      filterCards();
    });
  });

  // Search input event
  searchInput.addEventListener("input", () => {
    filterCards();
  });

  // Initial filter to show all
  filterCards();

});
