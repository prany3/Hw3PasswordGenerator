// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var length = 8,
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Z", "Y", "Z"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "+"];
  chosenValues = [...lower];
  chosenValues = [...upper];
  chosenValues = [...special];

  
return "test";
chosenValues = [...chosenValues, ...special, ...lower, ...upper];
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 Math.floor(Math.random()*chosenValues.length);


 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);