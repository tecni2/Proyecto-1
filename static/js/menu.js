// main.js
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
  
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open"); // Activa o desactiva la clase "open" al menú
    });
  });
  