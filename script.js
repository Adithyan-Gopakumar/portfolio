/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("active");
    navbar.classList.toggle("active");

});


/* Close mobile navigation after clicking a link */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navbar.classList.remove("active");

    });

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById("current-year");

yearElement.textContent =
    new Date().getFullYear();


/* =========================================================
   ESC KEY CLOSES MOBILE MENU
========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        menuToggle.classList.remove("active");
        navbar.classList.remove("active");

    }

});