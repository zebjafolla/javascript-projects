// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReadyFuel = false;
let launchReadyComputer = false;
let fuelLevel = 20000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReadyFuel = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReadyFuel = false;
}

console.log("launchReady = ", launchReadyFuel);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReadyComputer = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReadyComputer = false;
}

console.log("launchReady = ", launchReadyComputer);
if(launchReadyFuel === true && launchReadyComputer === true)
   {
      console.log(5);
      console.log(4);
      console.log(3);
      console.log(2);
      console.log(1);
      console.log("Liftoff!");
   }