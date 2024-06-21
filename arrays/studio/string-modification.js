const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(3).concat(str.slice(0,3));
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`This creates a new string ${newStr} with the first 3 chars of the original string ${str} added to the end`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userInput = input.question("Enter the number of chars you want to see sliced ");
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(userInput > str.length)
    {
        console.log(newStr)
        console.log(`Please enter a number less than the total number of letters in the word ${str}`)
    }
else
{
    newStr = str.slice(userInput).concat(str.slice(0,userInput));
    console.log(newStr);
}
    
