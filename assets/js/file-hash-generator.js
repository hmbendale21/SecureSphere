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

const fileInput = document.getElementById("fileInput");

const fileName = document.getElementById("fileName");

const fileSize = document.getElementById("fileSize");

const fileType = document.getElementById("fileType");

const generateBtn = document.getElementById("generateBtn");

const clearBtn = document.getElementById("clearBtn");

const copyBtn = document.getElementById("copyBtn");

const downloadBtn = document.getElementById("downloadBtn");

copyBtn.disabled = true;

downloadBtn.disabled = true;

const hashOutput = document.getElementById("hashOutput");

const algorithmInputs = document.querySelectorAll(
    'input[name="algorithm"]'
);

/* ======================================
   File Information
====================================== */

/* ======================================
   File Icon
====================================== */

function getFileIcon(type) {

    if (type.startsWith("image")) return "🖼️";

    if (type.startsWith("video")) return "🎥";

    if (type.startsWith("audio")) return "🎵";

    if (type.includes("pdf")) return "📄";

    if (type.includes("zip")) return "📦";

    if (type.includes("text")) return "📃";

    return "📁";

}

function formatFileSize(bytes) {

    if (bytes < 1024)
        return bytes + " Bytes";

    if (bytes < 1024 * 1024)
        return (bytes / 1024).toFixed(2) + " KB";

    if (bytes < 1024 * 1024 * 1024)
        return (bytes / 1024 / 1024).toFixed(2) + " MB";

    return (bytes / 1024 / 1024 / 1024).toFixed(2) + " GB";

}

fileInput.addEventListener("change", () => {

    const file = fileInput.files[0];

    if (!file) {

        fileName.textContent = "No file selected";

        fileSize.textContent = "-";

        fileType.textContent = "-";

        return;

    }

    fileName.textContent =
        `${getFileIcon(file.type)} ${file.name}`;

    fileSize.textContent = formatFileSize(file.size);

    fileType.textContent =
        file.type || "Unknown";

});

/* ======================================
   Toast
====================================== */

const liveToast = document.getElementById("liveToast");

const toastMessage = document.getElementById("toastMessage");

const toast = new bootstrap.Toast(liveToast);

function showToast(message) {

    toastMessage.textContent = message;

    toast.show();

}

/* ======================================
   Generate File Hash
====================================== */

