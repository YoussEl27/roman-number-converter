function convertToRoman(num) {
    const romanNumbers = {
        "M": 1000,
        "CM": 900,
        "D": 500,
        "CD": 400,
        "C":100,
        "XC":90,
        "L":50,
        "XL": 40,
        "X":10,
        "IX":9,
        "V":5,
        "IV": 4,
        "III": 3,
        "II": 2,
        "I": 1
    }
    let result = ""

    for (let key in romanNumbers) {
        while (num >= romanNumbers[key]) {
            result += key;
            num -= romanNumbers[key];
        }
    }
    return result
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const button = document.getElementById("convertButton");
const errorMsg = document.getElementById("errorMsg");

button.addEventListener("click", () => {
    const value = parseInt(input.value, 10);
    errorMsg.classList.remove("visible")
    output.classList.remove('visible');


    if (!isNaN(value) && value > 0 && value <= 4000) {
        output.textContent = convertToRoman(value);
        output.classList.add('visible');
    }
    else {
        errorMsg.textContent = "Please enter a valid Number between 1 and 400";
        errorMsg.classList.add('visible');
    }
});
