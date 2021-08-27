// Assignment code here
/////////////////////////////////////////////////////////////////////////////////////////////////

var generatePassword = function () {
  var userChoices = getUserInput();
  return makePassword(userChoices);
}

var getUserInput = function () {

  var lengthPrompt = 0;
  while (lengthPrompt < 8 || lengthPrompt > 128) {

    lengthPrompt = Number(window.prompt("How long would you like your password to be? (please enter a number between 8 and 128)"));
    if (isNaN(lengthPrompt)) {
      lengthPrompt = 0;
    }
  }

  var charTypes = ["lowercase", "uppercase", "numeric", "special"];
  var typeChoices = [0, 0, 0, 0];
  var choiceCount = 0;

  while (choiceCount === 0) {
    for (var i = 0; i < charTypes.length; i++) {
      var typePrompt = window.prompt("Would you like to include " + charTypes[i] + " characters in your password? \nType YES or NO");

      switch (typePrompt.toLowerCase()) {
        case "yes":
          typeChoices[i] = 1;
          choiceCount++;
          break;
        case "no":
          break;
        default:
          window.alert("Please enter 'YES' or 'NO'");
          i--;
      }
    }
    if (choiceCount === 0) {
      window.alert("You must choose at lease one character type for your password. Please try again.");
    }
  }
  var choiceArray = [lengthPrompt, typeChoices[0], typeChoices[1], typeChoices[2], typeChoices[3]];
  return choiceArray;
}

var makePassword = function (choices) {

  return "fuck"

}






































































/////////////////////////////////////////////////////////////////////////////////////



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
