/* ==========================================
   Learn Cyber Topics
========================================== */

const topics = [

    {
        title: "Networking",
        icon: "bi-diagram-3-fill",
        description: "Master TCP/IP, OSI Model, DNS, HTTP, HTTPS, Routing, Switching and Network Security.",
        link: "networking.html"
    },

    {
        title: "Linux",
        icon: "bi-terminal-fill",
        description: "Learn Linux commands, file permissions, shell scripting and system administration.",
        link: "linux.html"
    },

    {
        title: "OWASP Top 10",
        icon: "bi-shield-lock-fill",
        description: "Understand SQL Injection, XSS, CSRF, Broken Authentication and Web Security.",
        link: "owasp.html"
    },

    {
        title: "Cryptography",
        icon: "bi-key-fill",
        description: "Explore Encryption, Hashing, Digital Signatures, SSL/TLS and Public Key Infrastructure.",
        link: "cryptography.html"
    },

    {
        title: "Ethical Hacking",
        icon: "bi-bug-fill",
        description: "Learn Reconnaissance, Scanning, Enumeration, Exploitation and Reporting.",
        link: "ethical-hacking.html"
    },

    {
        title: "Cloud Security",
        icon: "bi-cloud-fill",
        description: "Understand AWS, Azure, IAM, Cloud Threats and Secure Cloud Deployments.",
        link: "cloud-security.html"
    },

    {
        title: "AI in Cybersecurity",
        icon: "bi-robot",
        description: "Learn how Artificial Intelligence helps in Malware Detection, SOC and Threat Intelligence.",
        link: "ai-cybersecurity.html"
    },

    {
        title: "Cyber Certifications",
        icon: "bi-award-fill",
        description: "Explore CEH, Security+, CISSP, CompTIA, Google and Cisco certification roadmaps.",
        link: "certification.html"
    }

];


const container = document.getElementById("topicsContainer");

displayTopics(topics);


/* ==========================================
   Display Topics
========================================== */

function displayTopics(data){

    let html = "";

    data.forEach(topic => {

        html += `

        <div class="col-lg-3 col-md-6">

            <div class="topic-card">

                <div class="topic-icon">

                    <i class="bi ${topic.icon}"></i>

                </div>

                <h3 class="topic-title">

                    ${topic.title}

                </h3>

                <p class="topic-desc">

                    ${topic.description}

                </p>

                <a href="${topic.link}"
                   class="learn-btn">

                    Start Learning

                    <i class="bi bi-arrow-right ms-2"></i>

                </a>

            </div>

        </div>

        `;

    });

    container.innerHTML = html;

}


/* ==========================================
   Search Topics
========================================== */

const searchInput = document.getElementById("searchTopic");

searchInput.addEventListener("keyup", () => {

    const keyword =
        searchInput.value.toLowerCase();

    const filtered = topics.filter(topic =>

        topic.title
            .toLowerCase()
            .includes(keyword)

        ||

        topic.description
            .toLowerCase()
            .includes(keyword)

    );

    displayTopics(filtered);

});