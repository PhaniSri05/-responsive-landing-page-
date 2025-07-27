// Navbar scroll effect
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Dark/Light mode toggle
const themeToggle = document.getElementById("toggle-theme");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
