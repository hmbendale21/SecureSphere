/* ==========================================================
   SecureSphere — Ethical Hacking
   ethical-hacking.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       ETHICAL HACKING CONTENT
    ====================================================== */

    const content = document.getElementById("ethicalContent");

    if (!content) return;


    content.innerHTML = `

        <!-- ================================================
             01 — INTRODUCTION
        ================================================= -->

        <section
            id="introduction"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    01
                </span>

                <div>

                    <h2>
                        Introduction to Ethical Hacking
                    </h2>

                    <p>
                        Understand ethical hacking, its purpose,
                        roles and importance in cybersecurity.
                    </p>

                </div>

            </div>


            <div class="dashboard-card">

                <div class="info-card">

                    <div class="info-card-icon">

                        <i class="bi bi-shield-lock-fill"></i>

                    </div>

                    <div>

                        <h4>
                            What is Ethical Hacking?
                        </h4>

                        <p>
                            Ethical hacking is the authorized process
                            of identifying security weaknesses in
                            systems, networks and applications so that
                            organizations can fix them before attackers
                            exploit them.
                        </p>

                    </div>

                </div>


                <div class="owasp-content-grid">

                    <div class="owasp-card">

                        <i class="bi bi-person-check-fill"></i>

                        <h4>
                            Authorized
                        </h4>

                        <p>
                            Testing must be performed with proper
                            permission from the system owner.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-search"></i>

                        <h4>
                            Identify Weaknesses
                        </h4>

                        <p>
                            Ethical hackers look for vulnerabilities,
                            misconfigurations and security gaps.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-shield-check"></i>

                        <h4>
                            Improve Security
                        </h4>

                        <p>
                            Findings are documented so that security
                            teams can remediate the weaknesses.
                        </p>

                    </div>

                </div>

            </div>

        </section>



        <!-- ================================================
             02 — METHODOLOGY
        ================================================= -->

        <section
            id="methodology"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    02
                </span>

                <div>

                    <h2>
                        Ethical Hacking Methodology
                    </h2>

                    <p>
                        A structured approach helps ethical hackers
                        perform security assessments systematically.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-search"></i>

                    <h4>
                        01. Reconnaissance
                    </h4>

                    <p>
                        Collect information about the target and
                        understand its attack surface.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-radar"></i>

                    <h4>
                        02. Scanning
                    </h4>

                    <p>
                        Analyze systems, services and exposed
                        network information.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-list-check"></i>

                    <h4>
                        03. Enumeration
                    </h4>

                    <p>
                        Gather detailed information about available
                        users, services and resources.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-bug-fill"></i>

                    <h4>
                        04. Vulnerability Assessment
                    </h4>

                    <p>
                        Identify and evaluate potential security
                        vulnerabilities.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-shield-exclamation"></i>

                    <h4>
                        05. Security Testing
                    </h4>

                    <p>
                        Validate security weaknesses within the
                        authorized scope.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-file-earmark-text-fill"></i>

                    <h4>
                        06. Reporting
                    </h4>

                    <p>
                        Document findings, risk levels and
                        recommended remediation steps.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             03 — RECONNAISSANCE
        ================================================= -->

        <section
            id="reconnaissance"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    03
                </span>

                <div>

                    <h2>
                        Reconnaissance
                    </h2>

                    <p>
                        Reconnaissance is the information-gathering
                        stage of an ethical hacking assessment.
                    </p>

                </div>

            </div>


            <div class="dashboard-card">

                <div class="owasp-content-grid">


                    <div class="owasp-card">

                        <i class="bi bi-globe2"></i>

                        <h4>
                            Passive Reconnaissance
                        </h4>

                        <p>
                            Collect information from publicly available
                            sources without directly interacting with
                            the target infrastructure.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-broadcast-pin"></i>

                        <h4>
                            Active Reconnaissance
                        </h4>

                        <p>
                            Gather information through direct interaction
                            with authorized target systems.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-info-circle-fill"></i>

                        <h4>
                            Information Collected
                        </h4>

                        <p>
                            Domain information, IP addresses, technologies,
                            services and other relevant attack-surface data.
                        </p>

                    </div>


                </div>

            </div>

        </section>



        <!-- ================================================
             04 — SCANNING
        ================================================= -->

        <section
            id="scanning"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    04
                </span>

                <div>

                    <h2>
                        Scanning
                    </h2>

                    <p>
                        Scanning helps security testers understand
                        what systems and services are exposed.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-diagram-3-fill"></i>

                    <h4>
                        Network Scanning
                    </h4>

                    <p>
                        Identifies reachable systems and network
                        information within the authorized scope.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-hdd-network-fill"></i>

                    <h4>
                        Port Scanning
                    </h4>

                    <p>
                        Helps identify accessible network services
                        and exposed ports.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-window-stack"></i>

                    <h4>
                        Service Detection
                    </h4>

                    <p>
                        Determines which services and technologies
                        are operating on discovered systems.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             05 — ENUMERATION
        ================================================= -->

        <section
            id="enumeration"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    05
                </span>

                <div>

                    <h2>
                        Enumeration
                    </h2>

                    <p>
                        Enumeration focuses on extracting detailed
                        information from identified services.
                    </p>

                </div>

            </div>


            <div class="dashboard-card">

                <div class="owasp-list-grid">


                    <div>

                        <i class="bi bi-people-fill"></i>

                        <span>
                            User and account information
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-hdd-network-fill"></i>

                        <span>
                            Network services
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-folder-fill"></i>

                        <span>
                            Available resources
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-server"></i>

                        <span>
                            Service and system details
                        </span>

                    </div>


                </div>

            </div>

        </section>



        <!-- ================================================
             06 — VULNERABILITY ASSESSMENT
        ================================================= -->

        <section
            id="vulnerability"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    06
                </span>

                <div>

                    <h2>
                        Vulnerability Assessment
                    </h2>

                    <p>
                        Identify, analyze and prioritize weaknesses
                        discovered during an authorized assessment.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-search-heart-fill"></i>

                    <h4>
                        Identify
                    </h4>

                    <p>
                        Discover potential weaknesses in systems,
                        applications and configurations.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-bar-chart-fill"></i>

                    <h4>
                        Assess Risk
                    </h4>

                    <p>
                        Evaluate the likelihood and potential impact
                        of identified vulnerabilities.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-sort-down"></i>

                    <h4>
                        Prioritize
                    </h4>

                    <p>
                        Focus remediation efforts on the most
                        significant security risks first.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             07 — WEB SECURITY
        ================================================= -->

        <section
            id="websecurity"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    07
                </span>

                <div>

                    <h2>
                        Web Security Testing
                    </h2>

                    <p>
                        Learn how ethical hackers assess web
                        applications for common security weaknesses.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-database-fill-exclamation"></i>

                    <h4>
                        Injection
                    </h4>

                    <p>
                        Assess whether untrusted input can alter
                        application commands or queries.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-code-slash"></i>

                    <h4>
                        Cross-Site Scripting
                    </h4>

                    <p>
                        Check whether applications safely handle
                        untrusted content displayed to users.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-person-lock"></i>

                    <h4>
                        Authentication
                    </h4>

                    <p>
                        Evaluate authentication and session-management
                        controls within the authorized application.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-shield-exclamation"></i>

                    <h4>
                        Access Control
                    </h4>

                    <p>
                        Verify that users can access only the
                        resources they are authorized to access.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             08 — EXPLOITATION CONCEPTS
        ================================================= -->

        <section
            id="exploitation"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    08
                </span>

                <div>

                    <h2>
                        Exploitation Concepts
                    </h2>

                    <p>
                        Understand exploitation at a conceptual level
                        and how ethical testing validates vulnerabilities.
                    </p>

                </div>

            </div>


            <div class="dashboard-card">

                <div class="owasp-content-grid">


                    <div class="owasp-card">

                        <i class="bi bi-bug-fill"></i>

                        <h4>
                            Vulnerability
                        </h4>

                        <p>
                            A weakness that could potentially affect
                            the confidentiality, integrity or availability
                            of a system.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-arrow-right-circle-fill"></i>

                        <h4>
                            Exploit
                        </h4>

                        <p>
                            A method or technique used to demonstrate
                            that a vulnerability can have a security impact.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-shield-check"></i>

                        <h4>
                            Validation
                        </h4>

                        <p>
                            Ethical testing validates security findings
                            within an approved scope and controlled
                            environment.
                        </p>

                    </div>


                </div>

            </div>

        </section>



        <!-- ================================================
             09 — POST EXPLOITATION
        ================================================= -->

        <section
            id="postexploitation"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    09
                </span>

                <div>

                    <h2>
                        Post-Exploitation
                    </h2>

                    <p>
                        Learn the security concepts involved after
                        a vulnerability has been successfully validated.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-person-badge-fill"></i>

                    <h4>
                        Access Assessment
                    </h4>

                    <p>
                        Determine what level of access was obtained
                        and what security controls are affected.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-database-fill"></i>

                    <h4>
                        Impact Analysis
                    </h4>

                    <p>
                        Evaluate the potential business and technical
                        impact of the finding.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-arrow-counterclockwise"></i>

                    <h4>
                        Cleanup
                    </h4>

                    <p>
                        Remove test artifacts and restore the environment
                        according to the engagement requirements.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             10 — REPORTING
        ================================================= -->

        <section
            id="reporting"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    10
                </span>

                <div>

                    <h2>
                        Reporting & Remediation
                    </h2>

                    <p>
                        A professional security assessment ends with
                        clear documentation and actionable recommendations.
                    </p>

                </div>

            </div>


            <div class="dashboard-card">

                <div class="owasp-content-grid">


                    <div class="owasp-card">

                        <i class="bi bi-file-earmark-text-fill"></i>

                        <h4>
                            Finding
                        </h4>

                        <p>
                            Clearly describe the vulnerability,
                            affected asset and security condition.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-exclamation-triangle-fill"></i>

                        <h4>
                            Risk
                        </h4>

                        <p>
                            Explain the potential impact and
                            severity of the finding.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-tools"></i>

                        <h4>
                            Remediation
                        </h4>

                        <p>
                            Provide practical recommendations to
                            reduce or eliminate the identified risk.
                        </p>

                    </div>


                </div>

            </div>

        </section>



        <!-- ================================================
             11 — TOOLS
        ================================================= -->

        <section
            id="tools"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    11
                </span>

                <div>

                    <h2>
                        Ethical Hacking Tools
                    </h2>

                    <p>
                        Common tools used by security professionals
                        during authorized security assessments.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-terminal-fill"></i>

                    <h4>
                        Nmap
                    </h4>

                    <p>
                        Network discovery and service enumeration tool
                        commonly used during authorized assessments.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-globe2"></i>

                    <h4>
                        Burp Suite
                    </h4>

                    <p>
                        Web application security testing platform
                        used to inspect and assess web traffic.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-shield-lock-fill"></i>

                    <h4>
                        Wireshark
                    </h4>

                    <p>
                        Network protocol analyzer useful for
                        understanding network traffic.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-cpu-fill"></i>

                    <h4>
                        Metasploit
                    </h4>

                    <p>
                        Security testing framework used by professionals
                        to validate vulnerabilities in authorized environments.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             12 — INTERVIEW
        ================================================= -->

        <section
            id="interview"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    12
                </span>

                <div>

                    <h2>
                        Ethical Hacking Interview Questions
                    </h2>

                    <p>
                        Test your understanding of ethical hacking
                        fundamentals and security assessment concepts.
                    </p>

                </div>

            </div>


            <div class="owasp-interview-card">


                <details>

                    <summary>
                        What is ethical hacking?
                    </summary>

                    <p>
                        Ethical hacking is authorized security testing
                        performed to identify vulnerabilities and help
                        organizations improve their security.
                    </p>

                </details>


                <details>

                    <summary>
                        What is reconnaissance?
                    </summary>

                    <p>
                        Reconnaissance is the process of gathering
                        information about a target during a security
                        assessment.
                    </p>

                </details>


                <details>

                    <summary>
                        What is the difference between passive and active reconnaissance?
                    </summary>

                    <p>
                        Passive reconnaissance uses publicly available
                        information without directly interacting with the
                        target, while active reconnaissance involves
                        authorized interaction with target systems.
                    </p>

                </details>


                <details>

                    <summary>
                        What is vulnerability assessment?
                    </summary>

                    <p>
                        Vulnerability assessment is the process of
                        identifying and evaluating security weaknesses
                        in systems or applications.
                    </p>

                </details>


                <details>

                    <summary>
                        What is enumeration?
                    </summary>

                    <p>
                        Enumeration is the process of obtaining detailed
                        information about services, users, resources
                        and systems discovered during an assessment.
                    </p>

                </details>


                <details>

                    <summary>
                        What is the purpose of penetration testing?
                    </summary>

                    <p>
                        Penetration testing validates whether identified
                        security weaknesses can have a meaningful impact
                        within an authorized scope.
                    </p>

                </details>


                <details>

                    <summary>
                        What is Nmap?
                    </summary>

                    <p>
                        Nmap is a network discovery and service
                        enumeration tool commonly used by security
                        professionals.
                    </p>

                </details>


                <details>

                    <summary>
                        What is Burp Suite?
                    </summary>

                    <p>
                        Burp Suite is a platform used for testing
                        web applications and analyzing web traffic.
                    </p>

                </details>


                <details>

                    <summary>
                        Why is authorization important in ethical hacking?
                    </summary>

                    <p>
                        Authorization defines the legal permission,
                        systems and scope within which security testing
                        may be performed.
                    </p>

                </details>


            </div>

        </section>



        <!-- ================================================
             COMPLETION
        ================================================= -->

        <section class="topic-section">

            <div class="linux-complete-box">

                <div class="linux-complete-icon">

                    <i class="bi bi-check-circle-fill"></i>

                </div>


                <div>

                    <h3>
                        Ethical Hacking Completed
                    </h3>

                    <p>
                        You have completed the Ethical Hacking
                        fundamentals learning module.
                    </p>

                </div>

            </div>

        </section>

    `;


    /* ======================================================
       SEARCH
    ====================================================== */

    const searchInput =
        document.getElementById("topicSearch");


    const sections =
        document.querySelectorAll(
            "#ethicalContent .topic-section"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                const keyword =
                    searchInput.value
                        .toLowerCase()
                        .trim();


                sections.forEach(section => {

                    const text =
                        section.innerText
                            .toLowerCase();


                    section.style.display =
                        !keyword ||
                        text.includes(keyword)
                            ? ""
                            : "none";

                });

            }
        );

    }


    /* ======================================================
       QUICK NAVIGATION
    ====================================================== */

    const navLinks =
        document.querySelectorAll(
            '.learn-link[href^="#"]'
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                const navbar =
                    document.getElementById(
                        "learnNavbar"
                    );


                const offset =
                    navbar
                        ? navbar.offsetHeight + 25
                        : 25;


                const position =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    offset;


                window.scrollTo({

                    top: Math.max(0, position),

                    behavior: "smooth"

                });


                history.replaceState(
                    null,
                    "",
                    targetId
                );

            }
        );

    });


    /* ======================================================
       ACTIVE QUICK NAVIGATION
    ====================================================== */

    const contentSections =
        document.querySelectorAll(
            "#ethicalContent .topic-section[id]"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const currentId =
                            entry.target.id;


                        navLinks.forEach(link => {

                            link.classList.toggle(
                                "active",
                                link.getAttribute(
                                    "href"
                                ) ===
                                `#${currentId}`
                            );

                        });

                    });

                },
                {
                    rootMargin:
                        "-20% 0px -65% 0px"
                }
            );


        contentSections.forEach(section => {

            observer.observe(section);

        });

    }


    /* ======================================================
       INTERVIEW ACCORDION
    ====================================================== */

    const details =
        document.querySelectorAll(
            "#ethicalContent details"
        );


    details.forEach(detail => {

        detail.addEventListener(
            "toggle",
            () => {

                if (!detail.open) return;


                details.forEach(other => {

                    if (
                        other !== detail
                    ) {

                        other.open = false;

                    }

                });

            }
        );

    });


    /* ======================================================
       HASH NAVIGATION
    ====================================================== */

    if (window.location.hash) {

        const target =
            document.querySelector(
                window.location.hash
            );


        if (target) {

            setTimeout(() => {

                const navbar =
                    document.getElementById(
                        "learnNavbar"
                    );


                const offset =
                    navbar
                        ? navbar.offsetHeight + 25
                        : 25;


                window.scrollTo({

                    top:
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        offset,

                    behavior: "smooth"

                });

            }, 300);

        }

    }


    console.log(
        "SecureSphere Ethical Hacking page loaded."
    );

});