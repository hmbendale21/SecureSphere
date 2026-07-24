const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebarArrow = document.getElementById("sidebarArrow");

sidebarToggle.addEventListener("click", () => {

    sidebarMenu.classList.toggle("show");

    if(sidebarMenu.classList.contains("show")){

        sidebarArrow.className="bi bi-chevron-down";

    }else{

        sidebarArrow.className="bi bi-chevron-right";

    }

});