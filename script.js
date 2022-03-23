// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays to hold capitals, lowercase, digits, and special characters.


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Prompt the user for a password length. If the length is outside the range 8-128, the user is prompted again. 
  // store this value in a variable. I may need to change the variable from a string to a number.

  // Prompt the user to type any characters they want included in the password.
  // Should this be separate  y/n prompts for lowercase, uppercase, special, numeric????? I'll assume that for now.
  // Prompt for each of these cases and store a boolean value in variable for each one.


  // create a new array of possibilities by using .concat on the chosen arrays.


  // FOR loop that will run however many times the user's length was. 
  // Loop will concatenate a new random string using unicode and the valid characters array.




  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
