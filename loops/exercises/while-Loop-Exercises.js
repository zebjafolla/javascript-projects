//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
// const input = require('readline-sync');
let startingFuel = 20000;
let numberOfAstronaughts = 5;
let shuttleAltitude = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
// startingFuel = input.question("Please enter starting fuel value greater than 5000 and less than 30000.");
while(startingFuel <= 5000 || startingFuel >= 30000)
  {
    // startingFuel = input.question("Incorrect. Must be above 5000 and below 30000");
  }




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
// numberOfAstronaughts = input.question("Please enter number of Astronaughts. Max. of 7")
while ( numberOfAstronaughts > 7 || numberOfAstronaughts <= 0)
  {
    // numberOfAstronaughts = input.question("Number of astronaughts must be atleast 1 and up to 7. Please try again.")
  }
  
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
let fuelStatus;
while(startingFuel > 0)
  {
    console.log(`Shuttle altitude is ${shuttleAltitude += 50 * numberOfAstronaughts} kms.`);
    console.log(`Fuel status: fuel is at ${startingFuel -= 100} units.`);
  }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if (shuttleAltitude > 2000)
  {
    console.log("Orbit achieved!");
  }
else
{
  console.log("Failed to reach orbit.");
}
