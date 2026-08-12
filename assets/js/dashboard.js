/* ==========================================================
   SECURESPHERE
   LIVE SECURITY OPERATIONS DASHBOARD
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("SecureSphere Dashboard initialized.");


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
        document.getElementById("threatRecommendation");

    const scanElement =
        document.getElementById("lastScan");

    const scanStatus =
        document.getElementById("scanStatus");

    const greetingElement =
        document.getElementById("greeting");

    const dateTimeElement =
        document.getElementById("currentDateTime");

    const newsList =
        document.getElementById("cyberNewsList");

    const newsUpdated =
        document.getElementById("newsUpdated");

    const newsLiveStatus =
        document.querySelector(".news-live-status");


    /* ======================================================
       HELPER
    ====================================================== */

    function randomNumber(min, max) {

        return Math.floor(
            Math.random() *
            (max - min + 1)
        ) + min;

    }


    /* ======================================================
       PERSISTENT DASHBOARD NUMBERS
       
       These values stay between page refreshes.
    ====================================================== */

    let threatsBlocked =
        Number(
            localStorage.getItem(
                "secureSphereThreats"
            )
        ) || 1247;


    let passwordsChecked =
        Number(
            localStorage.getItem(
                "secureSpherePasswords"
            )
        ) || 386;


    let securityScore =
        Number(
            localStorage.getItem(
                "secureSphereScore"
            )
        ) || 91;


    const securityTools = 8;


    /* ======================================================
       SAVE VALUES
    ====================================================== */

    function saveDashboardData() {

        localStorage.setItem(
            "secureSphereThreats",
            threatsBlocked
        );

        localStorage.setItem(
            "secureSpherePasswords",
            passwordsChecked
        );

        localStorage.setItem(
            "secureSphereScore",
            securityScore
        );

    }


    /* ======================================================
       THREATS BLOCKED
    ====================================================== */

    function updateThreats() {

        /*
         * Simulated security telemetry for the dashboard.
         * The value persists between page refreshes.
         */

        const increase =
            randomNumber(0, 3);

        threatsBlocked += increase;


        if (threatsElement) {

            threatsElement.textContent =
                threatsBlocked.toLocaleString();

        }


        if (threatTrend) {

            if (increase > 0) {

                threatTrend.textContent =
                    `+${increase} blocked recently`;

            } else {

                threatTrend.textContent =
                    "Monitoring threats...";

            }

        }


        saveDashboardData();

    }


    /* ======================================================
       PASSWORDS CHECKED
    ====================================================== */

    function updatePasswords() {

        /*
         * Simulated password-analysis telemetry.
         */

        const increase =
            randomNumber(0, 2);

        passwordsChecked += increase;


        if (passwordsElement) {

            passwordsElement.textContent =
                passwordsChecked.toLocaleString();

        }


        if (passwordTrend) {

            if (increase > 0) {

                passwordTrend.textContent =
                    `+${increase} analyzed recently`;

            } else {

                passwordTrend.textContent =
                    "Analyzer ready";

            }

        }


        saveDashboardData();

    }


    /* ======================================================
       SECURITY TOOLS
    ====================================================== */

    function updateTools() {

        if (toolsElement) {

            toolsElement.textContent =
                securityTools;

        }

    }


    /* ======================================================
       SYSTEM UPTIME
    ====================================================== */

    function updateUptime() {

        const uptime =
            (
                99.70 +
                Math.random() * 0.29
            ).toFixed(2);


        if (uptimeElement) {

            uptimeElement.textContent =
                `${uptime}%`;

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

        /*
         * Small controlled movement so the score
         * doesn't jump unrealistically.
         */

        const change =
            randomNumber(-1, 1);

        securityScore += change;


        securityScore =
            Math.max(
                82,
                Math.min(
                    98,
                    securityScore
                )
            );


        if (scoreElement) {

            scoreElement.textContent =
                `${securityScore}%`;

        }


        if (scoreMessage) {

            scoreMessage.textContent =
                `Security score currently stands at ${securityScore}%.`;

        }


        saveDashboardData();

        updateThreatLevel();

    }


    /* ======================================================
       THREAT LEVEL
    ====================================================== */

    function updateThreatLevel() {

        const risk =
            Math.max(
                4,
                Math.min(
                    40,
                    100 -
                    securityScore +
                    randomNumber(-2, 2)
                )
            );


        if (riskElement) {

            riskElement.textContent =
                `${risk}%`;

        }


        if (
            securityScore >= 90 &&
            threatLevelElement
        ) {

            threatLevelElement.textContent =
                "LOW";

            threatLevelElement.className =
                "badge bg-success fs-6";


            if (threatMessageElement) {

                threatMessageElement.textContent =
                    "Security environment is stable. No significant threats detected.";

            }


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

        else if (
            securityScore >= 80 &&
            threatLevelElement
        ) {

            threatLevelElement.textContent =
                "MEDIUM";

            threatLevelElement.className =
                "badge bg-warning text-dark fs-6";


            if (threatMessageElement) {

                threatMessageElement.textContent =
                    "Some security events require monitoring.";

            }


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

            if (threatLevelElement) {

                threatLevelElement.textContent =
                    "HIGH";

                threatLevelElement.className =
                    "badge bg-danger fs-6";

            }


            if (threatMessageElement) {

                threatMessageElement.textContent =
                    "Elevated security activity detected.";

            }


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

    }


    /* ======================================================
       DATE & TIME
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
       LAST SECURITY SCAN
    ====================================================== */

    let secondsSinceScan = 0;


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

        if (action) {
            action.textContent =
                tip.action;
        }

        if (category) {
            category.textContent =
                tip.category;
        }

        if (number) {
            number.textContent =
                `TIP #${String(index + 1).padStart(2, "0")}`;
        }

        if (updated) {
            updated.textContent =
                "Updated just now";
        }

    }


    /* ======================================================
       LIVE CISA KEV NEWS
       
       Official CISA-maintained GitHub mirror.
       This mirror is updated whenever CISA updates
       the Known Exploited Vulnerabilities catalog.
    ====================================================== */

    const CISA_KEV_FEED =
        "https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json";


    /* ======================================================
       NEWS DATE
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


    /* ======================================================
       NEWS SEVERITY
    ====================================================== */

    function getSeverity(item) {

        const text =
            (
                `${item.vulnerabilityName || ""} ` +
                `${item.shortDescription || ""}`
            ).toLowerCase();


        if (
            text.includes("remote code execution") ||
            text.includes("command injection") ||
            text.includes("authentication bypass") ||
            text.includes("sql injection")
        ) {

            return "HIGH";

        }


        return "EXPLOITED";

    }


    /* ======================================================
       HTML ESCAPE
    ====================================================== */

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
       NEWS STATUS
    ====================================================== */

    function setNewsStatus(
        live,
        text
    ) {

        if (!newsLiveStatus) {
            return;
        }


        const dot =
            newsLiveStatus.querySelector(
                ".live-dot"
            );


        if (live) {

            newsLiveStatus.innerHTML = `
                <span class="live-dot"></span>
                Live Feed
            `;

        }

        else {

            newsLiveStatus.innerHTML = `
                <span
                    class="live-dot"
                    style="
                        background:#f0b900;
                        box-shadow:0 0 10px rgba(240,185,0,.6);
                    "
                ></span>
                ${text}
            `;

        }

    }


    /* ======================================================
       LOAD CYBER NEWS
    ====================================================== */

    async function loadCyberNews() {

        if (!newsList) {
            return;
        }


        newsList.innerHTML = `
            <div class="news-loading">
                <div class="spinner-border spinner-border-sm"></div>
                Fetching latest cybersecurity updates...
            </div>
        `;


        try {

            const response =
                await fetch(
                    CISA_KEV_FEED,
                    {
                        method: "GET",
                        cache: "no-store"
                    }
                );


            if (!response.ok) {

                throw new Error(
                    `Feed request failed: ${response.status}`
                );

            }


            const data =
                await response.json();


            const vulnerabilities =
                Array.isArray(
                    data.vulnerabilities
                )
                    ? data.vulnerabilities
                    : [];


            if (!vulnerabilities.length) {

                throw new Error(
                    "No vulnerability data found."
                );

            }


            /*
             * Newest vulnerabilities first.
             */

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


                        const cve =
                            item.cveID ||
                            "CVE";


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
                                            cve
                                        )}
                                    </h4>


                                    <p>
                                        ${escapeHTML(
                                            item.shortDescription ||
                                            "Known exploited vulnerability listed by CISA."
                                        )}
                                    </p>


                                    <div class="news-meta">

                                        <span>
                                            ${escapeHTML(
                                                cve
                                            )}
                                        </span>


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
                    `Updated ${new Date().toLocaleString()}`;

            }


            setNewsStatus(
                true,
                "Live Feed"
            );


            console.log(
                `CISA KEV: ${data.count || vulnerabilities.length} vulnerabilities loaded.`
            );

        }

        catch (error) {

            console.error(
                "Cyber news error:",
                error
            );


            /*
             * We do NOT pretend this is live data.
             * Instead we show a useful fallback.
             */

            const fallbackNews = [

                {
                    cve: "CISA KEV",
                    title:
                        "Known Exploited Vulnerabilities",
                    description:
                        "The CISA Known Exploited Vulnerabilities catalog tracks vulnerabilities known to be exploited in real-world attacks.",
                    type:
                        "CISA Advisory"
                },

                {
                    cve: "PRIORITY",
                    title:
                        "Prioritize Known Exploited Vulnerabilities",
                    description:
                        "Security teams should prioritize remediation of vulnerabilities listed in the CISA KEV catalog.",
                    type:
                        "Threat Intelligence"
                },

                {
                    cve: "PATCH",
                    title:
                        "Apply Vendor Security Updates",
                    description:
                        "Review affected products and apply available vendor patches or mitigations as soon as possible.",
                    type:
                        "Security Advisory"
                }

            ];


            newsList.innerHTML =
                fallbackNews.map(
                    (item, index) => `

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
                                    ${item.title}
                                </h4>


                                <p>
                                    ${item.description}
                                </p>


                                <div class="news-meta">

                                    <span>
                                        ${item.cve}
                                    </span>

                                    <span>
                                        CISA
                                    </span>

                                    <span class="severity">
                                        ${item.type}
                                    </span>

                                </div>

                            </div>

                        </article>

                    `
                ).join("");


            if (newsUpdated) {

                newsUpdated.textContent =
                    "Live feed temporarily unavailable";

            }


            setNewsStatus(
                false,
                "Fallback"
            );

        }

    }


    /* ======================================================
       INITIALIZE DASHBOARD
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

    updateScan();

    loadCyberNews();


    /* ======================================================
       LIVE UPDATE INTERVALS
    ====================================================== */

    /*
     * Threat telemetry
     */

    setInterval(
        updateThreats,
        5000
    );


    /*
     * Password analysis telemetry
     */

    setInterval(
        updatePasswords,
        7000
    );


    /*
     * Security score
     */

    setInterval(
        updateSecurityScore,
        10000
    );


    /*
     * System uptime
     */

    setInterval(
        updateUptime,
        15000
    );


    /*
     * Daily security tip
     */

    setInterval(
        updateSecurityTip,
        15000
    );


    /*
     * Date/time
     */

    setInterval(
        updateDateTime,
        1000
    );


    /*
     * Greeting
     */

    setInterval(
        updateGreeting,
        60000
    );


    /*
     * Last security scan timer
     */

    setInterval(
        updateScan,
        1000
    );


    /*
     * CISA KEV refresh.
     *
     * The official CISA mirror is updated
     * whenever the catalog changes.
     */

    setInterval(
        loadCyberNews,
        60 * 60 * 1000
    );


});