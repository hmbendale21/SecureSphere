const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebarArrow = document.getElementById("sidebarArrow");

sidebarToggle.addEventListener("click", () => {

    sidebarMenu.classList.toggle("show");

    if (sidebarMenu.classList.contains("show")) {

        sidebarArrow.className = "bi bi-chevron-down";

    } else {

        sidebarArrow.className = "bi bi-chevron-right";

    }

});

/* ======================================
   Character Counter
====================================== */

const inputText = document.getElementById("inputText");
const charCount = document.getElementById("charCount");

inputText.addEventListener("input", () => {

    const count = inputText.value.length;

    charCount.textContent = `Characters : ${count}`;

});

/* ======================================
   Hash Generator
====================================== */

const generateBtn = document.getElementById("generateBtn");
const hashOutput = document.getElementById("hashOutput");

const algorithmInputs = document.querySelectorAll(
    'input[name="algorithm"]'
);
async function generateHash(text, algorithm) {

    const encoder = new TextEncoder();

    const data = encoder.encode(text);

    const hashBuffer = await crypto.subtle.digest(
        algorithm,
        data
    );

    const hashArray = Array.from(new Uint8Array(hashBuffer));

    const hashHex = hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("");

    return hashHex;

}

generateBtn.addEventListener("click", async () => {

    const text = inputText.value.trim();

    if (text === "") {

        showToast("Please enter some text.");

        return;

    }

    const selectedAlgorithm = document.querySelector(
        'input[name="algorithm"]:checked'
    ).value;

    generateBtn.disabled = true;

    generateBtn.innerHTML = `
    <span class="spinner-border spinner-border-sm me-2"></span>
    Generating...
    `;

try {

    hashOutput.value = "Generating Hash...";

    let hash = "";

    if (selectedAlgorithm === "MD5") {

        hash = CryptoJS.MD5(text).toString();

    } else {

        hash = await generateHash(text, selectedAlgorithm);

    }

    hashOutput.select();

    showToast(`${selectedAlgorithm} hash generated successfully!`);

} catch (error) {

    showToast("Failed to generate hash.");

} finally {

    generateBtn.disabled = false;

    generateBtn.innerHTML = `
    <i class="bi bi-lightning-charge-fill"></i>
    Generate Hash
    `;

}

});


const copyBtn = document.getElementById("copyBtn");

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

    } catch (error) {

        showToast("Failed to copy the hash.");

    }

});

const clearBtn = document.getElementById("clearBtn");

/* ======================================
   Clear
====================================== */

clearBtn.addEventListener("click", () => {

    inputText.value = "";

    hashOutput.value = "";

    charCount.textContent = "Characters : 0";

    document.querySelector(
        'input[value="SHA-256"]'
    ).checked = true;

    inputText.focus();

});

const downloadBtn = document.getElementById("downloadBtn");

/* ======================================
   Download Hash
====================================== */

downloadBtn.addEventListener("click", () => {

    const hash = hashOutput.value.trim();

    if (hash === "" || hash === "Generating Hash...") {

        showToast("Generate a hash first.");

        return;

    }

    const blob = new Blob([hash], {
        type: "text/plain"
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${selectedAlgorithm.toLowerCase()}-hash.txt`;

    link.click();

    showToast("Hash downloaded successfully!");

    URL.revokeObjectURL(url);

});

/* ======================================
   Algorithm Information
====================================== */

const algorithmInfo = {

    "SHA-256": {

        length: "64 Characters",

        security: "High",

        use: "Integrity Verification",

        tip: "SHA-256 is secure and recommended for most applications."

    },

    "SHA-512": {

        length: "128 Characters",

        security: "Very High",

        use: "Digital Signatures",

        tip: "SHA-512 provides stronger security but generates a longer hash."

    },

    "SHA-1": {

        length: "40 Characters",

        security: "Low",

        use: "Legacy Systems",

        tip: "SHA-1 is deprecated and should not be used for new applications."

    },

    "MD5": {

        length: "32 Characters",

        security: "Broken",

        use: "Checksum Only",

        tip: "MD5 is cryptographically broken and should never be used for security."

    }

};

const algoName = document.getElementById("algoName");
const hashLength = document.getElementById("hashLength");
const securityLevel = document.getElementById("securityLevel");
const recommendedUse = document.getElementById("recommendedUse");
const securityTip = document.getElementById("securityTip");

algorithmInputs.forEach(input => {

    input.addEventListener("change", () => {

        const selected = input.value;

        const info = algorithmInfo[selected];

        algoName.textContent = selected;

        hashLength.textContent = info.length;

        securityLevel.textContent = info.security;

        recommendedUse.textContent = info.use;

        securityTip.textContent = info.tip;

    });

});

/* ======================================
   Toast Notification
====================================== */

const liveToast = document.getElementById("liveToast");
const toastMessage = document.getElementById("toastMessage");

const toast = new bootstrap.Toast(liveToast);

function showToast(message) {

    toastMessage.textContent = message;

    toast.show();

}

inputText.addEventListener("keydown", (e) => {

    if (e.ctrlKey && e.key === "Enter") {

        generateBtn.click();

    }

});
