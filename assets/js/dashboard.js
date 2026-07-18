const tips = [

    "Never reuse passwords on multiple websites.",

    "Enable Two-Factor Authentication whenever possible.",

    "Update your software regularly.",

    "Don't click suspicious email links.",

    "Use a password manager for strong passwords."

];

const randomTip = tips[Math.floor(Math.random() * tips.length)];

document.getElementById("securityTip").textContent = randomTip;

console.log("Dashboard Loaded Successfully!");



// =========================
// Animated Security Score
// =========================

const scoreElement = document.getElementById("securityScore");

let score = 0;

const targetScore = 85;

const interval = setInterval(() => {

    score++;

    scoreElement.textContent = score + "%";

    if (score >= targetScore) {

        clearInterval(interval);

    }

}, 20);


// =========================
// Greeting
// =========================

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {

    greeting.textContent = "🌅 Good Morning";

}

else if (hour < 18) {

    greeting.textContent = "☀️ Good Afternoon";

}

else {

    greeting.textContent = "🌙 Good Evening";

}


// =========================
// Live Date & Time
// =========================

function updateDateTime() {

    const now = new Date();

    document.getElementById("currentDateTime").textContent =
        now.toLocaleString();

}

updateDateTime();

setInterval(updateDateTime, 1000);


console.log("Dashboard Loaded Successfully!");

const scanElement = document.getElementById("lastScan");

let minutes = 2;

setInterval(()=>{

    minutes++;

    scanElement.textContent = minutes + " minutes ago";

},60000);