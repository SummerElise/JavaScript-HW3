// Assignment Code
var generateBtn = document.querySelector("#generate");
var length 
var Strings = [];
var numberString = "0123456789";
var UpperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var symbolsString = "!@#$%^&*(){}[]=<>/,.";

// Write password to the #password input
function generatePassword() {
  var generateBtn = prompt("Choose a minimum of 8 characters and a maximum of 128 characters.");

  if (generateBtn < 8 || generateBtn > 128) {
    alert("Invalid choice. Please try again.") 
  }
   else {

  
  var numberString = confirm("Would you like your password to include numbers?");
  if(numberString === true) {
    for(var i = 0; i < numberString.length; i++)
    Strings.push(numberString[i]);
    }
  
  var UpperString = confirm("Would you like your password to include Uppercase letters?");
  if (UpperString === true) {
    for (var i = 0; i < UpperString.length; i++);
  }
  var lowerString = confirm("Would you like your password to include lowercase letters?");
  if (lowerString === true) {
    for (var i = 0; i < lowerString.length; i++);
  }
  var symbolsString = confirm("Would you like your password to include special characters?");
  if (symbolsString === true) {
    for (var i = 0; i < symbolsString.length; i++);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword).value;
