// Assignment Code
var generateBtn = document.querySelector("#generate");
var options = ['length', 'Upper', 'lower', 'number', 'symbols'];
var minlength = "8";
var maxlength = "128";
var number = "0123456789";
var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var symbols = "!@#$%^&*(){}[]=<>/,.";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var allowed = {};
  if (number) password + (allowed.number = "1234567890");

passwordText.value = password;


var generateBtn = window.prompt("Choose a length for your password between 8 and 128 characters:");
if (length < 8 || length > 128) {
  alert("Minimum length is 8 characters and maximum length is 128");
}
}
// Add event listener to generate button
generateBtn.addEventListener("click").value;
generatePassword ();