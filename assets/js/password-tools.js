// Password Display
const passwordBox = document.getElementById("generated-password");

// Generate Button
const generateBtn = document.getElementById("generate-btn");

// Password Length
const lengthSlider = document.getElementById("length");

// Length Text
const lengthValue = document.getElementById("length-value");

lengthSlider.addEventListener("input", function () {
    lengthValue.textContent = lengthSlider.value;
});

// Character Sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?";

// Checkbox Elements
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const copyBtn = document.getElementById("copy-btn");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");

function generatePassword() {

    // Step 1: Combine all character sets
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
    
        }
    
        else if (score <= 4) {
    
            strengthBar.style.width = "70%";
            strengthBar.className = "progress-bar bg-warning";
            strengthText.textContent = "🟡 Medium";
    
        }
    
        else {
    
            strengthBar.style.width = "100%";
            strengthBar.className = "progress-bar bg-success";
            strengthText.textContent = "🟢 Strong";
    
        }
    
    }

    // Step 2: Get selected password length
    let passwordLength = Number(lengthSlider.value);

    // Step 3: Create an empty password
    let password = "";

    // Step 4: Generate random characters
    for (let i = 0; i < passwordLength; i++) {

        let randomIndex = Math.floor(
            Math.random() * allCharacters.length
        );

        password += allCharacters[randomIndex];

    }

    // Step 5: Display password
    passwordBox.value = password;

    checkPasswordStrength(password);
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", copyPassword);

function copyPassword() {

    if (passwordBox.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(passwordBox.value);

    alert("✅ Password Copied!");
}