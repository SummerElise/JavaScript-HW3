// Assignment Code
var generateBtn = document.querySelector("#generate");

// Different Arrays
var numberString = "0123456789";
var UpperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var symbolsString = "!@#$%^&*(){}[]=<>/,.";
var randomPswdString ='';

 
var number;
var Upper;
var lower;
var symbols;

// Write password to the #password input
function generatePassword() {
  var generateBtn = prompt("Choose a minimum of 8 characters and a maximum of 128 characters.");

  if(generateBtn < 8 || generateBtn > 128) {
    alert("Invalid choice. Please try again.");
  }

  if (generateBtn => 8 && generateBtn <= 128) {
 number =confirm("Would you like your password to include numbers?")
 Upper =confirm("Would you like your password to include Uppercase letters?")
 lower =confirm("Would you like your password to include lowercase letters?")
 symbols =confirm("Would you like your password to include special characters?")
}

if (number === true) {
  var numberString;
}

if (Upper === true) {
  UpperString = ""
}

  randomPswdString = (numberString + UpperString + lowerString + symbolsString)

  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

 passwordEntry.textContent=randomPswdString

// Add event listener to generate button
var generateBtn=document.getElementById("generateBtn");
var passwordEntry=document.getElementById("passwordEntry");
generateBtn.onclick=generatePassword;
