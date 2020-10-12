// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Random number generator function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkChar(charNum, min, max, type) {
  var range = false;
  var rtnString = "";
  if (charNum >= min && charNum <= max) {
    // The character is in the range of the type
    range = true;
    if (type) {
      // The user wants this type, so return the character of this ASCII number
      rtnString = String.fromCharCode(tmpCharacterNum);
    }
  }
  return [range, rtnString];
}

// Generate password function
function generatePassword() {
  //
  // Ask the user for desired number of characters
  // Ensure that the input is between 8 and 128, inclusive
  var pwLength = 0;
  while (pwLength < 8 || pwLength > 128) {
    pwLength = prompt(
      "Please enter desired length of password (between 8 and 128)"
    );
  }
  //
  // Ask the user which characters they would like (lowercase, uppercase, numeric, and/or special characters)
  anyAnswer = false;
  while (anyAnswer === false) {
    var lower = confirm("Would you like lowercase characters in your password? OK = Yes, Cancel = No");
    var upper = confirm("Would you like uppercase characters in your password? OK = Yes, Cancel = No");
    var numeric = confirm("Would you like numeric characters in your password? OK = Yes, Cancel = No");
    var special = confirm("Would you like special characters in your password? OK = Yes, Cancel = No");
    if (lower || upper || numeric || special) {
      // The user picked at least one of the options, so end the while loop
      anyAnswer = true;
    }
    else {
      // The user didn't pick any of the options, so ask again
      alert("You must choose at least one of the options: lowercase, uppercase, numeric, or special.  Please try again.");
    }
  }
  //
  // Generate the random characters.
  //
  // For ascii text values:
  //    lowercase = 97-122
  //    uppercase = 65-90
  //    numeric = 48-57
  //    special characters = Remaining numbers in 32-126
  //
  // Set min and max ASCII character number
  var minChar = 32;
  var maxChar = 126;
  //
  // Start a blank string to build the password
  var passwordBuild = "";
  var tmpString = "";
  var tmpAddChar = "";
  //
  // Loop to pick pwLength number of characters
  for (var i = 1; i <= pwLength; i++) {
    // First, pick a random number from the ascii table
    var tmpCharacterNum = getRndInteger(minChar, maxChar);
    //
    // Check to see if this ASCII number is lowercase and if the user wanted lowercase
    tmpAdd = checkChar(tmpCharacterNum, 97, 122, lower);
    // If charCheck[0] is false, then it wasn't lowercase and we need to check the next type
    if (!charCheck) {
      // Now we check to see if this ASCII number is uppercase
      charCheck = checkChar(tmpCharacterNum, 65, 90, upper);
    }
    // If tmpAddChar is an empty string, then we need to check the next type
    if (tmpAddChar === "") {
      // Check to see if this ASCII number is numeric
      tmpAddChar = checkChar(tmpCharacterNum, 48, 57, numeric);
    }
    // Now, if tmpAddChar is still an empty string, then 

    //
    // If we've reached this point, the character is a special character
    else {
      // So, it's special, now see if they wanted special
      if (special) {
        // it's special and they wanted special, so set the character to add
        tmpAddChar = String.fromCharCode(tmpCharacterNum);
      } else {
        // it's special, but they didn't want special, so don't add it, and decrease the counter to redo this character
        tmpAddChar = "";
        i--;
      }
    }
    tmpString = passwordBuild;
    passwordBuild = tmpString.concat(tmpAddChar);
  }

  return passwordBuild;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
