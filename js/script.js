document.addEventListener("DOMContentLoaded", () => {

    initHeaderScroll();
    initMobileMenu();
    initTypingEffect();
    initSkillBars();
    initSkillCardAnimation();
    initProjectAnimation();
    initResumeAnimation();
    initAboutAnimation();
    initAchievementAnimation();
    initBackToTop();

});

/* =========================
   HEADER SCROLL
========================= */

function initHeaderScroll() {

    const header = document.getElementById("header");

    if (!header) return;

    window.addEventListener("scroll", () => {
        header.classList.toggle(
            "scrolled",
            window.scrollY > 50
        );
    });
}

/* =========================
   MOBILE MENU
========================= */

function initMobileMenu() {

    const menuToggle =
        document.getElementById("menu-toggle");

    const navMenu =
        document.getElementById("nav-menu");

    const navLinks =
        document.querySelectorAll(".nav-link");

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
}

/* =========================
   TYPING EFFECT
========================= */

function initTypingEffect() {

    const typingElement =
        document.getElementById("typing-text");

    if (!typingElement) return;

    const roles = [
        "Data Science",
        "AI Developer",
        "Boiler Operator"
    ];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {

        const currentWord =
            roles[index];

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex
            );

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        let speed = isDeleting ? 50 : 100;

        if (
            !isDeleting &&
            charIndex > currentWord.length
        ) {
            isDeleting = true;
            speed = 1500;
        }

        if (
            isDeleting &&
            charIndex < 0
        ) {
            isDeleting = false;
            index =
                (index + 1) %
                roles.length;
        }

        setTimeout(type, speed);
    }

    type();
}

/* =========================
   SKILL BARS
========================= */

function initSkillBars() {

    const skillItems =
        document.querySelectorAll(".skill-item");

    skillItems.forEach(item => {

        const percent =
            item.querySelector(".skill-percent")
                .textContent;

        const progress =
            item.querySelector(".skill-progress");

        progress.style.width = percent;
    });
}

/* =========================
   SKILL CARDS
========================= */

function initSkillCardAnimation() {

    const skillCards =
        document.querySelectorAll(".skill-card");

    const skillObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.2
        });

    skillCards.forEach(card => {
        skillObserver.observe(card);
    });
}

/* =========================
   PROJECTS
========================= */

function initProjectAnimation() {

    const projectCards =
        document.querySelectorAll(".project-card");

    const projectObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.15
        });

    projectCards.forEach(card => {
        projectObserver.observe(card);
    });
}

/* =========================
   RESUME
========================= */

function initResumeAnimation() {

    const resumeCards =
        document.querySelectorAll(".resume-card");

    const resumeObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.2
        });

    resumeCards.forEach(card => {
        resumeObserver.observe(card);
    });
}

/* =========================
   ABOUT
========================= */

function initAboutAnimation() {

    const aboutElements =
        document.querySelectorAll(
            ".about-left, .about-mini-card"
        );

    const aboutObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";
                }

            });

        }, {
            threshold: 0.2
        });

    aboutElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform =
            "translateY(30px)";
        el.style.transition =
            "all 0.6s ease";

        aboutObserver.observe(el);
    });
}

/* =========================
   ACHIEVEMENTS
========================= */

function initAchievementAnimation() {

    const achievementCards =
        document.querySelectorAll(
            ".achievement-card"
        );

    const achievementObserver =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        }, {
            threshold: 0.2
        });

    achievementCards.forEach(card => {
        achievementObserver.observe(card);
    });
}

/* =========================
   BACK TO TOP
========================= */

function initBackToTop() {

    const topBtn =
        document.getElementById("topBtn");

    if (!topBtn) return;

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
}

/* =========================
   WHATSAPP
========================= */

function sendWhatsApp() {

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;

    const text =
`Hello,
Name: ${name}
Email: ${email}

Message:
${message}`;

    const phone = "918883095531";

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
        "_blank"
    );
}