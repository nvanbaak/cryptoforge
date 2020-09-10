// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthSlider = document.getElementById("lengthInput");
var lengthOutput = document.getElementById("lengthOutput");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Update the password length output whenever the length slider changes
lengthSlider.oninput = function() {
    lengthOutput.innerHTML = this.value;
}