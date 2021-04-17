// Assignment Code
var generateBtn = document.querySelector("#generate");
var length 
var numberString = "0123456789";
var UpperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var symbolsString = "!@#$%^&*(){}[]=<>/,.";
var randomPswdString = '';
// Write password to the #password input
function generatePassword() {
  var generateBtn = prompt("Choose a minimum of 8 characters and a maximum of 128 characters.");

  if (generateBtn < 8 || generateBtn > 128) {
    
  }
  
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var allowed = {};
  if (number) password + (allowed.number = "1234567890");

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword).value;
