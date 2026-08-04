/* ==========================================
   Dashboard Loading Screen
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const status = document.getElementById("loaderStatus");

    if (!loader || !status) return;

    const messages = [

        "Initializing Dashboard...",

        "Loading Security Widgets...",

        "Preparing Threat Monitor...",

        "Welcome to SecureSphere..."

    ];

    let index = 0;

    status.textContent = messages[0];

    const interval = setInterval(() => {

        index++;

        if (index < messages.length) {

            status.textContent = messages[index];

        }

    }, 500);

    setTimeout(() => {

        clearInterval(interval);

        loader.classList.add("hide");

    }, 2200);

});