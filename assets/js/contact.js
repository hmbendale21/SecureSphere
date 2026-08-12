/* ==========================================================
   SECURESPHERE — CONTACT PAGE
   contact.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");
    const formSuccess = document.getElementById("formSuccess");

    const FORMSPREE_URL =
        "https://formspree.io/f/xwlebpzz";


    /* ======================================================
       CONTACT FORM
    ====================================================== */

    if (contactForm) {

        contactForm.addEventListener("submit", async (event) => {

            event.preventDefault();


            /* ----------------------------------------------
               GET FIELDS
            ---------------------------------------------- */

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const subject = document.getElementById("subject");
            const message = document.getElementById("message");


            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const subjectError = document.getElementById("subjectError");
            const messageError = document.getElementById("messageError");


            /* ----------------------------------------------
               CLEAR OLD ERRORS
            ---------------------------------------------- */

            nameError.textContent = "";
            emailError.textContent = "";
            subjectError.textContent = "";
            messageError.textContent = "";

            name.classList.remove("is-invalid");
            email.classList.remove("is-invalid");
            subject.classList.remove("is-invalid");
            message.classList.remove("is-invalid");


            let valid = true;


            /* ----------------------------------------------
               NAME
            ---------------------------------------------- */

            if (name.value.trim() === "") {

                nameError.textContent =
                    "Please enter your name.";

                name.classList.add("is-invalid");

                valid = false;

            } else if (name.value.trim().length < 2) {

                nameError.textContent =
                    "Name must contain at least 2 characters.";

                name.classList.add("is-invalid");

                valid = false;

            }


            /* ----------------------------------------------
               EMAIL
            ---------------------------------------------- */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (email.value.trim() === "") {

                emailError.textContent =
                    "Please enter your email address.";

                email.classList.add("is-invalid");

                valid = false;

            } else if (!emailPattern.test(email.value.trim())) {

                emailError.textContent =
                    "Please enter a valid email address.";

                email.classList.add("is-invalid");

                valid = false;

            }


            /* ----------------------------------------------
               SUBJECT
            ---------------------------------------------- */

            if (subject.value.trim() === "") {

                subjectError.textContent =
                    "Please enter a subject.";

                subject.classList.add("is-invalid");

                valid = false;

            } else if (subject.value.trim().length < 3) {

                subjectError.textContent =
                    "Subject must contain at least 3 characters.";

                subject.classList.add("is-invalid");

                valid = false;

            }


            /* ----------------------------------------------
               MESSAGE
            ---------------------------------------------- */

            if (message.value.trim() === "") {

                messageError.textContent =
                    "Please enter your message.";

                message.classList.add("is-invalid");

                valid = false;

            } else if (message.value.trim().length < 10) {

                messageError.textContent =
                    "Message must contain at least 10 characters.";

                message.classList.add("is-invalid");

                valid = false;

            }


            /* ----------------------------------------------
               STOP IF INVALID
            ---------------------------------------------- */

            if (!valid) {

                const firstInvalid =
                    contactForm.querySelector(".is-invalid");

                if (firstInvalid) {
                    firstInvalid.focus();
                }

                return;
            }


            /* ----------------------------------------------
               DISABLE BUTTON
            ---------------------------------------------- */

            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            const originalButtonHTML =
                submitButton.innerHTML;


            submitButton.disabled = true;

            submitButton.innerHTML = `
                <span
                    class="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true">
                </span>
                Sending...
            `;


            /* ----------------------------------------------
               SEND TO FORMSPREE
            ---------------------------------------------- */

            try {

                const formData =
                    new FormData(contactForm);


                const response =
                    await fetch(
                        FORMSPREE_URL,
                        {
                            method: "POST",

                            body: formData,

                            headers: {
                                "Accept": "application/json"
                            }
                        }
                    );


                /* ------------------------------------------
                   SUCCESS
                ------------------------------------------ */

                if (response.ok) {

                    contactForm.reset();


                    if (formSuccess) {

                        formSuccess.hidden = false;

                        formSuccess.innerHTML = `
                            <i class="bi bi-check-circle-fill"></i>

                            <div>

                                <strong>
                                    Message Sent Successfully!
                                </strong>

                                <p>
                                    Thank you for contacting
                                    SecureSphere. Your message has
                                    been submitted successfully.
                                </p>

                            </div>
                        `;

                    }


                    submitButton.innerHTML = `
                        <i class="bi bi-check-circle-fill me-2"></i>
                        Message Sent
                    `;


                    /* --------------------------------------
                       SCROLL TO SUCCESS
                    -------------------------------------- */

                    if (formSuccess) {

                        setTimeout(() => {

                            formSuccess.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });

                        }, 150);

                    }


                    /* --------------------------------------
                       RESET BUTTON
                    -------------------------------------- */

                    setTimeout(() => {

                        submitButton.disabled = false;

                        submitButton.innerHTML =
                            originalButtonHTML;

                    }, 3000);

                }


                /* ------------------------------------------
                   FORMSPREE ERROR
                ------------------------------------------ */

                else {

                    let errorMessage =
                        "Unable to send your message. Please try again.";


                    try {

                        const data =
                            await response.json();


                        if (
                            data &&
                            data.errors &&
                            data.errors.length > 0
                        ) {

                            errorMessage =
                                data.errors
                                    .map(error => error.message)
                                    .join(" ");

                        }

                    } catch (error) {

                        console.log(
                            "Could not read Formspree error."
                        );

                    }


                    throw new Error(errorMessage);

                }

            }


            /* ----------------------------------------------
               NETWORK / SERVER ERROR
            ---------------------------------------------- */

            catch (error) {

                console.error(
                    "Contact form error:",
                    error
                );


                if (formSuccess) {

                    formSuccess.hidden = false;

                    formSuccess.innerHTML = `
                        <i
                            class="bi bi-exclamation-triangle-fill"
                            style="color:#ef4444;">
                        </i>

                        <div>

                            <strong style="color:#ef4444;">
                                Message Not Sent
                            </strong>

                            <p>
                                ${error.message ||
                                "Something went wrong. Please try again."}
                            </p>

                        </div>
                    `;

                }


                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalButtonHTML;

            }

        });

    }


    /* ======================================================
       REMOVE ERROR WHILE TYPING
    ====================================================== */

    const fields = [

        {
            input: "name",
            error: "nameError"
        },

        {
            input: "email",
            error: "emailError"
        },

        {
            input: "subject",
            error: "subjectError"
        },

        {
            input: "message",
            error: "messageError"
        }

    ];


    fields.forEach(field => {

        const input =
            document.getElementById(field.input);

        const error =
            document.getElementById(field.error);


        if (!input || !error) return;


        input.addEventListener("input", () => {

            input.classList.remove("is-invalid");

            error.textContent = "";

        });

    });


    /* ======================================================
       HIDE SUCCESS WHEN USER STARTS NEW MESSAGE
    ====================================================== */

    if (contactForm && formSuccess) {

        contactForm.addEventListener(
            "input",
            () => {

                formSuccess.hidden = true;

            }
        );

    }


    /* ======================================================
       FAQ ACCORDION
    ====================================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-card details"
        );


    faqItems.forEach(item => {

        item.addEventListener("toggle", () => {

            if (!item.open) return;


            faqItems.forEach(otherItem => {

                if (otherItem !== item) {

                    otherItem.open = false;

                }

            });

        });

    });


    /* ======================================================
       SMOOTH INTERNAL LINKS
    ====================================================== */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(link => {

        link.addEventListener("click", (event) => {

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


            if (!target) return;


            event.preventDefault();


            const navbar =
                document.querySelector(
                    ".custom-navbar"
                );


            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 0;


            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight -
                20;


            window.scrollTo({

                top: Math.max(
                    0,
                    targetPosition
                ),

                behavior: "smooth"

            });

        });

    });


    /* ======================================================
       ACTIVE CONTACT NAVBAR
    ====================================================== */

    const navLinks =
        document.querySelectorAll(
            ".custom-navbar .nav-link"
        );


    navLinks.forEach(link => {

        const href =
            link.getAttribute("href");


        if (
            href &&
            href.includes("contact.html")
        ) {

            link.classList.add("active");

        }

    });


    console.log(
        "SecureSphere Contact page loaded successfully."
    );

});