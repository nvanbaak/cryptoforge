// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthSlider = document.getElementById("lengthInput");
var lengthOutput = document.getElementById("lengthOutput");


// Write password to the #password input
function writePassword() {

    // define our variables
    var output;
    var passwordText = document.querySelector("#password");

    // first we check whether the user has selected any boxes
    if( document.getElementById("lowercaseCheck").checked ||
    document.getElementById("uppercaseCheck").checked ||
    document.getElementById("numberCheck").checked ||
    document.getElementById("specialCheck").checked ) {

        // if so, we generate a password
        output = generatePassword()
    } else {

        // otherwise, we send a message telling them to pick something
        output = "Please select at least one character type!"
    }

    // we send the content to the output element
  passwordText.value = output;
}

// generates a password based on the user-selected settings
function generatePassword() {

    // define our variables
    var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "+"];

    // generate the character array to sample from
    // we do this by adding each array to the sample based on whether the user checked the appropriate box
    var sampleArray = [];

    // lowercase
    if ( document.getElementById("lowercaseCheck").checked ) {

        sampleArray.concat(lowercaseArray);
    }

    // uppercase
    if ( document.getElementById("uppercaseCheck").checked ) {

        sampleArray.concat(uppercaseArray);
    }

    // numbers
    if ( document.getElementById("numberCheck").checked ) {

        sampleArray.concat(numberArray);
    }

    // special characters
    if ( document.getElementById("specialCheck").checked ) {

        sampleArray.concat(specialArray);
    }


    // once the sampling array is generated, we sample it to assemble the password

    var output = "";

    for (i=0; i < lengthSlider.value; i++) {

        output = output + sampleArray[i];

    }

    return output;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Update the password length output whenever the length slider changes
lengthSlider.oninput = function() {
    lengthOutput.innerHTML = this.value;
}