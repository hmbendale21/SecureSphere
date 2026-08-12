/* ==========================================================
   SecureSphere — Cryptography Page
   cryptography.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       SEARCH CRYPTOGRAPHY TOPICS
    ====================================================== */

    const searchInput =
        document.getElementById("topicSearch");

    const sections =
        document.querySelectorAll(
            "main .topic-section"
        );


    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const keyword =
                searchInput.value
                    .toLowerCase()
                    .trim();


            sections.forEach(section => {

                const text =
                    section.innerText.toLowerCase();


                if (
                    keyword === "" ||
                    text.includes(keyword)
                ) {

                    section.style.display = "";

                } else {

                    section.style.display = "none";

                }

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


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            const navbar =
                document.getElementById(
                    "learnNavbar"
                );


            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight -
                25;


            window.scrollTo({

                top:
                    Math.max(
                        0,
                        targetPosition
                    ),

                behavior: "smooth"

            });


            /*
             * Update URL without reloading page
             */

            history.replaceState(
                null,
                "",
                targetId
            );

        });

    });


    /* ======================================================
       ACTIVE QUICK NAVIGATION ITEM
    ====================================================== */

    const topicSections =
        document.querySelectorAll(
            "main .topic-section[id]"
        );


    if (
        topicSections.length &&
        navLinks.length &&
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const currentId =
                            entry.target.id;


                        navLinks.forEach(link => {

                            const linkTarget =
                                link.getAttribute(
                                    "href"
                                );


                            link.classList.toggle(
                                "active",
                                linkTarget ===
                                `#${currentId}`
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


        topicSections.forEach(section => {

            observer.observe(section);

        });

    }


    /* ======================================================
       INTERVIEW ACCORDION
    ====================================================== */

    const interviewDetails =
        document.querySelectorAll(
            ".owasp-interview-card details"
        );


    interviewDetails.forEach(detail => {

        detail.addEventListener(
            "toggle",
            () => {

                /*
                 * Keep only one question open
                 * at a time.
                 */

                if (!detail.open) {
                    return;
                }


                interviewDetails.forEach(
                    otherDetail => {

                        if (
                            otherDetail !== detail
                        ) {

                            otherDetail.open =
                                false;

                        }

                    }
                );

            }
        );

    });


    /* ======================================================
       COPY CODE SUPPORT
    ====================================================== */

    function showCopyMessage() {

        let toast =
            document.getElementById(
                "cryptoCopyToast"
            );


        if (!toast) {

            toast =
                document.createElement(
                    "div"
                );


            toast.id =
                "cryptoCopyToast";


            toast.innerHTML = `
                <i class="bi bi-check-circle-fill"></i>
                <span>Copied to clipboard!</span>
            `;


            toast.style.position =
                "fixed";

            toast.style.bottom =
                "25px";

            toast.style.right =
                "25px";

            toast.style.zIndex =
                "9999";

            toast.style.display =
                "flex";

            toast.style.alignItems =
                "center";

            toast.style.gap =
                "8px";

            toast.style.padding =
                "12px 16px";

            toast.style.background =
                "#16a34a";

            toast.style.color =
                "#ffffff";

            toast.style.borderRadius =
                "10px";

            toast.style.fontSize =
                "13px";

            toast.style.fontWeight =
                "600";

            toast.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.20)";


            document.body.appendChild(
                toast
            );

        }


        toast.style.opacity = "1";


        clearTimeout(
            toast._timer
        );


        toast._timer =
            setTimeout(() => {

                toast.style.opacity =
                    "0";

            }, 1800);

    }


    document.addEventListener(
        "click",
        event => {

            const code =
                event.target.closest(
                    "code"
                );


            if (!code) {
                return;
            }


            const text =
                code.innerText.trim();


            if (!text) {
                return;
            }


            /*
             * Modern Clipboard API
             */

            if (
                navigator.clipboard &&
                window.isSecureContext
            ) {

                navigator.clipboard
                    .writeText(text)
                    .then(() => {

                        showCopyMessage();

                    })
                    .catch(error => {

                        console.error(
                            "Clipboard error:",
                            error
                        );

                    });


                return;

            }


            /*
             * Fallback for older browsers
             */

            const textarea =
                document.createElement(
                    "textarea"
                );


            textarea.value =
                text;


            textarea.style.position =
                "fixed";

            textarea.style.left =
                "-9999px";


            document.body.appendChild(
                textarea
            );


            textarea.focus();
            textarea.select();


            try {

                document.execCommand(
                    "copy"
                );


                showCopyMessage();

            } catch (error) {

                console.error(
                    "Copy failed:",
                    error
                );

            }


            textarea.remove();

        }
    );


    /* ======================================================
       URL HASH NAVIGATION
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


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 0;


                const position =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    navbarHeight -
                    25;


                window.scrollTo({

                    top:
                        Math.max(
                            0,
                            position
                        ),

                    behavior: "smooth"

                });

            }, 300);

        }

    }


    /* ======================================================
       SEARCH RESET WHEN PAGE IS LOADED
    ====================================================== */

    if (searchInput) {

        searchInput.value = "";

    }


    /* ======================================================
       PAGE READY
    ====================================================== */

    console.log(
        "SecureSphere Cryptography page loaded successfully."
    );

});