/* ==========================================================
   SecureSphere — Cloud Security
   cloud-security.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       CLOUD SECURITY CONTENT
    ====================================================== */

    const content =
        document.getElementById("cloudSecurityContent");

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
                        Introduction to Cloud Security
                    </h2>

                    <p>
                        Understand the fundamentals of protecting
                        cloud-based systems, applications and data.
                    </p>

                </div>

            </div>


            <div class="dashboard-card">

                <div class="info-card">

                    <div class="info-card-icon">

                        <i class="bi bi-cloud-check-fill"></i>

                    </div>

                    <div>

                        <h4>
                            What is Cloud Security?
                        </h4>

                        <p>
                            Cloud security is the collection of
                            technologies, policies, controls and
                            practices used to protect cloud
                            infrastructure, applications, identities
                            and data from security threats.
                        </p>

                    </div>

                </div>


                <div class="owasp-content-grid">

                    <div class="owasp-card">

                        <i class="bi bi-shield-lock-fill"></i>

                        <h4>
                            Data Protection
                        </h4>

                        <p>
                            Protect sensitive information stored and
                            processed in cloud environments.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-person-lock"></i>

                        <h4>
                            Identity Protection
                        </h4>

                        <p>
                            Control who can access cloud resources
                            and what actions they can perform.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-eye-fill"></i>

                        <h4>
                            Visibility
                        </h4>

                        <p>
                            Monitor cloud activity to identify
                            suspicious behavior and security events.
                        </p>

                    </div>

                </div>

            </div>

        </section>



        <!-- ================================================
             02 — CLOUD MODELS
        ================================================= -->

        <section
            id="cloudmodels"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    02
                </span>

                <div>

                    <h2>
                        Cloud Service Models
                    </h2>

                    <p>
                        Understand the main cloud service models
                        and how their security responsibilities differ.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-server"></i>

                    <h4>
                        IaaS
                    </h4>

                    <p>
                        Infrastructure as a Service provides
                        virtualized computing, storage and networking
                        resources.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-code-square"></i>

                    <h4>
                        PaaS
                    </h4>

                    <p>
                        Platform as a Service provides a managed
                        environment for developing and deploying
                        applications.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-window-stack"></i>

                    <h4>
                        SaaS
                    </h4>

                    <p>
                        Software as a Service delivers applications
                        through the cloud while the provider manages
                        much of the underlying infrastructure.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             03 — SHARED RESPONSIBILITY
        ================================================= -->

        <section
            id="sharedresponsibility"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    03
                </span>

                <div>

                    <h2>
                        Shared Responsibility Model
                    </h2>

                    <p>
                        Cloud security responsibilities are divided
                        between the cloud provider and the customer.
                    </p>

                </div>

            </div>


            <div class="dashboard-card">

                <div class="owasp-content-grid">


                    <div class="owasp-card">

                        <i class="bi bi-building"></i>

                        <h4>
                            Cloud Provider
                        </h4>

                        <p>
                            The provider is responsible for security
                            of the underlying cloud infrastructure,
                            depending on the service model.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-person-workspace"></i>

                        <h4>
                            Customer
                        </h4>

                        <p>
                            Customers remain responsible for aspects
                            such as identities, configurations,
                            applications and data according to
                            the service being used.
                        </p>

                    </div>


                    <div class="owasp-card">

                        <i class="bi bi-diagram-3-fill"></i>

                        <h4>
                            Responsibility Changes
                        </h4>

                        <p>
                            The exact division of responsibilities
                            changes between IaaS, PaaS and SaaS.
                        </p>

                    </div>


                </div>

            </div>

        </section>



        <!-- ================================================
             04 — IAM
        ================================================= -->

        <section
            id="iam"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    04
                </span>

                <div>

                    <h2>
                        Identity and Access Management
                    </h2>

                    <p>
                        IAM controls identities, authentication and
                        authorization across cloud resources.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-person-check-fill"></i>

                    <h4>
                        Authentication
                    </h4>

                    <p>
                        Verifies the identity of a user, service
                        or application requesting access.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-key-fill"></i>

                    <h4>
                        Authorization
                    </h4>

                    <p>
                        Determines which resources and actions an
                        authenticated identity is allowed to access.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-shield-fill-check"></i>

                    <h4>
                        Least Privilege
                    </h4>

                    <p>
                        Grant only the permissions required to
                        perform a specific task.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-phone-fill"></i>

                    <h4>
                        MFA
                    </h4>

                    <p>
                        Multi-factor authentication adds additional
                        verification beyond a password.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             05 — DATA SECURITY
        ================================================= -->

        <section
            id="datasecurity"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    05
                </span>

                <div>

                    <h2>
                        Cloud Data Security
                    </h2>

                    <p>
                        Protect cloud data throughout its lifecycle.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-lock-fill"></i>

                    <h4>
                        Encryption at Rest
                    </h4>

                    <p>
                        Protect stored data using encryption to
                        reduce the impact of unauthorized access.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-arrow-left-right"></i>

                    <h4>
                        Encryption in Transit
                    </h4>

                    <p>
                        Protect data while it moves between users,
                        applications and cloud services.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-key-fill"></i>

                    <h4>
                        Key Management
                    </h4>

                    <p>
                        Securely create, store, control and rotate
                        cryptographic keys.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             06 — NETWORK SECURITY
        ================================================= -->

        <section
            id="networksecurity"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    06
                </span>

                <div>

                    <h2>
                        Cloud Network Security
                    </h2>

                    <p>
                        Secure communication and network access
                        within cloud environments.
                    </p>

                </div>

            </div>


            <div class="dashboard-card">

                <div class="owasp-list-grid">


                    <div>

                        <i class="bi bi-diagram-3-fill"></i>

                        <span>
                            Network segmentation
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-shield-fill"></i>

                        <span>
                            Security groups and firewalls
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-router-fill"></i>

                        <span>
                            Secure routing
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-lock-fill"></i>

                        <span>
                            Secure remote access
                        </span>

                    </div>


                </div>

            </div>

        </section>



        <!-- ================================================
             07 — CLOUD THREATS
        ================================================= -->

        <section
            id="cloudthreats"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    07
                </span>

                <div>

                    <h2>
                        Common Cloud Security Threats
                    </h2>

                    <p>
                        Understand common risks that can affect
                        cloud environments.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-person-x-fill"></i>

                    <h4>
                        Account Compromise
                    </h4>

                    <p>
                        Stolen credentials can allow unauthorized
                        access to cloud resources.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-gear-wide-connected"></i>

                    <h4>
                        Misconfiguration
                    </h4>

                    <p>
                        Incorrect security settings can unintentionally
                        expose cloud resources or data.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-database-fill-exclamation"></i>

                    <h4>
                        Data Exposure
                    </h4>

                    <p>
                        Poor access controls or configurations can
                        expose sensitive information.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-key-fill"></i>

                    <h4>
                        Excessive Permissions
                    </h4>

                    <p>
                        Unnecessary privileges can increase the
                        potential impact of compromised accounts.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             08 — SECURITY MONITORING
        ================================================= -->

        <section
            id="securitymonitoring"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    08
                </span>

                <div>

                    <h2>
                        Cloud Security Monitoring
                    </h2>

                    <p>
                        Monitor cloud activity to detect suspicious
                        behavior and security incidents.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-file-earmark-text-fill"></i>

                    <h4>
                        Logs
                    </h4>

                    <p>
                        Collect activity and audit logs to understand
                        events occurring within cloud environments.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-graph-up-arrow"></i>

                    <h4>
                        Monitoring
                    </h4>

                    <p>
                        Continuously observe resources, identities
                        and security-related events.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-bell-fill"></i>

                    <h4>
                        Alerts
                    </h4>

                    <p>
                        Generate notifications when suspicious or
                        policy-violating activity is detected.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             09 — CLOUD PROVIDERS
        ================================================= -->

        <section
            id="cloudproviders"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    09
                </span>

                <div>

                    <h2>
                        Major Cloud Providers
                    </h2>

                    <p>
                        Learn the security concepts used across
                        major cloud platforms.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-cloud-fill"></i>

                    <h4>
                        Amazon Web Services
                    </h4>

                    <p>
                        AWS provides cloud infrastructure and a broad
                        collection of identity, networking, logging
                        and security services.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-clouds-fill"></i>

                    <h4>
                        Microsoft Azure
                    </h4>

                    <p>
                        Azure provides cloud computing services with
                        identity, security, monitoring and governance
                        capabilities.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-google"></i>

                    <h4>
                        Google Cloud
                    </h4>

                    <p>
                        Google Cloud provides cloud infrastructure,
                        identity, networking, monitoring and security
                        services.
                    </p>

                </div>


            </div>

        </section>



        <!-- ================================================
             10 — BEST PRACTICES
        ================================================= -->

        <section
            id="bestpractices"
            class="topic-section">

            <div class="section-heading">

                <span class="section-number">
                    10
                </span>

                <div>

                    <h2>
                        Cloud Security Best Practices
                    </h2>

                    <p>
                        Follow fundamental practices to reduce
                        cloud security risks.
                    </p>

                </div>

            </div>


            <div class="dashboard-card">

                <div class="owasp-list-grid">


                    <div>

                        <i class="bi bi-person-lock"></i>

                        <span>
                            Apply least privilege
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-shield-check"></i>

                        <span>
                            Enable strong authentication
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-eye-fill"></i>

                        <span>
                            Monitor security activity
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-arrow-repeat"></i>

                        <span>
                            Regularly review permissions
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-lock-fill"></i>

                        <span>
                            Encrypt sensitive data
                        </span>

                    </div>


                    <div>

                        <i class="bi bi-gear-fill"></i>

                        <span>
                            Secure cloud configurations
                        </span>

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
                        Cloud Security Tools
                    </h2>

                    <p>
                        Common categories of tools used to improve
                        visibility and security in cloud environments.
                    </p>

                </div>

            </div>


            <div class="owasp-content-grid">


                <div class="owasp-card">

                    <i class="bi bi-person-badge-fill"></i>

                    <h4>
                        IAM Tools
                    </h4>

                    <p>
                        Manage identities, authentication and
                        permissions across cloud resources.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-activity"></i>

                    <h4>
                        Monitoring Tools
                    </h4>

                    <p>
                        Collect logs, metrics and security events
                        for cloud visibility and detection.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-shield-fill-check"></i>

                    <h4>
                        CSPM
                    </h4>

                    <p>
                        Cloud Security Posture Management helps
                        identify configuration and compliance risks.
                    </p>

                </div>


                <div class="owasp-card">

                    <i class="bi bi-bug-fill"></i>

                    <h4>
                        Vulnerability Tools
                    </h4>

                    <p>
                        Help identify security weaknesses in cloud
                        workloads and configurations.
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
                        Cloud Security Interview Questions
                    </h2>

                    <p>
                        Test your understanding of cloud security
                        fundamentals and common security concepts.
                    </p>

                </div>

            </div>


            <div class="owasp-interview-card">


                <details>

                    <summary>
                        What is cloud security?
                    </summary>

                    <p>
                        Cloud security is the collection of controls,
                        technologies, policies and practices used to
                        protect cloud infrastructure, applications,
                        identities and data.
                    </p>

                </details>


                <details>

                    <summary>
                        What is the shared responsibility model?
                    </summary>

                    <p>
                        It is a security model in which responsibilities
                        are divided between the cloud provider and
                        the customer depending on the services being used.
                    </p>

                </details>


                <details>

                    <summary>
                        What is IAM?
                    </summary>

                    <p>
                        Identity and Access Management controls
                        authentication, authorization and permissions
                        for users and services.
                    </p>

                </details>


                <details>

                    <summary>
                        What is the principle of least privilege?
                    </summary>

                    <p>
                        Least privilege means providing an identity
                        only the permissions required to perform
                        its intended task.
                    </p>

                </details>


                <details>

                    <summary>
                        What is encryption at rest?
                    </summary>

                    <p>
                        Encryption at rest protects data while it is
                        stored on cloud systems or storage services.
                    </p>

                </details>


                <details>

                    <summary>
                        What is encryption in transit?
                    </summary>

                    <p>
                        Encryption in transit protects data while it
                        moves between systems, applications or users.
                    </p>

                </details>


                <details>

                    <summary>
                        What is cloud misconfiguration?
                    </summary>

                    <p>
                        Cloud misconfiguration occurs when security
                        settings are incorrectly configured and may
                        unintentionally expose resources or data.
                    </p>

                </details>


                <details>

                    <summary>
                        What is MFA?
                    </summary>

                    <p>
                        Multi-factor authentication requires more than
                        one verification factor to authenticate an identity.
                    </p>

                </details>


                <details>

                    <summary>
                        What is CSPM?
                    </summary>

                    <p>
                        Cloud Security Posture Management helps
                        organizations identify and manage cloud
                        configuration and security risks.
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
                        Cloud Security Completed
                    </h3>

                    <p>
                        You have completed the Cloud Security
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
            "#cloudSecurityContent .topic-section"
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
            "#cloudSecurityContent .topic-section[id]"
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
            "#cloudSecurityContent details"
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
        "SecureSphere Cloud Security page loaded."
    );

});