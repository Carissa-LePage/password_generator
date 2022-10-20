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
  lower: "abcdefghijklmnopqrstuvwxyz".split(''),
  uper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
  number: "0123456789".split(''),
  special: "`~!@#$%^&()*-_=+".split(''),
  };
var options = []
///info prompt
console.log(passwordElements.uper);
var userNeedup = window.confirm("Are uppercase letters needed?");
if (userNeedup){
 options.push(...passwordElements.uper);
  console.log("Upper cass letters were chosen", {userNeedup})
  console.log(options)
};
var userNeednumber = window.confirm("Are numbers needed?");
if (userNeednumber){
  //logic here
  console.log("Numbers were chosen", {userNeednumber})
};
var userNeedspecial = window.confirm("Are special characters needed?");
if(userNeedspecial){
  //logic here
  console.log("Special characters were chosen", {userNeedspecial})
};

var userNeedcharaters = window.prompt("How long is needed password? Type number.");
///8 to 128
console.log("Need ", {userNeedcharaters: parseInt (userNeedcharaters)})



//to produce password
var index = Math.floor(Math.random() * options.length);
document.generatePassword = passwordElements[index];

var passwordText = document.querySelector("#password");
passwordText.value = "password";

};
