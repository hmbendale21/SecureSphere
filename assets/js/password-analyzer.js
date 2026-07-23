const checkUpper = document.getElementById("checkUpper");
const checkLower = document.getElementById("checkLower");
const checkNumber = document.getElementById("checkNumber");
const checkSymbol = document.getElementById("checkSymbol");
const checkLength = document.getElementById("checkLength");
const checkRepeat = document.getElementById("checkRepeat");

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
    updateStrength(passwordScore);
    updateSuggestions(suggestionList);

    let characterSet = 0;

    if (/[a-z]/.test(password)) characterSet += 26;
    if (/[A-Z]/.test(password)) characterSet += 26;
    if (/[0-9]/.test(password)) characterSet += 10;
    if (/[^A-Za-z0-9]/.test(password)) characterSet += 32;

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);
    const hasLength = password.length >= 12;
    const noRepeat = !/(.)\1{2,}/.test(password);


    let entropyValue = 0;

    updateCheck(checkUpper, hasUpper, "Uppercase Letters");
    updateCheck(checkLower, hasLower, "Lowercase Letters");
    updateCheck(checkNumber, hasNumber, "Numbers");
    updateCheck(checkSymbol, hasSymbol, "Special Characters");
    updateCheck(checkLength, hasLength, "Minimum Length");
    updateCheck(checkRepeat, noRepeat, "Repeated Characters");
    if (password.length > 0 && characterSet > 0) {
        entropyValue = Math.round(password.length * Math.log2(characterSet));
    }

    entropy.innerHTML = entropyValue + " Bits";

    if (passwordScore <= 20) {

        riskLevel.innerHTML = "Very High";
        riskLevel.className = "text-danger";

    }
    else if (passwordScore <= 40) {

        riskLevel.innerHTML = "High";
        riskLevel.className = "text-warning";

    }
    else if (passwordScore <= 60) {

        riskLevel.innerHTML = "Medium";
        riskLevel.className = "text-info";

    }
    else if (passwordScore <= 80) {

        riskLevel.innerHTML = "Low";
        riskLevel.className = "text-primary";

    }
    else {

        riskLevel.innerHTML = "Very Low";
        riskLevel.className = "text-success";

    }

    if (entropyValue < 28) {

        crackTime.innerHTML = "Instantly";

    }
    else if (entropyValue < 36) {

        crackTime.innerHTML = "Few Minutes";

    }
    else if (entropyValue < 60) {

        crackTime.innerHTML = "More than a hour";

    }
    else if (entropyValue < 80) {

        crackTime.innerHTML = "Few Days";

    }
    else {

        crackTime.innerHTML = "Several Months";

    }

});

function updateStrength(passwordScore) {

    strengthBar.style.width = passwordScore + "%";

    strengthBar.className = "progress-bar";

    if (passwordScore <= 20) {

        strengthBar.classList.add("bg-danger");
        strengthText.innerHTML = "Very Weak";

    }

    else if (passwordScore <= 40) {

        strengthBar.classList.add("bg-warning");
        strengthText.innerHTML = "Weak";

    }

    else if (passwordScore <= 60) {

        strengthBar.classList.add("bg-info");
        strengthText.innerHTML = "Fair";

    }

    else if (passwordScore <= 80) {

        strengthBar.classList.add("bg-primary");
        strengthText.innerHTML = "Strong";

    }

    else {

        strengthBar.classList.add("bg-success");
        strengthText.innerHTML = "Very Strong";

    }

}

function updateSuggestions(suggestionList) {

    suggestions.innerHTML = "";

    if (suggestionList.length === 0) {

        suggestions.innerHTML =
            "<li class='text-success'>Excellent password!</li>";

        return;

    }

    suggestionList.forEach(function (item) {

        suggestions.innerHTML += `<li>${item}</li>`;

    });

}

function updateCheck(element, condition, text) {

    if (condition) {

        element.innerHTML = `<i class="bi bi-check-circle-fill text-success"></i> ${text}`;
    
        element.style.borderColor = "#22c55e";
        element.style.background = "rgba(34,197,94,0.12)";
    
    } else {
    
        element.innerHTML = `<i class="bi bi-x-circle-fill text-danger"></i> ${text}`;
    
        element.style.borderColor = "#ef4444";
        element.style.background = "rgba(239,68,68,0.10)";
    
    }

}

const toggleBtn = document.getElementById("toolsToggle");
const toolsContent = document.getElementById("toolsContent");
const toggleIcon = document.getElementById("toggleIcon");

toggleBtn.addEventListener("click", () => {

    toolsContent.classList.toggle("show");

    if (toolsContent.classList.contains("show")) {

        toggleIcon.className = "bi bi-chevron-up";

    } else {

        toggleIcon.className = "bi bi-chevron-down";

    }

});

const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebarArrow = document.getElementById("sidebarArrow");

sidebarToggle.addEventListener("click", () => {

    sidebarMenu.classList.toggle("show");

    if (sidebarMenu.classList.contains("show")) {

        sidebarArrow.classList.remove("bi-chevron-right");
        sidebarArrow.classList.add("bi-chevron-down");

    } else {

        sidebarArrow.classList.remove("bi-chevron-down");
        sidebarArrow.classList.add("bi-chevron-right");

    }

}); 