// JS: detect when navbar is at the top of the screen
window.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("mainNav");

    if (!nav) {
        console.error("Navbar not found");
        return;
    }

    window.addEventListener("scroll", () => {
        const rect = nav.getBoundingClientRect();

        if (rect.top <= window.innerHeight * 0.1) { // within top 10% of screen
            nav.classList.add("stuck");
        } else {
            nav.classList.remove("stuck");
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".timeline-section .card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");   // fade in
        } else {
          entry.target.classList.remove("show"); // fade out
        }
      });
    },
    { threshold: 0.3 } // triggers when 30% of the card is visible
  );

  cards.forEach(card => observer.observe(card));
});


