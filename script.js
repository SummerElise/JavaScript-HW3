// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
//Arrays
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolArray = ["^", "%", "$", "#", "@", "&", "*", "(", ")", "+", "=", "_", "-"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var UpperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Outcome = [];

//Added else so the prompt would restart when invalid input is alerted
var Passwordlength = prompt("Choose a minimum of 8 characters and a maximum of 128 characters.");
if (Passwordlength < 8 || Passwordlength > 128) {
  //Alert prompted on invalid choice input
  alert("Invalid choice. Please try again.");
  ask();
}
  else { 
var lower =confirm ("Would you like lower case letters in your password?");
  if (lower){
    Outcome = Outcome.concat(lowerArray);
}
var Upper =confirm ("Would you like upper case letters in your password?");
  if (Upper){
    Outcome =Outcome.concat(UpperArray);
}
var symbol =confirm ("Would you like symbols in your password?");
  if (symbol){
    Outcome = Outcome.concat(symbolArray);
}
var numbers =confirm ("Would you like numbers in your password?");
  if (numbers){
    Outcome = Outcome.concat(numericArray);
};

//Creates a random Password
var RandomNewPassword = [];
for (let i=0; i < Passwordlength; ++i) {
  RandomNewPassword.push (Outcome[Math.floor(Math.random() * Outcome.length)]);
 }
  }
return RandomNewPassword.join("") ;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);