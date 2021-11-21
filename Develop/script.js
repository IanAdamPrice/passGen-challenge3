// Assignment code here
var specialCharacters = "({[=]})!?$%&#*-+.,;:_'";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "0123456789";


var generatePassword = function() {
  var length = prompt("How many characters would you like in your password?");
  if (length < 8) {
    window.alert("Your password must be at least 8 characters long")
  }  else if (length > 128) {
    window.alert("Your password must no more than 128 characters");
  }
}; //function

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
