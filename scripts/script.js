// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = userPassword.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create string of letters
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Create string of symbols
var symbol = "!@#$%&*()^";

// New array to store user password
var userPassword = [];

// Function for generating random lower case letter
const myCharLower = x => {
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
  for (let i = 0; i < num; i++) {
    if (num >= 8 && num <= 128) {
      let lowerCase = confirm("Do you want to include lower case letters?");
        if (lowerCase === true) {
          myCharLower();
        }
      let upperCase = confirm("Do you want to include upper case letters?");
        if (upperCase === true) {
         myCharUpper();
        }
      let symbol = confirm("Do you want to include symbols?");
        if (symbol === true) {
         myCharSymbol();
        }
        if (lowerCase === false && upperCase === false && symbol === false) {
          alert("You didn't choose any options!?");
        }
    } else {
      alert("Invalid selection, please try again!");
    }
  }
}










// ["!", "@", "#", "$", "%", "&", "*", "(", ")", "^"];

// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];





// // Function for generating random lower case letter
// const myCharLower = x => {
//   let charIndex = Math.floor(Math.random() * myLetters.length);
//   return myLetters.charAt(charIndex);
// }

// // Function for generating random upper case letter
// const myCharUpper = () => {
//   let charIndex = Math.floor(Math.random() * myLetters.length);
//   let randomChar = myLetters.charAt(charIndex);
//   return randomChar.toUpperCase();
// }

// // Function for generating random symbol
// const charSymbol = () => {
//   let charIndex = Math.floor(Math.random() * mySymbols.length);
//   let char = mySymbols.charAt(charIndex);
//   return char;
// }