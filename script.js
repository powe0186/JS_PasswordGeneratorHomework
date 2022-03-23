// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays to hold capitals, lowercase, digits, and special characters.
const capitals = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H','I', 'J', 'K', 'L','M', 'N', 'O', 'P','Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
const lowerCase = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'k', 'l','m', 'n', 'o', 'p','q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];
const numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}','~'];


//A function that prompts a Y/N question. Then returns true or false.
function yesOrNo(question) {
  var answer = prompt(question +  " Y/N").toUpperCase();
  while (answer != 'Y' && answer != 'N') {
    answer = prompt("You must chose Y or N").toUpperCase();
  }
  if (answer === 'Y') {
    return true;
  } else {
    return false;
  }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Prompt the user for a password length. If the length is outside the range 8-128, the user is prompted again. 
  // store this value in a variable. I may need to change the variable from a string to a number.

  var length = prompt("How long do you want your password to be. Please enter a number between 8 and 128");

  //Make sure the user input is between 8 and 128.

  while (length < 8 || length > 128) {
    length = prompt("You need to enter a password length between 8 and 128!");
  }
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
