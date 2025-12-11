document.addEventListener("DOMContentLoaded", () => {
  // Add page-loaded class to body for fade-in effect
  document.body.classList.add("page-loaded");

  // Active menu
  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function(){
      document.querySelectorAll(".nav a").forEach(x=>x.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Service animation
  const cards = document.querySelectorAll(".service-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("show");
      }
    });
  },{threshold:0.2});

  cards.forEach(card => observer.observe(card));

});
