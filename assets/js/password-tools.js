// =====================================
// DOM Elements
// =====================================

// Password Display
const passwordBox = document.getElementById("generated-password");
const passphraseBox =
document.getElementById("generated-passphrase");

const copyPassphraseBtn =
document.getElementById("copy-passphrase-btn");
// Generate Button
const generateBtn = document.getElementById("generate-btn");

// Copy Button
const copyBtn = document.getElementById("copy-btn");

// Password Length
const lengthSlider = document.getElementById("length");

// Length Text
const lengthValue = document.getElementById("length-value");

// Checkboxes
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

// Strength Elements
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const crackTime = document.getElementById("crack-time");

// Tabs
const randomTab = document.getElementById("random-tab");
const memorableTab = document.getElementById("memorable-tab");
const smartTab = document.getElementById("smart-tab");

// Passphrase Button
const generatePassphraseBtn = document.getElementById("generate-passphrase");
console.log(generatePassphraseBtn);

const tabs = [
    randomTab,
    memorableTab,
    smartTab
];

// Sections
const randomSection = document.getElementById("random-section");
const passphraseSection = document.getElementById("passphrase-section");
const smartSection = document.getElementById("smart-section");

// Dictionary
let words = [];

// =====================================
// Character Sets
// =====================================

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?";

// =====================================
// Length Slider
// =====================================

lengthSlider.addEventListener("input", function () {
    lengthValue.textContent = lengthSlider.value;
});

// =====================================
// Generate Password
// =====================================

function generatePassword() {

    let allCharacters = "";

    if (uppercaseCheck.checked) {
        allCharacters += uppercaseChars;
    }

    if (lowercaseCheck.checked) {
        allCharacters += lowercaseChars;
    }

    if (numbersCheck.checked) {
        allCharacters += numberChars;
    }

    if (symbolsCheck.checked) {
        allCharacters += symbolChars;
    }

    if (allCharacters === "") {
        alert("Please select at least one character type.");
        return;
    }

    let passwordLength = Number(lengthSlider.value);

    let password = "";

    for (let i = 0; i < passwordLength; i++) {

        let randomIndex = Math.floor(
            Math.random() * allCharacters.length
        );

        password += allCharacters[randomIndex];

    }

    passwordBox.value = password;

    checkPasswordStrength(password);

}

// =====================================
// Password Strength
// =====================================

function checkPasswordStrength(password) {

    let score = 0;

    if (password.length >= 12) score++;

    if (/[A-Z]/.test(password)) score++;

    if (/[a-z]/.test(password)) score++;

    if (/[0-9]/.test(password)) score++;

    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {

        strengthBar.style.width = "35%";
        strengthBar.className = "progress-bar bg-danger";
        strengthText.textContent = "🔴 Weak";
        crackTime.textContent = "A few minutes";

    }

    else if (score <= 4) {

        strengthBar.style.width = "70%";
        strengthBar.className = "progress-bar bg-warning";
        strengthText.textContent = "🟡 Medium";
        crackTime.textContent = "Several months";

    }

    else {

        strengthBar.style.width = "100%";
        strengthBar.className = "progress-bar bg-success";
        strengthText.textContent = "🟢 Strong";
        crackTime.textContent = "Hundreds of years";

    }

}

// =====================================
// Tabs
// =====================================

function activateTab(selectedTab) {

    tabs.forEach(function (tab) {
        tab.classList.remove("active");
    });

    selectedTab.classList.add("active");

    if (randomSection) randomSection.classList.add("d-none");
    if (passphraseSection) passphraseSection.classList.add("d-none");
    if (smartSection) smartSection.classList.add("d-none");

    if (selectedTab === randomTab && randomSection) {
        randomSection.classList.remove("d-none");
    }

    if (selectedTab === memorableTab && passphraseSection) {
        passphraseSection.classList.remove("d-none");
    }

    if (selectedTab === smartTab && smartSection) {
        smartSection.classList.remove("d-none");
    }

}
// =====================================
// Copy Password
// =====================================

function copyPassword() {

    if (passwordBox.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordBox.value);

    alert("✅ Password Copied!");

}

function copyPassphrase() {

    if (passphraseBox.value === "") {

        alert("Generate a passphrase first!");

        return;

    }

    navigator.clipboard.writeText(passphraseBox.value);

    alert("✅ Passphrase Copied!");

}

// =====================================
// Load Dictionary
// =====================================

async function loadWords() {

    try {

        const response = await fetch("../assets/data/words.json");

        words = await response.json();

        console.log(`Dictionary Loaded: ${words.length} words`);

    }

    catch (error) {

        console.error("Unable to load dictionary.", error);

    }

}



function getRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length);

    return words[randomIndex];

}

function generatePassphrase() {

    // Get two random words
    const word1 = getRandomWord();
    const word2 = getRandomWord();

    // Get separator
    const separator =
        document.getElementById("separator").value;

    // Create passphrase
    let passphrase = word1 + separator + word2;

    // Add random number
    if (document.getElementById("include-number").checked) {

        const randomNumber =
            Math.floor(Math.random() * 90) + 10;

        passphrase += randomNumber;

    }

    // Add random symbol
    if (document.getElementById("include-symbol").checked) {

        const symbols = "!@#$%&*?";

        const randomSymbol =
            symbols[Math.floor(Math.random() * symbols.length)];

        passphrase += randomSymbol;

    }

    // Display passphrase
    passphraseBox.value = passphrase;

    // Update strength meter
    checkPasswordStrength(passphrase);

}

// =====================================
// Event Listeners
// =====================================

// Generate Password
generateBtn.addEventListener("click", generatePassword);

// Copy Password
copyBtn.addEventListener("click", copyPassword);

generatePassphraseBtn.addEventListener(
    "click",
    generatePassphrase
);

copyPassphraseBtn.addEventListener(
    "click",
    copyPassphrase
);

// Random Tab
randomTab.addEventListener("click", function () {

    activateTab(randomTab);

});

// Passphrase Tab
memorableTab.addEventListener("click", function () {

    activateTab(memorableTab);

});

// Smart Tab
smartTab.addEventListener("click", function () {

    activateTab(smartTab);

});

// =====================================
// Initial Setup
// =====================================

// Show Random Password section when page loads
activateTab(randomTab);

// Load dictionary from words.json
loadWords();