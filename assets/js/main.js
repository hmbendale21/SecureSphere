var typed = new Typed("#typed-text", {
    strings: [
        "Protect Your Data.",
        "Detect Cyber Threats.",
        "Defend Against Attacks.",
        "Learn Cybersecurity."
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});
/* ==========================================================
   SECURESPHERE — MOBILE NAVBAR
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.getElementById("mobileMenuToggle");

    const navbarMenu =
        document.getElementById("navbarNav");


    /* ------------------------------------------------------
       CHECK ELEMENTS
    ------------------------------------------------------ */

    if (!menuButton || !navbarMenu) {

        console.warn(
            "SecureSphere mobile navbar elements not found."
        );

        return;
    }


    /* ------------------------------------------------------
       OPEN / CLOSE MENU
    ------------------------------------------------------ */

    menuButton.addEventListener("click", function () {

        navbarMenu.classList.toggle("mobile-open");

        menuButton.classList.toggle("active");


        const isOpen =
            navbarMenu.classList.contains("mobile-open");


        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    /* ------------------------------------------------------
       CLOSE MENU AFTER CLICKING NAVIGATION LINK
    ------------------------------------------------------ */

    const navLinks =
        navbarMenu.querySelectorAll(".nav-link");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navbarMenu.classList.remove(
                "mobile-open"
            );

            menuButton.classList.remove(
                "active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* ------------------------------------------------------
       CLOSE MENU WHEN WINDOW BECOMES DESKTOP SIZE
    ------------------------------------------------------ */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 991) {

            navbarMenu.classList.remove(
                "mobile-open"
            );

            menuButton.classList.remove(
                "active"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});