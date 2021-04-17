// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var UpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var OutcomeArray = [];

  var Passwordlength = prompt("Choose a minimum of 8 characters and a maximum of 128 characters.");
  var lower =confirm ("Would you like lower case letters in your password?");
  var Upper =confirm ("Would you like upper case letters in your password?");
  var symbol =confirm ("Would you like symbols in your password?");
  var numbers =confirm ("Would you like numbers in your password?");
  if (numbers){
    result
  }
} 
// Write password to the #password inpu
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);