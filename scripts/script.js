// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  let password = userPassword.join("");
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create string of letters
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Create string of symbols
let symbol = "!@#$%&*()^";

// New array to store user password
let userPassword = [];

// Function for generating random lower case letter
const myCharLower = () => {
  let charIndex = Math.floor(Math.random() * lower.length);
  let randomChar = lower.charAt(charIndex);
  userPassword.push(randomChar);
}

// Function for generating random upper case letter
const myCharUpper = () => {
  let charIndex = Math.floor(Math.random() * upper.length);
  let randomChar = upper.charAt(charIndex);
  userPassword.push(randomChar);
}

// Function for generating random symbol
const myCharSymbol = () => {
  let charIndex = Math.floor(Math.random() * symbol.length);
  let randomChar = symbol.charAt(charIndex);
  userPassword.push(randomChar);
}

// Function for generating password
const generatePassword = () => {
  let num = prompt("Enter the desired length of the password, you must choose a number between 8 and 128");

    if (num >= 8 && num <= 128) {
      let lowerCase = confirm("Do you want to include lower case letters?");
      for (let i = 1; i <= num; i++) {
        if (lowerCase === true) {
          myCharLower();
        }
      }
      let upperCase = confirm("Do you want to include upper case letters?");
      for (let i = 1; i <= num; i++) {
        if (upperCase === true) {
          myCharUpper();
        }
      }
      let symbol = confirm("Do you want to include symbols?");
      for (let i = 1; i <= num; i++) {
        if (symbol === true) {
          myCharSymbol();
        }
      }
      if (lowerCase === false && upperCase === false && symbol === false) {
          alert("You didn't choose any options!?");
          location.reload();
      }
    } else {
      alert("Invalid selection, please try again!");
      location.reload();
    }
}