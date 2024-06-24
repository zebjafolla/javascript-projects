let num = 12345;

//Returns 'undefined'.
console.log(num.length)

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
console.log(String(num).length - 1)
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if(String(num).indexOf(".") !== -1)
    {
        console.log(String(num).length - 1)
    }
else
{
    console.log(String(num).length)
}
