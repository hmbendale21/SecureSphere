// =====================================
// DOM Elements
// =====================================

// Password Display
const passwordBox = document.getElementById("generated-password");
const passphraseBox =
    document.getElementById("generated-passphrase");

const copyPassphraseBtn =
    document.getElementById("copy-passphrase-btn");
    // =====================================
    // Smart Password Elements
    // =====================================
    
    const smartName = document.getElementById("smart-name");
    
    const smartWord = document.getElementById("smart-word");
    
    const smartPlace = document.getElementById("smart-place");
    
    const smartNumber = document.getElementById("smart-number");
    
    const smartYear = document.getElementById("smart-year");
    
    const smartSymbol = document.getElementById("smart-symbol");
    
    const smartUppercase = document.getElementById("smart-uppercase");
    
    const smartRandom = document.getElementById("smart-random");
    
    const generateSmartBtn = document.getElementById("generate-smart");
    
    const smartPasswordBox = document.getElementById("smart-password");
    
    const copySmartBtn = document.getElementById("copy-smart-btn");
    
    const generateAnotherBtn = document.getElementById("generate-another");
    
    const smartStrengthBar = document.getElementById("smart-strength-bar");
    
    const smartStrengthText = document.getElementById("smart-strength-text");

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

    alert("✅ Password Copied Successfully");

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

    // Number of words selected
    const wordCount = Number(
        document.getElementById("word-count").value
    );

    // Get separator
    const separator =
        document.getElementById("separator").value;

    // Store generated words
    const selectedWords = [];

    // Generate required number of words
    for (let i = 0; i < wordCount; i++) {

        let word;

        do {

            word = getRandomWord();

        } while (selectedWords.includes(word));

        selectedWords.push(word);

    }

    // Join all words
    let passphrase = selectedWords.join(separator);

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

function generateSmartPassword() {

    const name = smartName.value.trim();

    const word = smartWord.value.trim();

    const place = smartPlace.value.trim();

    const number = smartNumber.value.trim();

    const year = smartYear.value.trim();

    // Store user inputs
    let parts = [];

    if (name !== "") parts.push(name);

    if (word !== "") parts.push(word);

    if (place !== "") parts.push(place);

    if (number !== "") parts.push(number);

    if (year !== "") parts.push(year);

    // Shuffle the array
    parts.sort(() => Math.random() - 0.5);

    // Select first 3 parts
    const randomCount = Math.floor(Math.random() * 2) + 2;

    const selectedParts = parts.slice(0, randomCount);

    // Join them
    let password = transformText(
        selectedParts.join("")
    );

    if (smartUppercase.checked) {

        const randomIndex = Math.floor(
            Math.random() * password.length
        );
    
        password =
            password.substring(0, randomIndex) +
            password[randomIndex].toUpperCase() +
            password.substring(randomIndex + 1);
    
    }
    if (smartSymbol.checked) {

        const symbols = "!@#$%&*?";
    
        const randomSymbol =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];
    
        password += randomSymbol;
    
    }

    if (smartRandom.checked) {

        const randomChars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
        const randomCharacter =
            randomChars[
                Math.floor(
                    Math.random() * randomChars.length
                )
            ];
    
        password += randomCharacter;
    
    }
    // Display password
    smartPasswordBox.value = password;
    checkSmartPasswordStrength(password);

}

function transformText(text) {

    let result = text;

    if (smartSymbol.checked) {

        result = result
            .replace(/a/gi, "@")
            .replace(/s/gi, "$");

    }

    result = result
        .replace(/e/gi, "3")
        .replace(/o/gi, "0");

    return result;

}

function checkSmartPasswordStrength(password) {

    let score = 0;

    if (password.length >= 12) score++;

    if (/[A-Z]/.test(password)) score++;

    if (/[a-z]/.test(password)) score++;

    if (/[0-9]/.test(password)) score++;

    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {

        smartStrengthBar.style.width = "25%";
        smartStrengthBar.className = "progress-bar bg-danger";
        smartStrengthText.textContent = "🔴 Weak";

    }

    else if (score <= 4) {

        smartStrengthBar.style.width = "60%";
        smartStrengthBar.className = "progress-bar bg-warning";
        smartStrengthText.textContent = "🟡 Medium";

    }

    else {

        smartStrengthBar.style.width = "100%";
        smartStrengthBar.className = "progress-bar bg-success";
        smartStrengthText.textContent = "🟢 Strong";

    }

}

function copySmartPassword() {

    if (smartPasswordBox.value === "") {

        alert("Generate a smart password first!");

        return;

    }

    navigator.clipboard.writeText(
        smartPasswordBox.value
    );

    alert("✅ Smart Password Copied!");

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

generateSmartBtn.addEventListener(
    "click",
    generateSmartPassword
);

copySmartBtn.addEventListener(
    "click",
    copySmartPassword
);

generateAnotherBtn.addEventListener(
    "click",
    generateSmartPassword
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