///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
///info prompt
var userNeed = window.prompt("How long is needed password?");
if (userNeed){
//min-8 max-100//

}



///info for producing
var lettersLower = "abcdefghijklmnopqrstuvwxyz".split;
var lettersUper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split;
var numbersLine = "0123456789".split;
var specialCharacter = "`~!@#$%^&()*-_=+".split;

var passwordElements = numbersLine.concat(specialCharacter, lettersLower, lettersUper);
console.log(passwordElements);

var index = Math.floor(Math.random() * options.length);
var passwordGen = passwordElements[index]



};
