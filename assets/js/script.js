// Assignment code here

// function that is called by the button click. Returns a string that is the final random password to be printed to the screen.
var generatePassword = function () {
  var userChoices = getUserInput();
  return makePassword(userChoices);
}

// function to prompt user for what length password they want and what characters to include. Verifies all input and loops until expected input is received.
// returns an array containing the desired password length at index 0 and either 0 or 1 at the other indexes to indicate desired character types. 
var getUserInput = function () {
  var lengthPrompt = 0;
  while (lengthPrompt < 8 || lengthPrompt > 128) {

    lengthPrompt = Number(window.prompt("How long would you like your password to be? (please enter a number between 8 and 128)"));
    if (isNaN(lengthPrompt)) {
      lengthPrompt = 0;
    }
  }

  // variables to get user's character choices. Entries in typeChoices will be changed to 1 if a corresponding character type is desired.
  // choiceCount is used to check if the user has failed to select any option
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

// function to randomly generate a password with the given parameters. Returns the password as a string.
var makePassword = function (choices) {
  var pwd = "";

  //charOptions will be an array of all possible character options as chosen by the user
  charOptions = [];
  if (choices[1] === 1) {
    charOptions.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
  if (choices[2] === 1) {
    charOptions.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }
  if (choices[3] === 1) {
    charOptions.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }
  if (choices[4] === 1) {
    charOptions.push(" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~");
  }

  for (var i = 0; i < choices[0]; i++) {
    pwd = pwd + randomEntry(charOptions);
  }
  return pwd
}

// function called in makePassword(). Returns a random entry from the given array, using Math.random() to generate the random index.
var randomEntry = function (array) {
  var index = Math.floor(Math.random() * array.length);
  return array[index];
}

///////////////////////////// Assignment code end ///////////////////////////////////////////////////////////////////////////////////////////

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
