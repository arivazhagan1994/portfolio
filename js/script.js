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
    initSkillBars();

    function initSkillBars() {
    const skillItems = document.querySelectorAll(".skill-item");

    skillItems.forEach(item => {
        const percent = item.querySelector(".skill-percent").textContent;
        const progressBar = item.querySelector(".skill-progress");

        progressBar.style.width = percent;
    });
}

// Card Animation

const cards = document.querySelectorAll(".skill-card");

const cardObserver = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

const progressBars =
entry.target.querySelectorAll(".skill-progress");

progressBars.forEach(bar=>{

const percent =
bar.parentElement.previousElementSibling.textContent;

bar.style.width = percent;

});

}

});

},
{
threshold:0.2
}
);

cards.forEach(card=>{
cardObserver.observe(card);
});

// ===== PROJECT REVEAL ANIMATION =====

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
    entry.target.classList.add("show");
}

});

},
{
threshold:0.15
}
);

projectCards.forEach(card=>{
projectObserver.observe(card);
});

// ===== OPTIONAL: CLICK ENTIRE CARD =====
projectCards.forEach(card=>{
card.addEventListener("click",()=>{
    const link = card.querySelector(".live-btn");
    if(link) window.open(link.href, "_blank");
});
});


// ===== RESUME CARD ANIMATION =====

const resumeCards = document.querySelectorAll(".resume-card");

const resumeObserver = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
    entry.target.classList.add("show");
}

});

},
{
threshold:0.2
}
);

resumeCards.forEach(card=>{
resumeObserver.observe(card);
});

// ===== Scroll Reveal Animation =====
const elements = document.querySelectorAll(".about-left, .about-mini-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
});

});