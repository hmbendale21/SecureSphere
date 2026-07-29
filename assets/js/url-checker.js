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

function showToast(message){

    toastMessage.textContent = message;

    toast.show();

}


/* ======================================
   URL Checker
====================================== */

generateBtn.addEventListener("click", () => {

    const text = inputText.value.trim();

    if(text === ""){

        showToast("Please enter a URL.");

        return;

    }

    generateBtn.disabled = true;

    generateBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2"></span>
        Analyzing...
    `;

    setTimeout(() => {

        analyzeURL(text);

        generateBtn.disabled = false;

        generateBtn.innerHTML = `
            <i class="bi bi-search"></i>
            Analyze URL
        `;

    },300);

});


/* ======================================
   URL Analysis
====================================== */

function analyzeURL(url){

    let report = "";

    let risk = 0;

    try{

        let formattedURL = url;

        if(
            !formattedURL.startsWith("http://") &&
            !formattedURL.startsWith("https://")
        ){

            formattedURL = "https://" + formattedURL;

        }

        const parsed = new URL(formattedURL);

        protocol.textContent = parsed.protocol.replace(":","");

        domain.textContent = parsed.hostname;

        const parts = parsed.hostname.split(".");

        tld.textContent = parts[parts.length-1];

        urlLength.textContent =
            formattedURL.length + " Characters";

        if(parsed.protocol === "https:"){

            httpsStatus.innerHTML =
                "<span class='text-success'>Secure (HTTPS)</span>";

            report += "HTTPS : Yes\n";

        }

        else{

            httpsStatus.innerHTML =
                "<span class='text-danger'>Not Secure (HTTP)</span>";

            report += "HTTPS : No\n";

            risk += 30;

        }


        report +=
`Protocol : ${parsed.protocol}

Domain : ${parsed.hostname}

Top Level Domain : .${parts[parts.length-1]}

URL Length : ${formattedURL.length}

`;

        /* IP Address Detection */

        const ipRegex =
        /^(\d{1,3}\.){3}\d{1,3}$/;

        if(ipRegex.test(parsed.hostname)){

            report +=
"Warning : Uses IP Address\n";

            risk += 25;

        }

        /* Suspicious Keywords */

        const keywords = [

            "login",

            "verify",

            "secure",

            "update",

            "bank",

            "account",

            "signin",

            "password"

        ];

        let found = [];

        keywords.forEach(word=>{

            if(
                formattedURL
                .toLowerCase()
                .includes(word)
            ){

                found.push(word);

                risk += 5;

            }

        });

        if(found.length>0){

            report +=
`Suspicious Words : ${found.join(", ")}\n`;

        }

        else{

            report +=
"Suspicious Words : None\n";

        }

        /* Long URL */

        if(formattedURL.length>120){

            risk +=20;

            report +=
"Long URL Detected\n";

        }

        /* @ Symbol */

        if(formattedURL.includes("@")){

            risk +=20;

            report +=
"Contains @ Symbol\n";

        }

        /* Double Slash */

        if(
            formattedURL.substring(8).includes("//")
        ){

            risk +=10;

            report +=
"Contains Multiple //\n";

        }

        performAdvancedChecks(
            parsed,
            formattedURL,
            found,
            risk
        );
        
        outputBox.select();
        
        showToast("Analysis completed.");

    }

    catch{

        showToast("Invalid URL.");

    }

}
/* ======================================
   Risk Level
====================================== */

function updateRisk(risk){

    if(risk <= 10){

        riskLevel.innerHTML =
        "<span class='text-success'>SAFE</span>";

        securityTip.innerHTML = `
        <strong>Security Tip:</strong><br>
        This URL appears safe based on basic checks.
        Always verify the website before entering
        personal information.
        `;

    }

    else if(risk <= 30){

        riskLevel.innerHTML =
        "<span class='text-warning'>LOW RISK</span>";

        securityTip.innerHTML = `
        <strong>Security Tip:</strong><br>
        Some minor suspicious indicators were found.
        Double-check the website before proceeding.
        `;

    }

    else if(risk <= 60){

        riskLevel.innerHTML =
        "<span class='text-warning'>MEDIUM RISK</span>";

        securityTip.innerHTML = `
        <strong>Warning:</strong><br>
        This URL contains multiple suspicious indicators.
        Be careful before opening it.
        `;

    }

    else{

        riskLevel.innerHTML =
        "<span class='text-danger'>HIGH RISK</span>";

        securityTip.innerHTML = `
        <strong>Danger!</strong><br>
        This URL looks highly suspicious.
        Avoid entering passwords or financial details.
        `;

    }

}

document.getElementById("riskScore").textContent = `${risk} / 100`;


/* ======================================
   Copy Output
====================================== */

copyBtn.addEventListener("click", async()=>{

    const text = outputBox.value.trim();

    if(text===""){

        showToast("Nothing to copy.");

        return;

    }

    try{

        await navigator.clipboard.writeText(text);

        showToast("Copied successfully!");

        const original = copyBtn.innerHTML;

        copyBtn.innerHTML = `
        <i class="bi bi-check-circle-fill"></i>
        Copied!
        `;

        copyBtn.classList.remove("btn-success");
        copyBtn.classList.add("btn-primary");

        setTimeout(()=>{

            copyBtn.innerHTML = original;

            copyBtn.classList.remove("btn-primary");
            copyBtn.classList.add("btn-success");

        },2000);

    }

    catch{

        showToast("Copy failed.");

    }

});


/* ======================================
   Download Report
====================================== */

downloadBtn.addEventListener("click",()=>{

    const report = outputBox.value.trim();

    if(report===""){

        showToast("Nothing to download.");

        return;

    }

    const blob = new Blob(

        [report],

        {

            type:"text/plain"

        }

    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = "url-security-report.txt";

    link.click();

    URL.revokeObjectURL(url);

    showToast("Report downloaded.");

});


/* ======================================
   Clear
====================================== */

clearBtn.addEventListener("click",()=>{

    inputText.value="";

    outputBox.value="";

    charCount.textContent="Characters : 0";

    protocol.textContent="--";

    domain.textContent="--";

    tld.textContent="--";

    urlLength.textContent="0";

    httpsStatus.textContent="--";

    riskLevel.textContent="Waiting...";

    securityTip.innerHTML=`
    <strong>Security Tip:</strong><br>
    Always verify a website before entering
    passwords or personal information.
    `;

    inputText.focus();

    showToast("Cleared successfully.");

});


/* ======================================
   Keyboard Shortcut
====================================== */

inputText.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.key==="Enter"){

        generateBtn.click();

    }

});

/* ======================================
   Advanced Security Analysis
====================================== */

const riskScore = document.getElementById("riskScore");
const keywordCount = document.getElementById("keywordCount");
const ipStatus = document.getElementById("ipStatus");
const riskBar = document.getElementById("riskBar");


function performAdvancedChecks(parsed, formattedURL, found, risk){

    /* -------------------------------
       Shortened URL Detection
    ------------------------------- */

    const shorteners = [

        "bit.ly",
        "tinyurl.com",
        "t.co",
        "goo.gl",
        "is.gd",
        "buff.ly",
        "cutt.ly",
        "ow.ly"

    ];

    shorteners.forEach(site=>{

        if(parsed.hostname.includes(site)){

            risk += 25;

        }

    });


    /* -------------------------------
       Fake HTTPS in Domain
    ------------------------------- */

    const host = parsed.hostname.toLowerCase();

    if(
        host.includes("https") ||
        host.includes("secure") ||
        host.includes("login")
    ){

        risk += 10;

    }


    /* -------------------------------
       Too Many Hyphens
    ------------------------------- */

    const hyphenCount =
        (host.match(/-/g) || []).length;

    if(hyphenCount >= 3){

        risk += 15;

    }


    /* -------------------------------
       IP Status
    ------------------------------- */

    const ipRegex =
    /^(\d{1,3}\.){3}\d{1,3}$/;

    if(ipRegex.test(parsed.hostname)){

        ipStatus.innerHTML =
        "<span class='text-danger'>Yes</span>";

    }

    else{

        ipStatus.innerHTML =
        "<span class='text-success'>No</span>";

    }


    /* -------------------------------
       Keyword Count
    ------------------------------- */

    keywordCount.textContent =
        found.length;


    /* -------------------------------
       Risk Score
    ------------------------------- */

    if(risk > 100){

        risk = 100;

    }

    riskScore.textContent =
        `${risk} / 100`;


    /* -------------------------------
       Progress Bar
    ------------------------------- */

    if(riskBar){

        riskBar.style.width =
            risk + "%";

        riskBar.innerHTML =
            risk + "%";

        riskBar.className =
            "progress-bar";

        if(risk <=20){

            riskBar.classList.add(
                "bg-success"
            );

        }

        else if(risk<=40){

            riskBar.classList.add(
                "bg-info"
            );

        }

        else if(risk<=60){

            riskBar.classList.add(
                "bg-warning"
            );

        }

        else{

            riskBar.classList.add(
                "bg-danger"
            );

        }

    }


    updateRisk(risk);


    /* -------------------------------
       Professional Report
    ------------------------------- */

    outputBox.value =

`==========================================
SecureSphere URL Security Report
==========================================

URL:
${formattedURL}

Protocol:
${parsed.protocol.replace(":","").toUpperCase()}

Domain:
${parsed.hostname}

Top Level Domain:
.${parsed.hostname.split(".").pop()}

HTTPS:
${parsed.protocol==="https:"?"Yes":"No"}

IP Address Used:
${ipRegex.test(parsed.hostname)?"Yes":"No"}

Suspicious Keywords:
${found.length?found.join(", "):"None"}

URL Length:
${formattedURL.length} Characters

Risk Score:
${risk}/100

Overall Verdict:
${riskLevel.textContent}

Generated:
${new Date().toLocaleString()}

Generated by SecureSphere
==========================================`;

}