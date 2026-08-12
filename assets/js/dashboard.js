/* ==========================================================
   SECURESPHERE
   LIVE SECURITY OPERATIONS DASHBOARD
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "SecureSphere Dashboard initialized."
    );


    /* ======================================================
       ELEMENTS
    ====================================================== */

    const threatsElement =
        document.getElementById("threatsBlocked");

    const passwordsElement =
        document.getElementById("passwordsChecked");

    const toolsElement =
        document.getElementById("securityTools");

    const uptimeElement =
        document.getElementById("systemUptime");

    const threatTrend =
        document.getElementById("threatTrend");

    const passwordTrend =
        document.getElementById("passwordTrend");

    const uptimeStatus =
        document.getElementById("uptimeStatus");

    const scoreElement =
        document.getElementById("securityScore");

    const scoreMessage =
        document.getElementById("scoreMessage");

    const threatLevelElement =
        document.getElementById("threatLevel");

    const threatMessageElement =
        document.getElementById("threatMessage");

    const riskElement =
        document.getElementById("riskPercentage");

    const activityElement =
        document.getElementById("threatActivity");

    const recommendationElement =
        document.getElementById(
            "threatRecommendation"
        );

    const scanElement =
        document.getElementById("lastScan");

    const scanStatus =
        document.getElementById("scanStatus");

    const greetingElement =
        document.getElementById("greeting");

    const dateTimeElement =
        document.getElementById(
            "currentDateTime"
        );


    /* ======================================================
       VALUES
    ====================================================== */

    let threatsBlocked =
        randomNumber(150, 190);

    let passwordsChecked =
        randomNumber(20, 60);

    const securityTools = 8;

    let securityScore =
        randomNumber(85, 94);

    let secondsSinceScan = 0;


    /* ======================================================
       RANDOM NUMBER
    ====================================================== */

    function randomNumber(min, max) {

        return Math.floor(
            Math.random() *
            (max - min + 1)
        ) + min;

    }


    /* ======================================================
       THREATS
    ====================================================== */

    function updateThreats() {

        const increase =
            randomNumber(0, 3);

        threatsBlocked += increase;


        if (threatsElement) {

            threatsElement.textContent =
                threatsBlocked.toLocaleString();

        }


        if (threatTrend) {

            threatTrend.textContent =
                increase > 0
                    ? `+${increase} blocked recently`
                    : "Monitoring threats";

        }

    }


    /* ======================================================
       PASSWORDS
    ====================================================== */

    function updatePasswords() {

        const increase =
            randomNumber(0, 2);

        passwordsChecked += increase;


        if (passwordsElement) {

            passwordsElement.textContent =
                passwordsChecked.toLocaleString();

        }


        if (passwordTrend) {

            passwordTrend.textContent =
                increase > 0
                    ? `+${increase} analyzed recently`
                    : "Analyzer ready";

        }

    }


    /* ======================================================
       TOOLS
    ====================================================== */

    function updateTools() {

        if (toolsElement) {

            toolsElement.textContent =
                securityTools;

        }

    }


    /* ======================================================
       UPTIME
    ====================================================== */

    function updateUptime() {

        const uptime =
            (
                99.70 +
                Math.random() * 0.29
            ).toFixed(2);


        if (uptimeElement) {

            uptimeElement.textContent =
                uptime + "%";

        }


        if (uptimeStatus) {

            uptimeStatus.textContent =
                "All systems operational";

        }

    }


    /* ======================================================
       SECURITY SCORE
    ====================================================== */

    function updateSecurityScore() {

        const change =
            randomNumber(-1, 1);

        securityScore += change;


        securityScore =
            Math.max(
                80,
                Math.min(
                    98,
                    securityScore
                )
            );


        if (scoreElement) {

            scoreElement.textContent =
                securityScore + "%";

        }


        updateThreatLevel();

    }


    /* ======================================================
       THREAT LEVEL
    ====================================================== */

    function updateThreatLevel() {

        const risk =
            Math.max(
                5,
                Math.min(
                    45,
                    100 - securityScore +
                    randomNumber(-3, 3)
                )
            );


        if (riskElement) {

            riskElement.textContent =
                risk + "%";

        }


        if (securityScore >= 90) {

            threatLevelElement.textContent =
                "LOW";

            threatLevelElement.className =
                "badge bg-success fs-6";


            threatMessageElement.textContent =
                "Security environment is stable. No significant threats detected.";


            if (activityElement) {

                activityElement.textContent =
                    "Normal";

            }


            if (recommendationElement) {

                recommendationElement.innerHTML = `
                    <i class="bi bi-shield-check"></i>
                    <span>
                        Continue normal security monitoring.
                    </span>
                `;

            }

        }

        else if (securityScore >= 80) {

            threatLevelElement.textContent =
                "MEDIUM";

            threatLevelElement.className =
                "badge bg-warning text-dark fs-6";


            threatMessageElement.textContent =
                "Some security events require monitoring.";


            if (activityElement) {

                activityElement.textContent =
                    "Elevated";

            }


            if (recommendationElement) {

                recommendationElement.innerHTML = `
                    <i class="bi bi-exclamation-circle"></i>
                    <span>
                        Review recent security activity
                        and strengthen weak configurations.
                    </span>
                `;

            }

        }

        else {

            threatLevelElement.textContent =
                "HIGH";

            threatLevelElement.className =
                "badge bg-danger fs-6";


            threatMessageElement.textContent =
                "Elevated security activity detected.";


            if (activityElement) {

                activityElement.textContent =
                    "High";

            }


            if (recommendationElement) {

                recommendationElement.innerHTML = `
                    <i class="bi bi-shield-exclamation"></i>
                    <span>
                        Review security alerts and
                        take corrective action.
                    </span>
                `;

            }

        }


        if (scoreMessage) {

            scoreMessage.textContent =
                `Security score currently stands at
                 ${securityScore}%.`;

        }

    }


    /* ======================================================
       DATE / TIME
    ====================================================== */

    function updateDateTime() {

        if (!dateTimeElement) {
            return;
        }


        const now =
            new Date();


        dateTimeElement.textContent =
            now.toLocaleString(
                undefined,
                {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            );

    }


    /* ======================================================
       GREETING
    ====================================================== */

    function updateGreeting() {

        if (!greetingElement) {
            return;
        }


        const hour =
            new Date().getHours();


        if (hour < 12) {

            greetingElement.textContent =
                "🌅 Good Morning";

        }

        else if (hour < 18) {

            greetingElement.textContent =
                "☀️ Good Afternoon";

        }

        else {

            greetingElement.textContent =
                "🌙 Good Evening";

        }

    }


    /* ======================================================
       LAST SCAN
    ====================================================== */

    function updateScan() {

        secondsSinceScan++;


        if (!scanElement) {
            return;
        }


        if (secondsSinceScan < 60) {

            scanElement.textContent =
                secondsSinceScan <= 1
                    ? "Just now"
                    : `${secondsSinceScan} seconds ago`;

        }

        else {

            const minutes =
                Math.floor(
                    secondsSinceScan / 60
                );


            scanElement.textContent =
                `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;

        }


        if (scanStatus) {

            scanStatus.textContent =
                "Security monitoring is active.";

        }

    }


    /* ======================================================
       DAILY SECURITY TIPS
    ====================================================== */

    const securityTips = [

        {
            category: "ACCOUNT SECURITY",
            title: "Protect Your Accounts",
            text: "Enable multi-factor authentication on your important accounts to add another layer of protection.",
            action: "Recommended: Enable MFA on email, banking and social media accounts."
        },

        {
            category: "PASSWORD SECURITY",
            title: "Use Unique Passwords",
            text: "Avoid using the same password across multiple websites and services.",
            action: "Recommended: Use a password manager to generate unique passwords."
        },

        {
            category: "PHISHING",
            title: "Verify Suspicious Links",
            text: "Attackers frequently use fake login pages and malicious links to steal credentials.",
            action: "Recommended: Check the destination URL before entering credentials."
        },

        {
            category: "SOFTWARE SECURITY",
            title: "Keep Software Updated",
            text: "Security updates frequently fix vulnerabilities that attackers can exploit.",
            action: "Recommended: Install important software and operating system updates."
        },

        {
            category: "NETWORK SECURITY",
            title: "Be Careful on Public Wi-Fi",
            text: "Untrusted networks can expose sensitive traffic and account information.",
            action: "Recommended: Avoid sensitive transactions on unknown networks."
        },

        {
            category: "DATA PROTECTION",
            title: "Maintain Secure Backups",
            text: "Backups help recover important files after ransomware or accidental deletion.",
            action: "Recommended: Maintain regular backups of important data."
        },

        {
            category: "SOCIAL ENGINEERING",
            title: "Think Before You Click",
            text: "Attackers often use urgency, fear and curiosity to manipulate users.",
            action: "Recommended: Verify unexpected requests before taking action."
        },

        {
            category: "ACCOUNT SECURITY",
            title: "Review Login Activity",
            text: "Unexpected login attempts can be an early sign of account compromise.",
            action: "Recommended: Review recent login activity regularly."
        }

    ];


    function updateSecurityTip() {

        const title =
            document.getElementById(
                "securityTipTitle"
            );

        const text =
            document.getElementById(
                "securityTip"
            );

        const action =
            document.getElementById(
                "securityTipAction"
            );

        const number =
            document.getElementById(
                "tipNumber"
            );

        const category =
            document.getElementById(
                "tipCategory"
            );

        const updated =
            document.getElementById(
                "tipUpdated"
            );


        if (!title || !text) {
            return;
        }


        const index =
            Math.floor(
                Math.random() *
                securityTips.length
            );


        const tip =
            securityTips[index];


        title.textContent =
            tip.title;

        text.textContent =
            tip.text;

        action.textContent =
            tip.action;

        category.textContent =
            tip.category;

        number.textContent =
            `TIP #${String(index + 1).padStart(2, "0")}`;

        updated.textContent =
            "Updated just now";

    }


    /* ======================================================
       LIVE CYBER NEWS
       CISA KEV FEED
    ====================================================== */

    const CISA_FEED =
        "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json";


    async function loadCyberNews() {

        const newsList =
            document.getElementById(
                "cyberNewsList"
            );

        const newsUpdated =
            document.getElementById(
                "newsUpdated"
            );


        if (!newsList) {
            return;
        }


        try {

            newsList.innerHTML = `
                <div class="news-loading">
                    <div class="spinner-border spinner-border-sm"></div>
                    Loading latest cybersecurity updates...
                </div>
            `;


            const response =
                await fetch(
                    CISA_FEED,
                    {
                        cache: "no-store"
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "CISA feed unavailable"
                );

            }


            const data =
                await response.json();


            const vulnerabilities =
                data.vulnerabilities || [];


            /* newest first */

            vulnerabilities.sort(
                (a, b) =>
                    new Date(
                        b.dateAdded
                    ) -
                    new Date(
                        a.dateAdded
                    )
            );


            const latest =
                vulnerabilities.slice(
                    0,
                    5
                );


            if (!latest.length) {

                throw new Error(
                    "No updates available"
                );

            }


            newsList.innerHTML =
                latest.map(
                    (item, index) => {

                        const date =
                            formatNewsDate(
                                item.dateAdded
                            );


                        const severity =
                            getSeverity(
                                item
                            );


                        return `

                            <article
                                class="cyber-news-item"
                            >

                                <div class="news-number">
                                    ${String(
                                        index + 1
                                    ).padStart(2, "0")}
                                </div>


                                <div class="news-content">

                                    <h4>
                                        ${escapeHTML(
                                            item.vulnerabilityName ||
                                            "Known Exploited Vulnerability"
                                        )}
                                    </h4>


                                    <p>

                                        ${escapeHTML(
                                            item.shortDescription ||
                                            "A vulnerability has been added to the CISA Known Exploited Vulnerabilities catalog."
                                        )}

                                    </p>


                                    <div class="news-meta">

                                        <span>
                                            ${escapeHTML(
                                                item.vendorProject ||
                                                "Security Advisory"
                                            )}
                                        </span>


                                        <span>
                                            ${date}
                                        </span>


                                        <span class="severity">
                                            ${severity}
                                        </span>

                                    </div>

                                </div>

                            </article>

                        `;

                    }
                ).join("");


            if (newsUpdated) {

                newsUpdated.textContent =
                    new Date().toLocaleString();

            }


        }

        catch (error) {

            console.error(
                "Cyber news error:",
                error
            );


            newsList.innerHTML = `

                <div class="news-loading">

                    <i class="bi bi-exclamation-circle"></i>

                    Unable to load the live CISA feed.
                    Please try again later.

                </div>

            `;


            if (newsUpdated) {

                newsUpdated.textContent =
                    "Feed unavailable";

            }

        }

    }


    /* ======================================================
       NEWS HELPERS
    ====================================================== */

    function formatNewsDate(date) {

        if (!date) {
            return "Recent";
        }


        return new Date(
            date
        ).toLocaleDateString(
            undefined,
            {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }
        );

    }


    function getSeverity(item) {

        const name =
            (
                item.vulnerabilityName ||
                ""
            ).toLowerCase();


        if (
            name.includes("remote code") ||
            name.includes("command injection") ||
            name.includes("authentication")
        ) {

            return "HIGH";

        }


        return "EXPLOITED";

    }


    function escapeHTML(value) {

        return String(value)
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* ======================================================
       INITIALIZE
    ====================================================== */

    updateThreats();

    updatePasswords();

    updateTools();

    updateUptime();

    updateSecurityScore();

    updateThreatLevel();

    updateGreeting();

    updateDateTime();

    updateSecurityTip();

    loadCyberNews();


    /* ======================================================
       LIVE UPDATES
    ====================================================== */

    setInterval(
        updateThreats,
        5000
    );


    setInterval(
        updatePasswords,
        7000
    );


    setInterval(
        updateSecurityScore,
        10000
    );


    setInterval(
        updateUptime,
        15000
    );


    setInterval(
        updateSecurityTip,
        15000
    );


    setInterval(
        updateDateTime,
        1000
    );


    setInterval(
        updateGreeting,
        60000
    );


    setInterval(
        updateScan,
        1000
    );


    /*
     * Refresh cyber updates every hour.
     *
     * The source itself is updated by CISA,
     * so this checks for newly published entries.
     */

    setInterval(
        loadCyberNews,
        60 * 60 * 1000
    );


});