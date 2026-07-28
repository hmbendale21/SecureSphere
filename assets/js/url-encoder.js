/* ======================================
   Sidebar
====================================== */

const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebarArrow = document.getElementById("sidebarArrow");

sidebarToggle.addEventListener("click", () => {

    sidebarMenu.classList.toggle("show");

    sidebarArrow.className = sidebarMenu.classList.contains("show")
        ? "bi bi-chevron-down"
        : "bi bi-chevron-right";

});


/* ======================================
   DOM Elements
====================================== */

const inputText = document.getElementById("inputText");

const charCount = document.getElementById("charCount");

const generateBtn = document.getElementById("generateBtn");

const clearBtn = document.getElementById("clearBtn");

const copyBtn = document.getElementById("copyBtn");

const downloadBtn = document.getElementById("downloadBtn");

const outputBox = document.getElementById("hashOutput");

const operationInputs = document.querySelectorAll(
    'input[name="operation"]'
);


/* ======================================
   Character Counter
====================================== */

inputText.addEventListener("input", () => {

    charCount.textContent =
        `Characters : ${inputText.value.length}`;

});


/* ======================================
   Toast Notification
====================================== */

const liveToast = document.getElementById("liveToast");

const toastMessage = document.getElementById("toastMessage");

const toast = new bootstrap.Toast(liveToast);

function showToast(message){

    toastMessage.textContent = message;

    toast.show();

}


/* ======================================
   URL Encode / Decode
====================================== */

generateBtn.addEventListener("click", () => {

    const text = inputText.value.trim();

    if(text === ""){

        showToast("Please enter some text.");

        return;

    }

    const operation = document.querySelector(
        'input[name="operation"]:checked'
    ).value;

    generateBtn.disabled = true;

    generateBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2"></span>
        Processing...
    `;

    setTimeout(() => {

        try{

            let output = "";

            if(operation === "encode"){

                output = encodeURIComponent(text);

            }

            else{

                output = decodeURIComponent(text);

            }

            outputBox.value = output;

            outputBox.focus();

            outputBox.select();

            showToast("Operation completed successfully.");

        }

        catch(error){

            showToast("Invalid encoded URL.");

        }

        finally{

            generateBtn.disabled = false;

            generateBtn.innerHTML = `
                <i class="bi bi-lightning-charge-fill"></i>
                Process Text
            `;

        }

    },150);

});

