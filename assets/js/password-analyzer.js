const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const score = document.getElementById("score");
const entropy = document.getElementById("entropy");
const crackTime = document.getElementById("crackTime");
const riskLevel = document.getElementById("riskLevel");

const suggestions = document.getElementById("suggestions");

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.innerHTML = '<i class="bi bi-eye-slash"></i>';

    } else {

        passwordInput.type = "password";

        togglePassword.innerHTML = '<i class="bi bi-eye"></i>';

    }

});

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    let passwordScore = 0;

    let suggestionList = [];

    // Length
    if (password.length >= 8) {

        passwordScore += 20;

    } else {

        suggestionList.push("Use at least 8 characters.");

    }

    // Lowercase
    if (/[a-z]/.test(password)) {

        passwordScore += 20;

    } else {

        suggestionList.push("Add lowercase letters.");

    }

    // Uppercase
    if (/[A-Z]/.test(password)) {

        passwordScore += 20;

    } else {

        suggestionList.push("Add uppercase letters.");

    }

    // Numbers
    if (/[0-9]/.test(password)) {

        passwordScore += 20;

    } else {

        suggestionList.push("Include numbers.");

    }

    // Symbols
    if (/[^A-Za-z0-9]/.test(password)) {

        passwordScore += 20;

    } else {

        suggestionList.push("Include special characters.");

    }

    score.innerHTML = passwordScore + " / 100";

    suggestions.innerHTML = "";

if (suggestionList.length === 0) {

    suggestions.innerHTML = "<li>Excellent password!</li>";

} else {

    suggestionList.forEach(function(item){

        suggestions.innerHTML += `<li>${item}</li>`;

    });

}

});