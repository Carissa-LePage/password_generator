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
var userNeed = window.prompt("")
var userNeed = window.prompt("How long is needed password?");

if ( userNeed => 8){

}else( userNeed <= 128 ){

  
};



///info for producing
var passwordElements = {
lower: "abcdefghijklmnopqrstuvwxyz".split,
uper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split,
number: "0123456789".split,
special: "`~!@#$%^&()*-_=+".split,
}
//to produce password
var index = [Math.floor(Math.random() * options.length)];



};
