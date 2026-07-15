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


function generatePassword() {

    // Step 1: Combine all character sets
    let allCharacters =
        uppercaseChars +
        lowercaseChars +
        numberChars +
        symbolChars;

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