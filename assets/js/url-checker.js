/* ======================================
   Sidebar
====================================== */

const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebarArrow = document.getElementById("sidebarArrow");

sidebarToggle.addEventListener("click", () => {

    sidebarMenu.classList.toggle("show");

    sidebarArrow.className =
        sidebarMenu.classList.contains("show")
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
const protocol = document.getElementById("protocol");
const domain = document.getElementById("domain");
const tld = document.getElementById("tld");
const urlLength = document.getElementById("urlLength");
const httpsStatus = document.getElementById("httpsStatus");
const riskLevel = document.getElementById("riskLevel");
const riskScore = document.getElementById("riskScore");
const keywordCount = document.getElementById("keywordCount");
const ipStatus = document.getElementById("ipStatus");
const riskBar = document.getElementById("riskBar");

const securityTip = document.getElementById("securityTip");


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

function showToast(message) {

    toastMessage.textContent = message;

    toast.show();

}


/* ======================================
   Analyze Button
====================================== */

generateBtn.addEventListener("click", () => {

    const url = inputText.value.trim();

    if (url === "") {

        showToast("Please enter a URL.");

        return;

    }

    generateBtn.disabled = true;

    generateBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2"></span>
        Scanning...
    `;

    const startTime = performance.now();

    setTimeout(() => {

        scanURL(url, startTime);

        generateBtn.disabled = false;

        generateBtn.innerHTML = `
            <i class="bi bi-search"></i>
            Analyze URL
        `;

    }, 300);

});


/* ======================================
   Main Scanner
====================================== */

function scanURL(userURL, startTime) {

    try {

        userURL = userURL.trim();

        if (userURL === "") {

            showToast("Please enter a URL.");

            return;

        }

        if (!/^https?:\/\//i.test(userURL)) {

            userURL = "https://" + userURL;

        }

        const parsed = new URL(userURL);

        let risk = 0;

        let suspiciousWords = [];

        /* -----------------------
           Basic Information
        ----------------------- */

        protocol.textContent =
            parsed.protocol.replace(":", "").toUpperCase();

            domain.textContent =
            parsed.hostname.replace(/^www\./, "");

        tld.textContent =
            "." + parsed.hostname.split(".").pop();

        urlLength.textContent =
            userURL.length + " Characters";

        /* -----------------------
           HTTPS
        ----------------------- */

        if (parsed.protocol === "https:") {

            httpsStatus.innerHTML =
                '<span class="text-success fw-bold">✔ Secure</span>';
        }

        else {

            httpsStatus.innerHTML =
                '<span class="text-danger fw-bold">✖ Not Secure</span>';
            risk += 30;

        }

        /* -----------------------
           IP Address
        ----------------------- */

        const ipRegex =
            /^(\d{1,3}\.){3}\d{1,3}$/;

        if (ipRegex.test(parsed.hostname)) {

            ipStatus.innerHTML =
                "<span class='text-danger'>Yes</span>";

            risk += 25;

        }

        else {

            ipStatus.innerHTML =
                "<span class='text-success'>No</span>";

        }

        /* -----------------------
           Keywords
        ----------------------- */

        const keywords = [

            "login",
            "verify",
            "update",
            "password",
            "bank",
            "signin",
            "secure",
            "account"

        ];

        keywords.forEach(word => {

            if (
                userURL
                    .toLowerCase()
                    .includes(word)
            ) {

                suspiciousWords.push(word);

                risk += 5;

            }

        });

        keywordCount.textContent =
            suspiciousWords.length;

        /* -----------------------
           Long URL
        ----------------------- */

        if (userURL.length > 120) {

            risk += 20;

        }

        /* -----------------------
           @ Symbol
        ----------------------- */

        if (userURL.includes("@")) {

            risk += 20;

        }

        /* -----------------------
           Multiple //
        ----------------------- */

        if (
            userURL.substring(8).includes("//")
        ) {

            risk += 10;

        }

        performAdvancedChecks(

            parsed,

            userURL,

            suspiciousWords,

            risk,

            startTime

        );

    }

    catch (error) {

        console.error("Actual Error:", error);

        alert(error.message);

    }
}

/* ======================================
   Advanced Security Analysis
====================================== */

function performAdvancedChecks(
    parsed,
    userURL,
    suspiciousWords,
    risk,
    startTime
) {

    /* -----------------------------
       Shortened URL Detection
    ----------------------------- */

    const shorteners = [

        "bit.ly",
        "tinyurl.com",
        "t.co",
        "goo.gl",
        "ow.ly",
        "is.gd",
        "buff.ly",
        "cutt.ly"

    ];

    if (shorteners.some(site => parsed.hostname.includes(site))) {

        risk += 25;

    }

    /* -----------------------------
       Fake HTTPS in Domain
    ----------------------------- */

    const host = parsed.hostname.toLowerCase();

    if (
        host.includes("https") ||
        host.includes("secure") ||
        host.includes("login")
    ) {

        risk += 10;

    }

    /* -----------------------------
       Too Many Hyphens
    ----------------------------- */

    const hyphenCount =
        (host.match(/-/g) || []).length;

    if (hyphenCount >= 3) {

        risk += 15;

    }

    /* -----------------------------
       Limit Risk
    ----------------------------- */

    risk = Math.min(risk, 100);

    /* -----------------------------
       Risk Score
    ----------------------------- */

    riskScore.textContent =
        `${risk} / 100`;

    /* -----------------------------
       Progress Bar
    ----------------------------- */

    if (riskBar) {

        riskBar.style.width =
            risk + "%";

        riskBar.textContent =
            risk + "%";

        riskBar.className =
            "progress-bar";

        if (risk <= 20) {

            riskBar.classList.add(
                "bg-success"
            );

        }

        else if (risk <= 40) {

            riskBar.classList.add(
                "bg-info"
            );

        }

        else if (risk <= 60) {

            riskBar.classList.add(
                "bg-warning"
            );

        }

        else {

            riskBar.classList.add(
                "bg-danger"
            );

        }

    }

    /* -----------------------------
       Verdict
    ----------------------------- */

    let verdict = "";

    let badgeClass = "";

    if (risk <= 20) {

        verdict = "🟢 SAFE";

        badgeClass = "alert-success";

    }

    else if (risk <= 40) {

        verdict = "🟡 LOW RISK";

        badgeClass = "alert-info";

    }

    else if (risk <= 60) {

        verdict = "🟠 MEDIUM RISK";

        badgeClass = "alert-warning";

    }

    else {

        verdict = "🔴 HIGH RISK";

        badgeClass = "alert-danger";

    }

    riskLevel.textContent =
        verdict;

    /* -----------------------------
       Verdict Badge
    ----------------------------- */

    const verdictBadge =
        document.getElementById("verdictBadge");

    if (verdictBadge) {

        verdictBadge.className =
            `alert ${badgeClass} text-center mt-4`;

        verdictBadge.innerHTML =
            `<strong>${verdict}</strong>`;

    }

    /* -----------------------------
       Scan Time
    ----------------------------- */

    const endTime =
        performance.now();

    const scanTime =
        document.getElementById("scanTime");

    if (scanTime) {

        scanTime.textContent =
            `${(endTime - startTime).toFixed(2)} ms`;

    }

    /* -----------------------------
       Security Tips
    ----------------------------- */

    if (risk <= 20) {

        securityTip.innerHTML = `

<strong>✔ Safe Website</strong><br>

• HTTPS is enabled.<br>

• No major suspicious indicators found.<br>

• Still verify before entering sensitive information.

`;

    }

    else if (risk <= 60) {

        securityTip.innerHTML = `

<strong>⚠ Be Careful</strong><br>

• Some suspicious indicators were detected.<br>

• Verify the website carefully before logging in.

`;

    }

    else {

        securityTip.innerHTML = `

<strong>🚨 High Risk Website</strong><br>

• Multiple suspicious indicators detected.<br>

• Avoid entering passwords or payment details.

`;

    }

    /* -----------------------------
       Professional Report
    ----------------------------- */

    outputBox.value =

        `========================================
SecureSphere URL Security Report
========================================

URL
----------------------------------------
${userURL}

Protocol
----------------------------------------
${parsed.protocol.replace(":",'')};

Domain
----------------------------------------
${parsed.hostname}

Top Level Domain
----------------------------------------
.${parsed.hostname.split(".").pop()}

HTTPS
----------------------------------------
${parsed.protocol === "https:" ? "Yes" : "No"}

IP Address
----------------------------------------
${ipStatus.innerText}

Suspicious Keywords
----------------------------------------
${suspiciousWords.length ?
            suspiciousWords.join(", ")
            :
            "None"}

URL Length
----------------------------------------
${userURL.length} Characters

Risk Score
----------------------------------------
${risk}/100

Overall Verdict
----------------------------------------
${verdict}

Scan Time
----------------------------------------
${(endTime - startTime).toFixed(2)} ms

Generated By
----------------------------------------
SecureSphere

========================================`;
    showToast("URL analysis completed successfully.");

}

/* ======================================
   Copy Report
====================================== */

copyBtn.addEventListener("click", async () => {

    const report = outputBox.value.trim();

    if (report === "") {

        showToast("Nothing to copy.");

        return;

    }

    try {

        await navigator.clipboard.writeText(report);

        const original = copyBtn.innerHTML;

        copyBtn.innerHTML = `
            <i class="bi bi-check-circle-fill"></i>
            Copied!
        `;

        copyBtn.classList.remove("btn-success");
        copyBtn.classList.add("btn-primary");

        showToast("Report copied successfully.");

        setTimeout(() => {

            copyBtn.innerHTML = original;

            copyBtn.classList.remove("btn-primary");
            copyBtn.classList.add("btn-success");

        }, 2000);

    }

    catch {

        showToast("Unable to copy report.");

    }

});


/* ======================================
   Download Report
====================================== */

downloadBtn.addEventListener("click", () => {

    const report = outputBox.value.trim();

    if (report === "") {

        showToast("Nothing to download.");

        return;

    }

    const blob = new Blob(

        [report],

        {

            type: "text/plain"

        }

    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download =
        `SecureSphere_URL_Report_${new Date().getTime()
        }.txt`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    showToast("Report downloaded.");

});


/* ======================================
   Clear Scanner
====================================== */

clearBtn.addEventListener("click", () => {

    inputText.value = "";

    outputBox.value = "";

    outputBox.scrollTop = 0;

    charCount.textContent = "Characters : 0";

    protocol.textContent = "--";

    domain.textContent = "--";

    tld.textContent = "--";

    urlLength.textContent = "0";

    httpsStatus.textContent = "--";

    riskLevel.textContent = "Waiting...";

    riskScore.textContent = "0 / 100";

    keywordCount.textContent = "0";

    ipStatus.textContent = "No";

    if (riskBar) {

        riskBar.style.width = "0%";

        riskBar.textContent = "0%";

        riskBar.className = "progress-bar";

    }

    const verdictBadge =
        document.getElementById("verdictBadge");

    if (verdictBadge) {

        verdictBadge.className =
            "alert alert-success text-center mt-4";

        verdictBadge.innerHTML =
            "Waiting for Analysis...";

    }

    const scanTime =
        document.getElementById("scanTime");

    if (scanTime) {

        scanTime.textContent = "0 ms";

    }

    securityTip.innerHTML = `

<strong>Security Tip</strong><br>

✔ Verify the website domain carefully.<br>

✔ Avoid opening suspicious links.<br>

✔ HTTPS does not guarantee trust.<br>

✔ Never enter passwords on unknown websites.

`;

    inputText.focus();

    showToast("Scanner reset successfully.");

});

/* ======================================
   Initial Page State
====================================== */

window.addEventListener("load", () => {

    protocol.textContent = "--";

    domain.textContent = "--";

    tld.textContent = "--";

    urlLength.textContent = "0";

    httpsStatus.textContent = "--";

    riskLevel.textContent = "Waiting...";

    riskScore.textContent = "0 / 100";

    keywordCount.textContent = "0";

    ipStatus.textContent = "No";

});