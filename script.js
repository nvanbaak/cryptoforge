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


var lengthSlider = document.getElementById("lengthInput");
var lengthOutput = document.getElementById("lengthOutput");

lengthSlider.oninput = function() {
    lengthOutput.innerHTML = this.value;
}