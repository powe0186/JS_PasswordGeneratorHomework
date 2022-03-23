// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create arrays to hold capitals, lowercase, digits, and special characters.
const uppers = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H','I', 'J', 'K', 'L','M', 'N', 'O', 'P','Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
const lowers = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'k', 'l','m', 'n', 'o', 'p','q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
  passwordText.value = password;
}

function generatePassword() {
  // Prompt the user for a password length. If the length is outside the range 8-128, the user is prompted again. 
  // store this value in a variable. I may need to change the variable from a string to a number.

  var length = parseInt(prompt("How long do you want your password to be. Please enter a number between 8 and 128"), 10);

  //Make sure the user input is between 8 and 128. AND THAT IT IS A NUMBER!

  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(prompt("You need to enter a password length between 8 and 128 and it must be a number!"), 10);
  }
  // Prompt the user to type any characters they want included in the password.
  // Should this be separate  y/n prompts for lowercase, uppercase, special, numeric????? I'll assume that for now.
  // Prompt for each of these cases and store a boolean value in variable for each one.
  // Need to deal with the case that the user says N to all question.

  var includesLower = false;
  var includesUpper = false;
  var includesNumbers = false;
  var includesSpecial = false;

  while (!includesLower && !includesUpper && !includesNumbers && !includesSpecial) {
    includesLower = yesOrNo("Should the password include lower case letter?");
    includesUpper = yesOrNo("Should the password include upper case letters?");
    includesNumbers = yesOrNo("Should the password include numbers?");
    includesSpecial = yesOrNo("Should the password include special characters: $, #, &, @, etc ?");

    if (!includesLower && !includesUpper && !includesNumbers && !includesSpecial) {
      alert("You must answer Y for at least one of the questions.")
    }
  }
  
  // create a new array of possibilities by using .concat on the chosen arrays.
  var possibleCharacters = [];
  if (includesLower) {
    possibleCharacters = possibleCharacters.concat(lowers);
  }
  if (includesUpper) {
    possibleCharacters = possibleCharacters.concat(uppers);
  }
  if (includesNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }
  if (includesSpecial) {
    possibleCharacters = possibleCharacters.concat(specials);
  }

  // FOR loop that will run however many times the user's length was. 
  // Loop will concatenate a new random string using unicode and the valid characters array.

  var password = "";
  for (let i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomIndex];
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
