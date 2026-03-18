document.addEventListener("DOMContentLoaded", function () {

    // ===== SELECT ELEMENTS =====
    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");
    const typingElement = document.getElementById("typing-text");

    // ===== SCROLL EFFECT =====
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // ===== MOBILE MENU =====
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

    // ===== TYPING EFFECT =====
    const roles = ["Data Science", "AI Developer", "Boiler Operator"];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        let currentWord = roles[index];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex--);
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length+1) {
            speed = 1500;
            isDeleting = true;
        } 
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

});