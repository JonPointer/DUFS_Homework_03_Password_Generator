// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password function
function generatePassword() {
  // Ask the user for desired number of characters
  // Ensure that the input is between 8 and 128, inclusive
  var pwLength = 0;
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt(
      "Please enter desired length of password (between 8 and 128)"
    );
  }

  // Ask the user which characters they would like (lowercase, uppercase, numeric, and/or special characters)
  var lower = confirm("Would you like lowercase characters in your password?");
  var upper = confirm("Would you like uppercase characters in your password?");
  var numeric = confirm("Would you like numeric characters in your password?");
  var special = confirm("Would you like special characters in your password?");

  //
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
