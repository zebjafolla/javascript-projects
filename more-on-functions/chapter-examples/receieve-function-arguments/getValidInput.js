const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

let isCharA = function(n) {
  if (n.slice(0, 1) == "a")
    {
      return true;
    }
    else{
      return false
    }
};
getValidInput('Please insert input that starts with an "a"', isCharA)
// TODO 1: write a validator 
// that ensures input starts with "a"

// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!
// const input = require('readline-sync');

// function getValidInput(prompt, isValid) {

//     // Prompt the user, using the prompt string that was passed
//     let userInput = input.question(prompt);

//     // Call the boolean function isValid to check the input
//     while (!isValid(userInput)) {
//     console.log("Invalid input. Try again.");
//     userInput = input.question(prompt);
//     }

//     return userInput;
// }

// // A boolean function for validating input
// let isEven = function(n) {
//     return Number(n) % 2 === 0;
// };

// console.log(getValidInput('Enter an even number:', isEven));