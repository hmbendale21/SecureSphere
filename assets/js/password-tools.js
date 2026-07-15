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