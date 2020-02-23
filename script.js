// Pseudo Code
// Click generate password button and see prompts for password criteria.
// First ask for password length between 8-128 characters
// Validate user selection
// Then ask if they want lowercase letters and validate user selection.
// Then ask if they want uppercase letters and validate user selection.
// Then ask if they want numbers and validate user selection.
// Then ask if they want special characters and validate user selection.
// Once user had made all their selections, a password generates either in an alert or written on the page using all the criteria the user selected.

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseValue;
var upperCaseValue;
var numbersValue;
var specialValue;
var lengthValue;


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Generating password with a function. Creates the prompts and confirms user must go through to create password
function generatePassword() {
  var length = prompt("Choose your password length. It must be least 8 characters and no more than 128 characters");
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numbers = confirm("Do you want Numbers?");
  var special = confirm("Do you want special characters?");
  var passwordValue = [];
  


  // Password length based on user prompt input
if (length >=8 && length <=128) {
  lengthValue = parseInt(length);
}
else {
  while (
    length !== null &&
    (isNaN(lengthValue))
  )
  {
  alert ("Password length must be a number and 8 to 128 characters");
  lengthValue = prompt(length);
}
}

//Lower case values based on user confirm input
if (lowerCase === true) {
  lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (i = 0; i < lowerCaseValue.length; i++) {
    passwordValue.push(lowerCaseValue[i]);
  }

  }


// Uppercase values based on user input
if (upperCase === true) {
upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for (i = 0; i < upperCaseValue.length; i++) {
  passwordValue.push(upperCaseValue[i]);
}

}

// Numbers values based on user confirm input
if (numbers === true) {
numbersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (i = 0; i < numbersValue.length; i++) {
  passwordValue.push(numbersValue[i]);
}

}

// Special Characters values based on user confirm input
if (special === true) {
specialValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];

  for (i = 0; i < specialValue.length; i++) {
  passwordValue.push(specialValue[i]);
}


}


// Create for loop that loops through criteria and concatenates them randomly

var newPassword = ""

for(var i = 0; i < lengthValue; i++){
  newPassword += passwordValue[Math.floor(Math.random() * passwordValue.length)];

}

return newPassword;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
