/* ==========================================
   Networking Learning Content
========================================== */

const networkingTopics = [

    {
        id: "introduction",
        title: "📖 What is Networking?",
        content: `
            <p>
                Computer Networking is the process of connecting two or more devices
                so they can communicate and share data, resources, and services.
            </p>

            <h5>Why Networking?</h5>

            <ul>

                <li>Communication between devices</li>

                <li>Resource Sharing</li>

                <li>Internet Access</li>

                <li>Remote Access</li>

                <li>Cybersecurity Monitoring</li>

            </ul>

            <div class="example-box">

                <strong>Real Life Example:</strong>

                Your college Wi-Fi connects hundreds of computers,
                printers and servers into one network.

            </div>
        `
    },

    {
        id: "types",
        title: "🌐 Types of Networks",
        content: `

            <table class="table table-dark table-hover">

                <thead>

                    <tr>

                        <th>Type</th>

                        <th>Coverage</th>

                        <th>Example</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>PAN</td>

                        <td>Personal</td>

                        <td>Bluetooth</td>

                    </tr>

                    <tr>

                        <td>LAN</td>

                        <td>Office / College</td>

                        <td>Computer Lab</td>

                    </tr>

                    <tr>

                        <td>MAN</td>

                        <td>City</td>

                        <td>Cable TV Network</td>

                    </tr>

                    <tr>

                        <td>WAN</td>

                        <td>Worldwide</td>

                        <td>Internet</td>

                    </tr>

                </tbody>

            </table>

        `
    },

    {
        id: "topology",

        title: "🛰 Network Topologies",

        content: `
    
        <div class="row g-4">
    
            <div class="col-lg-6">
    
                <div class="topology-card">
    
                <div class="topology-diagram bus">

                <div class="bus-line"></div>
            
                <div class="device d1"></div>
            
                <div class="device d2"></div>
            
                <div class="device d3"></div>
            
                <div class="device d4"></div>
            
            </div>
    
                    <h4>Bus Topology</h4>
    
                    <p>
    
                        All devices share a single communication cable (backbone).
    
                    </p>
    
                    <h6>Advantages</h6>
    
                    <ul>
    
                        <li>Easy to install</li>
    
                        <li>Low cost</li>
    
                    </ul>
    
                    <h6>Disadvantages</h6>
    
                    <ul>
    
                        <li>Single cable failure affects the network</li>
    
                        <li>Difficult troubleshooting</li>
    
                    </ul>
    
                </div>
    
            </div>
    
            <div class="col-lg-6">

            <div class="topology-card">
        
                <div class="topology-diagram star">
        
                    <svg class="star-svg" viewBox="0 0 240 180">
        
                        <line x1="120" y1="90" x2="120" y2="25"></line>
                        <line x1="120" y1="90" x2="120" y2="155"></line>
                        <line x1="120" y1="90" x2="35" y2="90"></line>
                        <line x1="120" y1="90" x2="205" y2="90"></line>
        
                    </svg>
        
                    <div class="center-node"></div>
        
                    <div class="node top"></div>
                    <div class="node right"></div>
                    <div class="node bottom"></div>
                    <div class="node left"></div>
        
                </div>
        
                <h4>Star Topology</h4>
        
                <p>
                    Every device connects to a central switch or hub.
                </p>
        
                <h6>Advantages</h6>
        
                <ul>
        
                    <li>Most reliable</li>
        
                    <li>Easy troubleshooting</li>
        
                    <li>Easy expansion</li>
        
                </ul>
        
                <h6>Disadvantages</h6>
        
                <ul>
        
                    <li>Requires more cabling</li>
        
                    <li>Switch failure affects all devices</li>
        
                </ul>
        
            </div>
        
        </div>

        
            <div class="col-lg-6">
    
                <div class="topology-card">
    
                    <div class="topology-diagram ring">
    
                    <div class="ring-circle">

                    <div class="ring-node n1"></div>
                
                    <div class="ring-node n2"></div>
                
                    <div class="ring-node n3"></div>
                
                    <div class="ring-node n4"></div>
                
                </div>
    
                    </div>
    
                    <h4>Ring Topology</h4>
    
                    <p>
    
                        Each device is connected to two neighboring devices, forming a ring.
    
                    </p>
    
                    <h6>Advantages</h6>
    
                    <ul>
    
                        <li>Equal access for all devices</li>
    
                        <li>No collisions</li>
    
                    </ul>
    
                    <h6>Disadvantages</h6>
    
                    <ul>
    
                        <li>Failure of one device may affect the network</li>
    
                    </ul>
    
                </div>
    
            </div>
    
            <div class="col-lg-6">
    
                <div class="topology-card">
    
                <div class="topology-diagram mesh">

    <div class="mesh-node tl"></div>

    <div class="mesh-node tr"></div>

    <div class="mesh-node bl"></div>

    <div class="mesh-node br"></div>

    <svg class="mesh-svg" viewBox="0 0 200 200">

        <line x1="30" y1="30" x2="170" y2="30"/>

        <line x1="30" y1="170" x2="170" y2="170"/>

        <line x1="30" y1="30" x2="30" y2="170"/>

        <line x1="170" y1="30" x2="170" y2="170"/>

        <line x1="30" y1="30" x2="170" y2="170"/>

        <line x1="170" y1="30" x2="30" y2="170"/>

    </svg>

</div>
    
                    <h4>Mesh Topology</h4>
    
                    <p>
    
                        Every device is connected to every other device.
    
                    </p>
    
                    <h6>Advantages</h6>
    
                    <ul>
    
                        <li>Very reliable</li>
    
                        <li>No single point of failure</li>
    
                    </ul>
    
                    <h6>Disadvantages</h6>
    
                    <ul>
    
                        <li>Expensive</li>
    
                        <li>Complex installation</li>
    
                    </ul>
    
                </div>
    
            </div>
    
        </div>
    
        `
    },

    {
        id: "osi",

        title: "🖥 OSI Model",

        content: `
    
    <div class="osi-model">
    
    <div class="osi layer7">
    
    <span>Layer 7</span>
    
    <strong>Application</strong>
    
    <small>HTTP • FTP • SMTP</small>
    
    </div>
    
    <div class="osi layer6">
    
    <span>Layer 6</span>
    
    <strong>Presentation</strong>
    
    <small>SSL • TLS • Encryption</small>
    
    </div>
    
    <div class="osi layer5">
    
    <span>Layer 5</span>
    
    <strong>Session</strong>
    
    <small>Session Management</small>
    
    </div>
    
    <div class="osi layer4">
    
    <span>Layer 4</span>
    
    <strong>Transport</strong>
    
    <small>TCP • UDP</small>
    
    </div>
    
    <div class="osi layer3">
    
    <span>Layer 3</span>
    
    <strong>Network</strong>
    
    <small>IP • ICMP</small>
    
    </div>
    
    <div class="osi layer2">
    
    <span>Layer 2</span>
    
    <strong>Data Link</strong>
    
    <small>MAC • Ethernet</small>
    
    </div>
    
    <div class="osi layer1">
    
    <span>Layer 1</span>
    
    <strong>Physical</strong>
    
    <small>Cables • Hub</small>
    
    </div>
    
    </div>
    
    `
    },

    {
        id: "tcpip",

        title: "📡 TCP/IP Model vs OSI Model",

        content: `
    
            <p>
    
                Both the <strong>OSI Model</strong> and the
                <strong>TCP/IP Model</strong> describe how data travels across
                a network. The OSI model has 7 layers, while the TCP/IP model
                has 4 layers.
    
            </p>
    
            <div class="table-responsive">
    
                <table class="table comparison-table">
    
                    <thead>
    
                        <tr>
    
                            <th>OSI Model</th>
    
                            <th>TCP/IP Model</th>
    
                            <th>Main Protocols</th>
    
                        </tr>
    
                    </thead>
    
                    <tbody>
    
                        <tr>
    
                            <td>Application</td>
    
                            <td rowspan="3" class="align-middle">
    
                                Application
    
                            </td>
    
                            <td>HTTP, HTTPS, FTP, SMTP, DNS</td>
    
                        </tr>
    
                        <tr>
    
                            <td>Presentation</td>
    
                            <td>SSL, TLS, Encryption</td>
    
                        </tr>
    
                        <tr>
    
                            <td>Session</td>
    
                            <td>RPC, NetBIOS</td>
    
                        </tr>
    
                        <tr>
    
                            <td>Transport</td>
    
                            <td>Transport</td>
    
                            <td>TCP, UDP</td>
    
                        </tr>
    
                        <tr>
    
                            <td>Network</td>
    
                            <td>Internet</td>
    
                            <td>IP, ICMP, ARP</td>
    
                        </tr>
    
                        <tr>
    
                            <td>Data Link</td>
    
                            <td rowspan="2" class="align-middle">
    
                                Network Access
    
                            </td>
    
                            <td>Ethernet</td>
    
                        </tr>
    
                        <tr>
    
                            <td>Physical</td>
    
                            <td>Cables, Hub, Switch</td>
    
                        </tr>
    
                    </tbody>
    
                </table>
    
            </div>
    
            <div class="comparison-box">
    
                <h5>💡 Key Differences</h5>
    
                <ul>
    
                    <li>OSI has <strong>7 Layers</strong>.</li>
    
                    <li>TCP/IP has <strong>4 Layers</strong>.</li>
    
                    <li>OSI is a <strong>reference model</strong>.</li>
    
                    <li>TCP/IP is a <strong>real-world implementation</strong>.</li>
    
                    <li>Internet communication uses the TCP/IP model.</li>
    
                </ul>
    
            </div>
    
        `
    },

    {
        id: "devices",

        title: "🖥 Network Devices",

        content: `
    
        <div class="row g-4">
    
            <div class="col-lg-4 col-md-6">
    
                <div class="device-card">
    
                    <div class="device-icon">
    
                        <i class="bi bi-router-fill"></i>
    
                    </div>
    
                    <h4>Router</h4>
    
                    <p>
    
                        Connects different networks together and forwards
                        data packets using IP addresses.
    
                    </p>
    
                    <div class="device-example">
    
                        <strong>Example:</strong>
    
                        Home Wi-Fi Router
    
                    </div>
    
                </div>
    
            </div>
    
            <div class="col-lg-4 col-md-6">
    
                <div class="device-card">
    
                    <div class="device-icon">
    
                        <i class="bi bi-hdd-network-fill"></i>
    
                    </div>
    
                    <h4>Switch</h4>
    
                    <p>
    
                        Connects devices inside a LAN and forwards data
                        using MAC addresses.
    
                    </p>
    
                    <div class="device-example">
    
                        <strong>Example:</strong>
    
                        College Computer Lab
    
                    </div>
    
                </div>
    
            </div>
    
            <div class="col-lg-4 col-md-6">
    
                <div class="device-card">
    
                    <div class="device-icon">
    
                        <i class="bi bi-diagram-2-fill"></i>
    
                    </div>
    
                    <h4>Hub</h4>
    
                    <p>
    
                        Broadcasts incoming data to every connected device.
                        Less secure than a switch.
    
                    </p>
    
                    <div class="device-example">
    
                        <strong>Example:</strong>
    
                        Legacy Small Networks
    
                    </div>
    
                </div>
    
            </div>
    
            <div class="col-lg-4 col-md-6">
    
                <div class="device-card">
    
                    <div class="device-icon">
    
                        <i class="bi bi-shield-lock-fill"></i>
    
                    </div>
    
                    <h4>Firewall</h4>
    
                    <p>
    
                        Filters incoming and outgoing network traffic
                        according to security rules.
    
                    </p>
    
                    <div class="device-example">
    
                        <strong>Example:</strong>
    
                        Windows Defender Firewall
    
                    </div>
    
                </div>
    
            </div>
    
            <div class="col-lg-4 col-md-6">
    
                <div class="device-card">
    
                    <div class="device-icon">
    
                        <i class="bi bi-wifi"></i>
    
                    </div>
    
                    <h4>Access Point</h4>
    
                    <p>
    
                        Provides wireless connectivity for laptops,
                        smartphones and tablets.
    
                    </p>
    
                    <div class="device-example">
    
                        <strong>Example:</strong>
    
                        Office Wi-Fi Access Point
    
                    </div>
    
                </div>
    
            </div>
    
            <div class="col-lg-4 col-md-6">
    
                <div class="device-card">
    
                    <div class="device-icon">
    
                        <i class="bi bi-globe2"></i>
    
                    </div>
    
                    <h4>Modem</h4>
    
                    <p>
    
                        Converts signals between the ISP and your router,
                        enabling Internet connectivity.
    
                    </p>
    
                    <div class="device-example">
    
                        <strong>Example:</strong>
    
                        Fiber Broadband Modem
    
                    </div>
    
                </div>
    
            </div>
    
        </div>
    
        `
    },
];

/* ==========================================
   Generate Cards
========================================== */

const container = document.getElementById("networkContent");

let html = "";

networkingTopics.forEach(topic => {

    html += `

    <section
        id="${topic.id}"
        class="dashboard-card mb-5">

        <h2>

            ${topic.title}

        </h2>

        ${topic.content}

    </section>

    `;

});

container.innerHTML = html;

/* ==========================================
   Search Topics
========================================== */

const search = document.getElementById("topicSearch");

search.addEventListener("keyup", () => {

    const keyword = search.value.toLowerCase();

    document.querySelectorAll(".dashboard-card").forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(keyword)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

});

