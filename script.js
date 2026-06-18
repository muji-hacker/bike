// Hamburger menu toggle
document.getElementById("hamburger").addEventListener("click", function() {
  document.getElementById("nav").classList.toggle("open");
});


// Dark / Light theme toggle
document.getElementById("theme-btn").addEventListener("click", function() {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌑 Dark Mode";
});


// Open modal with product name and specs
function openModal(name, specs) {
  document.getElementById("modal-title").textContent = name;
  document.getElementById("modal-specs").textContent = specs;
  document.getElementById("modal-overlay").classList.add("active");
}

// Close modal
document.getElementById("modal-close").addEventListener("click", function() {
  document.getElementById("modal-overlay").classList.remove("active");
});

document.getElementById("modal-overlay").addEventListener("click", function(e) {
  if (e.target === this) this.classList.remove("active");
});


// Form validation on submit
document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Booking confirmed.");
  this.reset();  
});