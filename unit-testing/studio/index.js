
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: "100",
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function(string){
        let combinedSt = "";



if(string % 2 === 0)
    {
        if( string % 3 === 0 && string % 2 === 0)
        {
            {
                if(string % 2 === 0 && string % 3 === 0 && string % 5 === 0)
                    {
                        return "LaunchCode Rocks!";
                    }
                return "LaunchCode!";
            }
        }
        else if(string % 2 === 0 && string % 5 === 0)
            {
                return "Launch Rocks! (CRASH!!!!)"
            }
        combinedSt += "Launch!";
    }
    console.log(string);
    if (string % 3 === 0)
    {
        if(string % 3 === 0 && string % 5 === 0 )
            {
                
                return "Code Rocks!";
            }
        combinedSt += "Code!";
    }
    if (string % 5 === 0)
    {
        combinedSt += "Rocks!";
    }
    if(string % 2 !== 0 && string % 3 !== 0 && string % 5 !== 0)
    {
        combinedSt += "Rutabagas! That doesn't work!";
    }
    return `${combinedSt}`;
}}
console.log(launchcode.launchOutput(2));
module.exports = launchcode;

let output = '';
  
    if (num%2 === 0){
      output += 'Launch';
    }
  
    if (num%3 === 0){
      output += 'Code';
    }
  
    if (num%5 === 0){
      if (output) {
        output += ' Rocks';
      } else {
        output += 'Rocks';
      }
    }
// let numbersArr = [2, 3, 5];
// let responsesObj = {
// one : "LaunchCode Rocks!",
// two : "LaunchCode!",
// three : "Launch Rocks! (CRASH!!!!)",
// four : "Launch!",
// five : "Code Rocks!",
// six : "Code!",
// seven : "Rocks!",
// eight : "Rutabagas! That doesn't work!"
// };
    
// if(string % numbersArr[0] !== 0 && string % numbersArr[1] === 0 && string % numbersArr[2] === 0)
// {
// console.log(string % numbersArr[0]);
// console.log("one")
// if(string % numbersArr[0] === 0 && string % numbersArr[1] === 0)
// {
//     console.log("two")
//     if(string % numbersArr[1] === 0 && string % numbersArr[2] === 0)
//     {
//         console.log("three")
//         if(string % numbersArr[0] === 0)
//         {
//             console.log("four")
//             return responsesObj.four
//         }
//         else if(string % numbersArr[1] === 0)
//         {
//             console.log("five")
//             return responsesObj.six
//         }
//         else if(string % numbersArr[2] === 0)
//         {
//             console.log("six")
//             return responsesObj.seven
//         }
//         else(string % numbersArr[0] !== 0 || string % numbersArr[1] !== 0 || string % numbersArr[2] !== 0)
//         {
//             console.log("seven")
//             return responsesObj.eight
//         }
//         return responsesObj.five;
//     }
//     return responsesObj.two
// }
// return responsesObj.two;
// }
// return responsesObj.one
// // console.log((responsesObj.one));
// }
// }

