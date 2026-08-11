/* ==========================================
   Learn Cyber Navbar Loader JS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const navbarContainer = document.getElementById("learnNavbar");

    if (!navbarContainer) return;


    fetch("../assets/components/learn-navbar.html")

        .then(response => {

            if (!response.ok) {

                throw new Error("Navbar component not found: " + response.status);

            }

            return response.text();

        })

        .then(htmlData => {

            navbarContainer.innerHTML = htmlData;


            /* Highlight Active Page in Learn Sub-Navbar */

            const currentPage = window.location.pathname.split("/").pop();


            document.querySelectorAll(".learn-nav-item").forEach(link => {

                const linkPage = link.getAttribute("href")?.split("/").pop();

                if (linkPage === currentPage) {

                    link.classList.add("active");

                }

            });

        })

        .catch(err => {

            console.error("Error loading Learn Navbar component:", err);

        });

});
