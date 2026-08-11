/* ==========================================================
   SecureSphere — OWASP Top 10
   Interactive JavaScript
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       TOPIC SEARCH
       ====================================================== */

    const searchInput = document.getElementById("topicSearch");

    if (searchInput) {

        const searchableSections =
            document.querySelectorAll("main .topic-section");

        searchInput.addEventListener("input", () => {

            const keyword =
                searchInput.value.toLowerCase().trim();

            searchableSections.forEach(section => {

                const text =
                    section.innerText.toLowerCase();

                section.style.display =
                    !keyword || text.includes(keyword)
                        ? ""
                        : "none";

            });

        });

    }


    /* ======================================================
       QUICK NAVIGATION
       ====================================================== */

    const navLinks =
        document.querySelectorAll(
            '.learn-link[href^="#"]'
        );

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const navbar =
                document.getElementById("learnNavbar");

            const navbarHeight =
                navbar ? navbar.offsetHeight : 0;

            const top =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight -
                25;

            window.scrollTo({
                top: Math.max(0, top),
                behavior: "smooth"
            });

            history.replaceState(
                null,
                "",
                targetId
            );

        });

    });


    /* ======================================================
       SCROLL SPY
       ====================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    if (
        sections.length &&
        navLinks.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) {
                            return;
                        }

                        const id =
                            entry.target.id;

                        navLinks.forEach(link => {

                            link.classList.toggle(
                                "active",
                                link.getAttribute("href") ===
                                `#${id}`
                            );

                        });

                    });

                },
                {
                    rootMargin:
                        "-20% 0px -65% 0px",

                    threshold: 0
                }
            );

        sections.forEach(section => {
            observer.observe(section);
        });

    }


    /* ======================================================
       INTERVIEW ACCORDION
       ====================================================== */

    const details =
        document.querySelectorAll(
            ".owasp-interview-card details"
        );

    details.forEach(detail => {

        detail.addEventListener(
            "toggle",
            () => {

                if (!detail.open) {
                    return;
                }

                details.forEach(other => {

                    if (other !== detail) {
                        other.open = false;
                    }

                });

            }
        );

    });


    /* ======================================================
       COPY CODE TO CLIPBOARD
       ====================================================== */

    function showCopyToast() {

        let toast =
            document.getElementById("copyToast");

        if (!toast) {

            toast =
                document.createElement("div");

            toast.id = "copyToast";

            toast.className = "copy-toast";

            toast.innerHTML = `
                <i class="bi bi-check-circle-fill"></i>
                <span>Copied to clipboard!</span>
            `;

            document.body.appendChild(toast);

        }

        toast.classList.add("show");

        clearTimeout(toast._timer);

        toast._timer =
            setTimeout(() => {

                toast.classList.remove("show");

            }, 1800);

    }


    document.addEventListener(
        "click",
        event => {

            const code =
                event.target.closest("code");

            if (!code) {
                return;
            }

            const text =
                code.innerText.trim();

            if (!text) {
                return;
            }


            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {

                navigator.clipboard
                    .writeText(text)
                    .then(showCopyToast)
                    .catch(error => {

                        console.error(
                            "Copy failed:",
                            error
                        );

                    });

            } else {

                const textarea =
                    document.createElement(
                        "textarea"
                    );

                textarea.value = text;

                textarea.style.position =
                    "fixed";

                textarea.style.opacity = "0";

                document.body.appendChild(
                    textarea
                );

                textarea.focus();
                textarea.select();

                try {

                    document.execCommand("copy");

                    showCopyToast();

                } catch (error) {

                    console.error(
                        "Copy failed:",
                        error
                    );

                }

                textarea.remove();

            }

        }
    );


    /* ======================================================
       OPEN SECTION FROM URL HASH
       ====================================================== */

    if (window.location.hash) {

        const target =
            document.querySelector(
                window.location.hash
            );

        if (target) {

            setTimeout(() => {

                const navbar =
                    document.getElementById(
                        "learnNavbar"
                    );

                const offset =
                    (navbar
                        ? navbar.offsetHeight
                        : 0) + 25;

                window.scrollTo({

                    top:
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        offset,

                    behavior: "smooth"

                });

            }, 300);

        }

    }

});