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
  ///info for producing
var passwordElements = {
  lower: "abcdefghijklmnopqrstuvwxyz".split,
  uper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split,
  number: "0123456789".split,
  special: "`~!@#$%^&()*-_=+".split,
  };

///info prompt
var userNeedup = window.confirm("Are uppercase letters needed?");
if (!userNeedup){
 skip;
}else{
  userNeedup === passwordElements.uper
}
var userNeednumber = window.confirm("Are numbers needed?");
if 

var userNeedspecial = window.confirm("Are special characters needed?");

var userNeed = window.prompt("How long is needed password? Type number.");





//to produce password
var index = [Math.floor(Math.random() * options.length)];
document.generatePassword = passwordElements[index];



};
