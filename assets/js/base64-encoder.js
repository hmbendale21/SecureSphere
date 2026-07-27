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
   Toast
====================================== */

const liveToast = document.getElementById("liveToast");

const toastMessage = document.getElementById("toastMessage");

const toast = new bootstrap.Toast(liveToast);

function showToast(message){

    toastMessage.textContent = message;

    toast.show();

}

/* ======================================
   Encode / Decode
====================================== */

generateBtn.addEventListener("click",()=>{

    const text = inputText.value.trim();

    if(text===""){

        showToast("Please enter some text.");

        return;

    }

    const operation =
        document.querySelector(
            'input[name="operation"]:checked'
        ).value;

    generateBtn.disabled=true;

    generateBtn.innerHTML=
    `
    <span class="spinner-border spinner-border-sm me-2"></span>

    Processing...
    `;

    setTimeout(()=>{

        try{

            let output="";

            if(operation==="encode"){

                output=btoa(text);

            }

            else{

                output=atob(text);

            }

            outputBox.value=output;

            outputBox.select();

            showToast("Operation completed successfully.");

        }

        catch(error){

            showToast("Invalid Base64 input.");

        }

        finally{

            generateBtn.disabled=false;

            generateBtn.innerHTML=
            `
            <i class="bi bi-lightning-charge-fill"></i>

            Process Text
            `;

        }

    },400);

});


/* ======================================
   Copy Output
====================================== */

copyBtn.addEventListener("click", async () => {

    const output = outputBox.value.trim();

    if (output === "") {

        showToast("Nothing to copy.");

        return;

    }

    try {

        await navigator.clipboard.writeText(output);

        showToast("Copied successfully!");

        const original = copyBtn.innerHTML;

        copyBtn.innerHTML = `
        <i class="bi bi-check-circle-fill"></i>
        Copied!
        `;

        copyBtn.classList.remove("btn-success");
        copyBtn.classList.add("btn-primary");

        setTimeout(() => {

            copyBtn.innerHTML = original;

            copyBtn.classList.remove("btn-primary");
            copyBtn.classList.add("btn-success");

        }, 2000);

    } catch {

        showToast("Failed to copy.");

    }

});

/* ======================================
   Clear
====================================== */

clearBtn.addEventListener("click", () => {

    inputText.value = "";

    outputBox.value = "";

    charCount.textContent = "Characters : 0";

    document.querySelector(
        'input[value="encode"]'
    ).checked = true;

    inputText.focus();

    showToast("Cleared successfully.");

});

/* ======================================
   Download
====================================== */

downloadBtn.addEventListener("click", () => {

    const output = outputBox.value.trim();

    if (output === "") {

        showToast("Nothing to download.");

        return;

    }

    const operation =
        document.querySelector(
            'input[name="operation"]:checked'
        ).value;

    const blob = new Blob([output], {

        type: "text/plain"

    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${operation}-base64.txt`;

    link.click();

    URL.revokeObjectURL(url);

    showToast("Downloaded successfully!");

});

/* ======================================
   Keyboard Shortcut
====================================== */

inputText.addEventListener("keydown", (e) => {

    if (e.ctrlKey && e.key === "Enter") {

        generateBtn.click();

    }

});

/* ======================================
   Information Cards
====================================== */

const operationType = document.getElementById("operationType");
const outputFormat = document.getElementById("outputFormat");
const purpose = document.getElementById("purpose");
const usage = document.getElementById("usage");
const securityTip = document.getElementById("securityTip");

function updateInfo() {

    const operation =
        document.querySelector(
            'input[name="operation"]:checked'
        ).value;

    if (operation === "encode") {

        operationType.textContent = "Encode";

        outputFormat.textContent = "Base64";

        purpose.textContent = "Data Encoding";

        usage.textContent = "APIs, JWT, Email";

        securityTip.innerHTML = `
        <strong>Important:</strong>
        Base64 is NOT encryption.
        Anyone can decode Base64 instantly.
        `;

    }

    else {

        operationType.textContent = "Decode";

        outputFormat.textContent = "Plain Text";

        purpose.textContent = "Recover Original Data";

        usage.textContent = "Debugging, API Testing";

        securityTip.innerHTML = `
        <strong>Decoded Successfully.</strong>
        Verify the decoded content before using it.
        `;

    }

}

operationInputs.forEach(input => {

    input.addEventListener("change", updateInfo);

});

updateInfo();