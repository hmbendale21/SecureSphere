/* ==========================================
   SecureSphere Page Transition
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("fade-in");

    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (

            !href ||

            href.startsWith("#") ||

            href.startsWith("http") ||

            href.startsWith("mailto:") ||

            href.startsWith("tel:") ||

            link.target === "_blank" ||

            link.hasAttribute("download")

        ){

            return;

        }

        let isNavigating = false;

        link.addEventListener("click", (e) => {
        
            if (isNavigating) return;
        
            isNavigating = true;
        
            e.preventDefault();
        
            document.body.classList.remove("fade-in");
        
            document.body.classList.add("fade-out");
        
            setTimeout(() => {
        
                window.location.href = href;
        
            }, 400);
        
        });

    });

});

window.addEventListener("pageshow", () => {

    document.body.classList.remove("fade-out");

    document.body.classList.add("fade-in");

});