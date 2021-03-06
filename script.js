// Pulls generate id from HTML and gives password criterion an empty value
var generateBtn = document.querySelector("#generate");
var lowerCaseValue;
var upperCaseValue;
var numbersValue;
var specialValue;
var lengthValue;


// Function to write password onto the page.
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}


// Generating password with a function. Creates the prompts and confirms user must go through to create password.
function generatePassword() {
  var length = getPasswordLength()
  var lowerCase = confirm("Do you want lowercase letters?");
  var upperCase = confirm("Do you want uppercase letters?");
  var numbers = confirm("Do you want Numbers?");
  var special = confirm("Do you want special characters?");
  var passwordValue = [];
  


  // Function to get password length based on user prompt input. Also makes sure input is valid and user can't advance until their input is within length parameters/valid.
  function getPasswordLength() {
    var input = prompt("Choose your password length. It must be least 8 characters and no more than 128 characters");
    while (isNaN(input) || parseInt(input) > 128 || parseInt(input) < 8) {
      var input = prompt("Try again. It must be least 8 characters and no more than 128 characters");
    }
    return input
  }

  // takes user back through confirm prompts if they don't select at least one criteria.
  generatePasswordOptions()
  while (passwordValue.length === 0) {
    alert("Please make a selection")
    var lowerCase = confirm("Do you want lowercase letters?");
    var upperCase = confirm("Do you want uppercase letters?");
    var numbers = confirm("Do you want Numbers?");
    var special = confirm("Do you want special characters?");
    generatePasswordOptions()
  }

  // function to take user through password criteria options and pushes selected values to password array.
  function generatePasswordOptions() {
    //Lower case values based on user confirm input
    lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    if (lowerCase) {
      lowerCaseValue.forEach(function(option){
        passwordValue.push(option)
      })
    }

    // Uppercase values based on user input
    upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (upperCase) {
      upperCaseValue.forEach(function(option){
        passwordValue.push(option)
      })
    }

    // Numbers values based on user confirm input
    numbersValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    if (numbers) {
      numbersValue.forEach(function(option){
        passwordValue.push(option)
      })
    }

    // Special Characters values based on user confirm input
    specialValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
    if (special) {
      specialValue.forEach(function(option){
        passwordValue.push(option)
      })
    }


}


// Create for loop that loops through criteria and concatenates them randomly

var newPassword = ""
  for(var i = 0; i < length; i++){
    newPassword += passwordValue[Math.floor(Math.random() * passwordValue.length)];
  }

return newPassword;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
