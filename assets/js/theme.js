/* ==========================================
   SecureSphere Theme
========================================== */

const themeButton =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const savedTheme =
    localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add("light-theme");

    themeIcon.className =
        "bi bi-sun-fill";

}

if(themeButton){

    themeButton.addEventListener("click",()=>{

        document.body.classList.toggle(
            "light-theme"
        );

        const lightMode =
            document.body.classList.contains(
                "light-theme"
            );

        if(lightMode){

            themeIcon.className =
                "bi bi-sun-fill";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

        else{

            themeIcon.className =
                "bi bi-moon-stars";

            localStorage.setItem(
                "theme",
                "dark"
            );

        }

    });

}