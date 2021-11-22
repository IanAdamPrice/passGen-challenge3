// Assignment code here
var specialCharacters = "({[=]})!?$%&#*-+.,;:_'";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numberCharacters = "0123456789";


var generatePassword = function() {
  var length = prompt("How many characters would you like in your password?");
  if (length < 8) {
    window.alert("Your password must be at least 8 characters long");
    return;
  }  else if (length > 128) {
    window.alert("Your password must no more than 128 characters");
    return;
  }

  spchars=confirm("Do you want to include special characters?");
  upChars=confirm("Do you want to include uppercase characters?");
  lowChars=confirm("Do you want to include lowercase letters?");
  numChars=confirm("Do you want to include numbers?");
  
  temppassword="";
  
  for (var i = 0; i < length; i++) {
  
    var templetter = "";
    while (templetter==""){
      var modd=(Math.floor(Math.random() * 4));
      //console.log("modd="+modd)
      
      templetter = templetter;
      if (modd == 0){
        //lc
        if (upChars == true){
          templetter = uppercaseLetters.charAt(Math.floor(Math.random() * 26));
        }
      }
      else if (modd == 1){
        //uc
        if (lowChars == true){
          templetter = lowercaseLetters.charAt(Math.floor(Math.random() * 26));

        }
      }
      else if(modd == 2){
        //SC
        if (spchars == true){
          templetter = specialCharacters.charAt(Math.floor(Math.random() * 22));
        }
      }
      else {
        //Digits
        if (numChars == true){
          templetter = numberCharacters.charAt(Math.floor(Math.random() * 10));
        }
      }
    } //while

    var temppassword = temppassword + templetter; 

   } // for
   return temppassword;
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
