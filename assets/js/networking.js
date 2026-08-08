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
        id: "protocols",
    
        title: "🌐 Network Protocols",
    
        content: `
    
            <p>
                Network protocols are rules that define how devices
                communicate and exchange data over a network.
            </p>
    
            <div class="protocol-grid">
    
                <!-- HTTP -->
    
                <div class="protocol-card">
    
                    <div class="protocol-icon">
    
                        <i class="bi bi-globe2"></i>
    
                    </div>
    
                    <div class="protocol-content">
    
                        <div class="protocol-header">
    
                            <h4>HTTP</h4>
    
                            <span class="protocol-badge web">
                                Web
                            </span>
    
                        </div>
    
                        <p>
                            Hypertext Transfer Protocol is used to
                            transfer web pages and resources between
                            clients and web servers.
                        </p>
    
                        <div class="protocol-details">
    
                            <span>
                                <strong>Port:</strong> 80
                            </span>
    
                            <span>
                                <strong>Transport:</strong> TCP
                            </span>
    
                        </div>
    
                        <div class="security-note">
    
                            <i class="bi bi-exclamation-triangle-fill"></i>
    
                            HTTP does not encrypt data.
    
                        </div>
    
                    </div>
    
                </div>
    
    
                <!-- HTTPS -->
    
                <div class="protocol-card">
    
                    <div class="protocol-icon secure">
    
                        <i class="bi bi-lock-fill"></i>
    
                    </div>
    
                    <div class="protocol-content">
    
                        <div class="protocol-header">
    
                            <h4>HTTPS</h4>
    
                            <span class="protocol-badge secure-badge">
                                Secure Web
                            </span>
    
                        </div>
    
                        <p>
                            HTTPS is the secure version of HTTP.
                            It uses TLS to protect data exchanged
                            between the browser and web server.
                        </p>
    
                        <div class="protocol-details">
    
                            <span>
                                <strong>Port:</strong> 443
                            </span>
    
                            <span>
                                <strong>Transport:</strong> TCP
                            </span>
    
                        </div>
    
                        <div class="security-note safe">
    
                            <i class="bi bi-shield-check"></i>
    
                            Data is encrypted using TLS.
    
                        </div>
    
                    </div>
    
                </div>
    
    
                <!-- DNS -->
    
                <div class="protocol-card">
    
                    <div class="protocol-icon">
    
                        <i class="bi bi-diagram-3-fill"></i>
    
                    </div>
    
                    <div class="protocol-content">
    
                        <div class="protocol-header">
    
                            <h4>DNS</h4>
    
                            <span class="protocol-badge network">
                                Network
                            </span>
    
                        </div>
    
                        <p>
                            Domain Name System translates domain names
                            such as example.com into IP addresses.
                        </p>
    
                        <div class="protocol-details">
    
                            <span>
                                <strong>Port:</strong> 53
                            </span>
    
                            <span>
                                <strong>Transport:</strong> UDP / TCP
                            </span>
    
                        </div>
    
                        <div class="security-note">
    
                            <i class="bi bi-info-circle-fill"></i>
    
                            DNS is essential for Internet communication.
    
                        </div>
    
                    </div>
    
                </div>
    
    
                <!-- DHCP -->
    
                <div class="protocol-card">
    
                    <div class="protocol-icon">
    
                        <i class="bi bi-router-fill"></i>
    
                    </div>
    
                    <div class="protocol-content">
    
                        <div class="protocol-header">
    
                            <h4>DHCP</h4>
    
                            <span class="protocol-badge network">
                                Network
                            </span>
    
                        </div>
    
                        <p>
                            Dynamic Host Configuration Protocol
                            automatically assigns IP configuration
                            to devices on a network.
                        </p>
    
                        <div class="protocol-details">
    
                            <span>
                                <strong>Ports:</strong> 67 / 68
                            </span>
    
                            <span>
                                <strong>Transport:</strong> UDP
                            </span>
    
                        </div>
    
                        <div class="security-note">
    
                            <i class="bi bi-info-circle-fill"></i>
    
                            Provides automatic network configuration.
    
                        </div>
    
                    </div>
    
                </div>
    
    
                <!-- FTP -->
    
                <div class="protocol-card">
    
                    <div class="protocol-icon">
    
                        <i class="bi bi-folder-fill"></i>
    
                    </div>
    
                    <div class="protocol-content">
    
                        <div class="protocol-header">
    
                            <h4>FTP</h4>
    
                            <span class="protocol-badge file">
                                File Transfer
                            </span>
    
                        </div>
    
                        <p>
                            File Transfer Protocol is used to transfer
                            files between a client and server.
                        </p>
    
                        <div class="protocol-details">
    
                            <span>
                                <strong>Ports:</strong> 20 / 21
                            </span>
    
                            <span>
                                <strong>Transport:</strong> TCP
                            </span>
    
                        </div>
    
                        <div class="security-note">
    
                            <i class="bi bi-exclamation-triangle-fill"></i>
    
                            FTP does not provide encryption.
    
                        </div>
    
                    </div>
    
                </div>
    
    
                <!-- SSH -->
    
                <div class="protocol-card">
    
                    <div class="protocol-icon secure">
    
                        <i class="bi bi-terminal-fill"></i>
    
                    </div>
    
                    <div class="protocol-content">
    
                        <div class="protocol-header">
    
                            <h4>SSH</h4>
    
                            <span class="protocol-badge secure-badge">
                                Secure Remote
                            </span>
    
                        </div>
    
                        <p>
                            Secure Shell provides encrypted remote
                            access to systems and servers.
                        </p>
    
                        <div class="protocol-details">
    
                            <span>
                                <strong>Port:</strong> 22
                            </span>
    
                            <span>
                                <strong>Transport:</strong> TCP
                            </span>
    
                        </div>
    
                        <div class="security-note safe">
    
                            <i class="bi bi-shield-check"></i>
    
                            Encrypted remote communication.
    
                        </div>
    
                    </div>
    
                </div>
    
    
                <!-- SMTP -->
    
                <div class="protocol-card">
    
                    <div class="protocol-icon">
    
                        <i class="bi bi-envelope-fill"></i>
    
                    </div>
    
                    <div class="protocol-content">
    
                        <div class="protocol-header">
    
                            <h4>SMTP</h4>
    
                            <span class="protocol-badge email">
                                Email
                            </span>
    
                        </div>
    
                        <p>
                            Simple Mail Transfer Protocol is primarily
                            used for sending email messages.
                        </p>
    
                        <div class="protocol-details">
    
                            <span>
                                <strong>Port:</strong> 25
                            </span>
    
                            <span>
                                <strong>Transport:</strong> TCP
                            </span>
    
                        </div>
    
                        <div class="security-note">
    
                            <i class="bi bi-info-circle-fill"></i>
    
                            Secure email submission commonly uses TLS.
    
                        </div>
    
                    </div>
    
                </div>
    
    
                <!-- ICMP -->
    
                <div class="protocol-card">
    
                    <div class="protocol-icon">
    
                        <i class="bi bi-activity"></i>
    
                    </div>
    
                    <div class="protocol-content">
    
                        <div class="protocol-header">
    
                            <h4>ICMP</h4>
    
                            <span class="protocol-badge network">
                                Network
                            </span>
    
                        </div>
    
                        <p>
                            Internet Control Message Protocol is used
                            for network diagnostics and error reporting.
                        </p>
    
                        <div class="protocol-details">
    
                            <span>
                                <strong>Port:</strong> None
                            </span>
    
                            <span>
                                <strong>Layer:</strong> Network
                            </span>
    
                        </div>
    
                        <div class="security-note">
    
                            <i class="bi bi-terminal-fill"></i>
    
                            Ping commonly uses ICMP Echo messages.
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    
        `
    },

    {
        id: "ip",
    
        title: "🔢 IP Addressing",
    
        content: `
    
            <p>
                An Internet Protocol (IP) address is a logical address
                assigned to a device on a network. It allows devices
                to identify and communicate with each other.
            </p>
    
    
            <!-- IPv4 Structure -->
    
            <div class="ip-highlight">
    
                <div class="ip-highlight-icon">
    
                    <i class="bi bi-diagram-3-fill"></i>
    
                </div>
    
                <div>
    
                    <h4>IPv4 Address</h4>
    
                    <p>
                        IPv4 uses a 32-bit address written as four
                        decimal octets separated by dots.
                    </p>
    
                    <div class="ip-example">
    
                        192.168.1.10
    
                    </div>
    
                </div>
    
            </div>
    
    
            <!-- IP Types -->
    
            <div class="ip-grid">
    
    
                <!-- IPv4 -->
    
                <div class="ip-card">
    
                    <div class="ip-card-icon">
    
                        <i class="bi bi-hdd-network-fill"></i>
    
                    </div>
    
                    <h4>IPv4</h4>
    
                    <p>
                        Uses 32-bit addresses and provides approximately
                        4.3 billion possible addresses.
                    </p>
    
                    <div class="ip-info">
    
                        <span>32-bit</span>
    
                        <span>Example: 192.168.1.10</span>
    
                    </div>
    
                </div>
    
    
                <!-- IPv6 -->
    
                <div class="ip-card">
    
                    <div class="ip-card-icon ipv6">
    
                        <i class="bi bi-globe2"></i>
    
                    </div>
    
                    <h4>IPv6</h4>
    
                    <p>
                        Uses 128-bit addresses and provides a vastly
                        larger address space than IPv4.
                    </p>
    
                    <div class="ip-info">
    
                        <span>128-bit</span>
    
                        <span>Example: 2001:db8::1</span>
    
                    </div>
    
                </div>
    
    
                <!-- Public -->
    
                <div class="ip-card">
    
                    <div class="ip-card-icon public-ip">
    
                        <i class="bi bi-globe"></i>
    
                    </div>
    
                    <h4>Public IP</h4>
    
                    <p>
                        An address that can be routed across the
                        public Internet and is generally assigned
                        by an Internet Service Provider.
                    </p>
    
                    <div class="ip-info">
    
                        <span>Internet-facing</span>
    
                    </div>
    
                </div>
    
    
                <!-- Private -->
    
                <div class="ip-card">
    
                    <div class="ip-card-icon private-ip">
    
                        <i class="bi bi-house-lock-fill"></i>
    
                    </div>
    
                    <h4>Private IP</h4>
    
                    <p>
                        Used inside private networks and is not
                        directly routable across the public Internet.
                    </p>
    
                    <div class="ip-info">
    
                        <span>LAN</span>
    
                    </div>
    
                </div>
    
    
                <!-- Static -->
    
                <div class="ip-card">
    
                    <div class="ip-card-icon static-ip">
    
                        <i class="bi bi-pin-angle-fill"></i>
    
                    </div>
    
                    <h4>Static IP</h4>
    
                    <p>
                        An IP address that remains fixed until it
                        is manually changed or reconfigured.
                    </p>
    
                    <div class="ip-info">
    
                        <span>Fixed Address</span>
    
                    </div>
    
                </div>
    
    
                <!-- Dynamic -->
    
                <div class="ip-card">
    
                    <div class="ip-card-icon dynamic-ip">
    
                        <i class="bi bi-arrow-repeat"></i>
    
                    </div>
    
                    <h4>Dynamic IP</h4>
    
                    <p>
                        An IP address that can be automatically
                        assigned and changed, commonly through DHCP.
                    </p>
    
                    <div class="ip-info">
    
                        <span>DHCP Assigned</span>
    
                    </div>
    
                </div>
    
            </div>
    
    
            <!-- Private IPv4 Ranges -->
    
            <div class="private-range-box">
    
                <h4>
    
                    🔐 Private IPv4 Address Ranges
    
                </h4>
    
                <p>
                    These IPv4 ranges are reserved for private networks.
                </p>
    
                <div class="table-responsive">
    
                    <table class="table ip-table">
    
                        <thead>
    
                            <tr>
    
                                <th>Range</th>
    
                                <th>Purpose</th>
    
                            </tr>
    
                        </thead>
    
                        <tbody>
    
                            <tr>
    
                                <td>10.0.0.0/8</td>
    
                                <td>Private Network</td>
    
                            </tr>
    
                            <tr>
    
                                <td>172.16.0.0/12</td>
    
                                <td>Private Network</td>
    
                            </tr>
    
                            <tr>
    
                                <td>192.168.0.0/16</td>
    
                                <td>Private Network</td>
    
                            </tr>
    
                        </tbody>
    
                    </table>
    
                </div>
    
            </div>
    
    
            <!-- Cybersecurity -->
    
            <div class="ip-security-box">
    
                <h4>
    
                    🛡 Why IP Addressing Matters in Cybersecurity
    
                </h4>
    
                <ul>
    
                    <li>
                        Helps identify the source and destination
                        of network traffic.
                    </li>
    
                    <li>
                        Firewalls can use IP addresses in traffic rules.
                    </li>
    
                    <li>
                        Security analysts investigate suspicious
                        IP addresses during incident response.
                    </li>
    
                    <li>
                        Network logs commonly contain source and
                        destination IP addresses.
                    </li>
    
                </ul>
    
            </div>
    
        `
    },

    {
        id: "ports",
    
        title: "🔐 Network Ports",
    
        content: `
    
            <p>
                A network port is a logical communication endpoint used
                by applications and services to exchange data over a network.
                Ports help the operating system deliver network traffic
                to the correct application.
            </p>
    
            <!-- Port Search -->
    
            <div class="port-search">
    
                <i class="bi bi-search"></i>
    
                <input
                    type="text"
                    id="portSearch"
                    placeholder="Search port, service or protocol..."
                >
    
            </div>
    
    
            <!-- Ports Table -->
    
            <div class="table-responsive">
    
                <table class="table port-table">
    
                    <thead>
    
                        <tr>
    
                            <th>Port</th>
    
                            <th>Protocol</th>
    
                            <th>Service</th>
    
                            <th>Purpose</th>
    
                            <th>Security</th>
    
                        </tr>
    
                    </thead>
    
                    <tbody id="portTableBody">
    
                        <tr>
                            <td><span class="port-number">20</span></td>
                            <td>TCP</td>
                            <td>FTP Data</td>
                            <td>FTP data transfer</td>
                            <td>
                                <span class="security-badge risky">
                                    Unencrypted
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">21</span></td>
                            <td>TCP</td>
                            <td>FTP</td>
                            <td>File transfer control</td>
                            <td>
                                <span class="security-badge risky">
                                    Unencrypted
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">22</span></td>
                            <td>TCP</td>
                            <td>SSH</td>
                            <td>Secure remote access</td>
                            <td>
                                <span class="security-badge safe">
                                    Secure
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">23</span></td>
                            <td>TCP</td>
                            <td>Telnet</td>
                            <td>Remote login</td>
                            <td>
                                <span class="security-badge risky">
                                    Unencrypted
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">25</span></td>
                            <td>TCP</td>
                            <td>SMTP</td>
                            <td>Email transfer</td>
                            <td>
                                <span class="security-badge warning">
                                    Depends
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">53</span></td>
                            <td>UDP / TCP</td>
                            <td>DNS</td>
                            <td>Domain name resolution</td>
                            <td>
                                <span class="security-badge warning">
                                    Depends
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">67/68</span></td>
                            <td>UDP</td>
                            <td>DHCP</td>
                            <td>Automatic IP configuration</td>
                            <td>
                                <span class="security-badge warning">
                                    Network
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">80</span></td>
                            <td>TCP</td>
                            <td>HTTP</td>
                            <td>Web traffic</td>
                            <td>
                                <span class="security-badge risky">
                                    Unencrypted
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">110</span></td>
                            <td>TCP</td>
                            <td>POP3</td>
                            <td>Email retrieval</td>
                            <td>
                                <span class="security-badge warning">
                                    Depends
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">143</span></td>
                            <td>TCP</td>
                            <td>IMAP</td>
                            <td>Email access</td>
                            <td>
                                <span class="security-badge warning">
                                    Depends
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">443</span></td>
                            <td>TCP</td>
                            <td>HTTPS</td>
                            <td>Secure web traffic</td>
                            <td>
                                <span class="security-badge safe">
                                    Secure
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">3306</span></td>
                            <td>TCP</td>
                            <td>MySQL</td>
                            <td>Database communication</td>
                            <td>
                                <span class="security-badge warning">
                                    Protect
                                </span>
                            </td>
                        </tr>
    
                        <tr>
                            <td><span class="port-number">3389</span></td>
                            <td>TCP</td>
                            <td>RDP</td>
                            <td>Remote Desktop</td>
                            <td>
                                <span class="security-badge warning">
                                    Protect
                                </span>
                            </td>
                        </tr>
    
                    </tbody>
    
                </table>
    
            </div>
    
    
            <!-- Port Categories -->
    
            <div class="port-info-grid">
    
                <div class="port-info-card">
    
                    <i class="bi bi-1-circle-fill"></i>
    
                    <h4>Well-Known Ports</h4>
    
                    <p>
                        Ports 0–1023 are traditionally associated
                        with common system and network services.
                    </p>
    
                </div>
    
    
                <div class="port-info-card">
    
                    <i class="bi bi-2-circle-fill"></i>
    
                    <h4>Registered Ports</h4>
    
                    <p>
                        Ports 1024–49151 are commonly used by
                        applications and registered services.
                    </p>
    
                </div>
    
    
                <div class="port-info-card">
    
                    <i class="bi bi-3-circle-fill"></i>
    
                    <h4>Dynamic Ports</h4>
    
                    <p>
                        Ports 49152–65535 are commonly used
                        for temporary or client-side connections.
                    </p>
    
                </div>
    
            </div>
    
    
            <!-- Cybersecurity Tip -->
    
            <div class="port-security-box">
    
                <h4>
    
                    🛡 Cybersecurity Tip
    
                </h4>
    
                <p>
                    Open ports can expose network services.
                    Security professionals use port scanning and
                    service enumeration to identify reachable services
                    and assess their security.
                </p>
    
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

    {
        id: "interview",
    
        title: "📝 Networking Interview Questions",
    
        content: `
    
            <p>
                Test your networking knowledge with these commonly
                asked interview questions, from beginner to
                cybersecurity-focused concepts.
            </p>
    
            <div class="interview-list">
    
    
                <!-- Question 1 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            1. What is a computer network?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            A computer network is a collection of connected
                            devices that communicate and share data,
                            resources, and services with each other.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 2 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            2. What is the OSI model?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            The OSI model is a seven-layer reference model
                            used to understand how data is communicated
                            between networked devices.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 3 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            3. How many layers are in the OSI model?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            The OSI model has seven layers:
                            Physical, Data Link, Network, Transport,
                            Session, Presentation, and Application.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 4 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            4. What is the TCP/IP model?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            TCP/IP is a networking model and protocol suite
                            used for communication over networks, including
                            the Internet.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 5 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            5. What is an IP address?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            An IP address is a logical network address used
                            to identify a device or interface and enable
                            communication across an IP network.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 6 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            6. What is the difference between IPv4 and IPv6?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            IPv4 uses 32-bit addresses, while IPv6 uses
                            128-bit addresses and provides a much larger
                            address space.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 7 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            7. What is a MAC address?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            A MAC address is a link-layer address associated
                            with a network interface and is commonly used
                            for communication within a local network.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 8 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            8. What is a port number?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            A port number is a logical communication endpoint
                            used to identify a particular application or
                            service on a device.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 9 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            9. What is the difference between TCP and UDP?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            TCP provides connection-oriented and reliable
                            communication, while UDP is connectionless and
                            generally has lower communication overhead.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 10 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            10. What is DNS?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            DNS, or Domain Name System, translates domain
                            names into IP addresses so clients can locate
                            network resources.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 11 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            11. What is DHCP?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            DHCP automatically provides network configuration
                            such as IP addresses and other parameters to
                            clients on a network.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 12 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            12. What is a router?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            A router connects different networks and forwards
                            packets between them using network-layer
                            addressing.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 13 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            13. What is a switch?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            A switch connects devices within a LAN and
                            forwards Ethernet frames based primarily on
                            MAC addresses.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 14 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            14. What is a firewall?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            A firewall controls network traffic according
                            to configured security rules and can help
                            prevent unauthorized access.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 15 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            15. What is the difference between HTTP and HTTPS?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            HTTPS protects HTTP communication using TLS,
                            providing encryption and helping protect the
                            confidentiality and integrity of data in transit.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 16 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            16. What is SSH?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            SSH, or Secure Shell, provides secure remote
                            access and encrypted communication with a
                            remote system.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 17 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            17. What is a VPN?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            A VPN creates an encrypted connection over a
                            network, allowing traffic to travel through
                            a protected tunnel between endpoints.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 18 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            18. What is the purpose of ICMP?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            ICMP is used for network control, diagnostics,
                            and reporting certain communication errors.
                            Tools such as ping commonly use ICMP.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 19 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            19. What is the difference between a public and private IP?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            A public IP is routable on the public Internet,
                            while a private IP is intended for use within
                            private networks and is not directly routed
                            across the public Internet.
                        </p>
    
                    </div>
    
                </div>
    
    
                <!-- Question 20 -->
    
                <div class="interview-item">
    
                    <button class="interview-question">
    
                        <span>
                            20. Why are open ports important in cybersecurity?
                        </span>
    
                        <i class="bi bi-chevron-down"></i>
    
                    </button>
    
                    <div class="interview-answer">
    
                        <p>
                            Open ports may expose network services.
                            Security professionals therefore identify
                            reachable ports and services to assess
                            potential attack surfaces.
                        </p>
    
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

/* ==========================================
   PORT SEARCH
========================================== */

document.addEventListener("input", function(event){

    if(event.target.id !== "portSearch") return;

    const keyword = event.target.value.toLowerCase().trim();

    const rows = document.querySelectorAll("#portTableBody tr");

    rows.forEach(row => {

        const text = row.innerText.toLowerCase();

        row.style.display =
            text.includes(keyword) ? "" : "none";

    });

});

/* ==========================================
   INTERVIEW ACCORDION
========================================== */

document.addEventListener("click", function(event){

    const question = event.target.closest(".interview-question");

    if(!question) return;

    const item = question.closest(".interview-item");

    const answer = item.querySelector(".interview-answer");

    const isOpen = item.classList.contains("active");

    document.querySelectorAll(".interview-item.active").forEach(openItem => {

        openItem.classList.remove("active");

        openItem.querySelector(".interview-answer").style.display = "none";

    });

    if(!isOpen){

        item.classList.add("active");

        answer.style.display = "block";

    }

});