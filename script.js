// DOM Element Selections
const btnEl = document.querySelector("button");
const birthdayInputEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

/**
 * Handles the click event, validates user input, 
 * computes the age, and updates the UI accordingly.
 */
function calculateAge() {
    const birthdayValue = birthdayInputEl.value;

    // Validate empty input field
    if (birthdayValue === "") {
        resultEl.innerText = "Please enter your date of birth";
        return;
    }

    // Calculate age using helper function
    const age = getAge(birthdayValue);

    // Validate future birth dates
    if (age < 0) {
        resultEl.innerText = "Date of birth cannot be in the future!";
    } else {
        // Display result with correct pluralization
        resultEl.innerText = `Your Age Is ${age} ${age === 1 ? "Year" : "Years"} Old`;
    }
}

/**
 * Calculates exact age in years based on the provided birth date.
 * @param {string} birthdayValue - Date string (YYYY-MM-DD)
 * @returns {number} Age in years
 */
function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);

    // Initial year difference
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();

    // Calculate month difference to adjust for upcoming birthdays
    const monthDifference = currentDate.getMonth() - birthdayDate.getMonth();

    // Adjust age if the birth month/date has not occurred yet in the current year
    if (
        monthDifference < 0 ||
        (monthDifference === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}

// Event Listeners
btnEl.addEventListener("click", calculateAge);