document.addEventListener("DOMContentLoaded", function () {

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll Effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Toggle Menu
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close Menu on Click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

});