generateBtn.addEventListener("click", async () => {

    const file = fileInput.files[0];

    if (!file) {

        showToast("Please choose a file.");

        return;

    }

    const algorithm =
        document.querySelector(
            'input[name="algorithm"]:checked'
        ).value;

    generateBtn.disabled = true;

    generateBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2"></span>
        Generating...
    `;

    try {

        const start = performance.now();

        hashOutput.value = "Generating Hash...";

        const buffer = await file.arrayBuffer();

        let hash = "";

        if (algorithm === "MD5") {

            const wordArray =
                CryptoJS.lib.WordArray.create(buffer);

            hash = CryptoJS.MD5(wordArray).toString();

        } else {

            const hashBuffer =
                await crypto.subtle.digest(
                    algorithm,
                    buffer
                );

            hash = Array.from(
                new Uint8Array(hashBuffer)
            )
                .map(byte =>
                    byte.toString(16).padStart(2, "0")
                )
                .join("");

        }

        hashOutput.value = hash;

        copyBtn.disabled = false;

        downloadBtn.disabled = false;

        hashOutput.focus();

        hashOutput.select();

        const end = performance.now();

        showToast(
            `Hash generated in ${(end - start).toFixed(1)} ms`
        );

        hashOutput.select();
    }

    catch (error) {

        console.error(error);

        showToast("Unable to generate file hash.");

    }

    finally {

        generateBtn.disabled = false;

        generateBtn.innerHTML = `
        <i class="bi bi-lightning-charge-fill"></i>
        Generate Hash
        `;

    }

});


/* ======================================
   Copy Hash
====================================== */

copyBtn.addEventListener("click", async () => {

    const hash = hashOutput.value.trim();

    if (hash === "" || hash === "Generating Hash...") {

        showToast("No hash available to copy.");

        return;

    }

    try {

        await navigator.clipboard.writeText(hash);

        showToast("Hash copied successfully!");

        const originalText = copyBtn.innerHTML;

        copyBtn.innerHTML = `
            <i class="bi bi-check-circle-fill"></i>
            Copied!
        `;

        copyBtn.classList.remove("btn-success");
        copyBtn.classList.add("btn-primary");

        setTimeout(() => {

            copyBtn.innerHTML = originalText;

            copyBtn.classList.remove("btn-primary");
            copyBtn.classList.add("btn-success");

        }, 2000);

    } catch {

        showToast("Failed to copy hash.");

    }

});

/* ======================================
   Download Hash
====================================== */

downloadBtn.addEventListener("click", () => {

    const hash = hashOutput.value.trim();

    if (hash === "") {

        showToast("Generate a hash first.");

        return;

    }

    const algorithm = document.querySelector(
        'input[name="algorithm"]:checked'
    ).value;

    const file = fileInput.files[0];

    const fileNameOnly = file
        ? file.name.split(".")[0]
        : "file";

        const report = `

        SecureSphere File Hash Report
        
        ------------------------------------
        
        File Name : ${file.name}
        
        File Size : ${formatFileSize(file.size)}
        
        Algorithm : ${algorithm}
        
        Generated Hash :
        
        ${hash}
        
        Generated On :
        
        ${new Date().toLocaleString()}
        
        Generated By :
        
        SecureSphere
        
        `;
        
        const blob = new Blob(
        
            [report],
        
            {type:"text/plain"}
        
        );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download =
        `${fileNameOnly}-${algorithm}.txt`;

    link.click();

    URL.revokeObjectURL(url);

    showToast("Hash downloaded successfully!");

});

/* ======================================
   Clear
====================================== */

clearBtn.addEventListener("click", () => {

    fileInput.value = "";

    hashOutput.value = "";

    fileName.textContent = "No file selected";

    fileSize.textContent = "-";

    fileType.textContent = "-";

    document.querySelector(
        'input[value="SHA-256"]'
    ).checked = true;

    updateAlgorithmInfo();

    showToast("Cleared successfully.");

    copyBtn.disabled = true;

    downloadBtn.disabled = true;

});

/* ======================================
   Algorithm Information
====================================== */

const algorithmInfo = {

    "SHA-256": {

        length: "64 Characters",

        purpose: "File Integrity Verification",

        use: "Software Verification"

    },

    "SHA-512": {

        length: "128 Characters",

        purpose: "Maximum Security",

        use: "Digital Signatures"

    },

    "SHA-1": {

        length: "40 Characters",

        purpose: "Legacy Compatibility",

        use: "Older Systems"

    },

    "MD5": {

        length: "32 Characters",

        purpose: "Checksum",

        use: "Non-security Verification"

    }

};

const algoName = document.getElementById("algoName");
const hashLength = document.getElementById("hashLength");
const purpose = document.getElementById("purpose");
const recommendedUse = document.getElementById("recommendedUse");
const securityTip = document.getElementById("securityTip");

function updateAlgorithmInfo() {

    const algorithm = document.querySelector(
        'input[name="algorithm"]:checked'
    ).value;

    const info = algorithmInfo[algorithm];

    algoName.textContent = algorithm;

    hashLength.textContent = info.length;

    purpose.textContent = info.purpose;

    recommendedUse.textContent = info.use;

    securityTip.innerHTML =
        `<strong>Tip:</strong> Compare this generated hash with the official hash provided by the software vendor to verify the file has not been modified.`;

}

algorithmInputs.forEach(input => {

    input.addEventListener(
        "change",
        updateAlgorithmInfo
    );

});

updateAlgorithmInfo();