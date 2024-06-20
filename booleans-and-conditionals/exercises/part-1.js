// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let engineTemperature = 1200;
// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
// Write conditional expressions to satisfy safety rules here
if (crewStatus === true)
   {
      console.log("Crew Ready");
   }
else
{
   console.log("Crew Not Ready");
}
if(computerStatusCode === 200)
   {
      console.log("Please standy by. Computer is rebooting.")
   }
else if (computerStatusCode === 400)
   {
      console.log("Success! Computer online.")
   }
else
   {
      console.log("ALERT: Computer offline!")
   }
if(shuttleSpeed > 17500)
   {
      console.log("ALERT: Escape velociy reached!")
   }
else if (shuttleSpeed < 8000)
   {
      console.log("ALERT: cannot maintain orbit!");
   }
else 
   {
      console.log("Stable Speed")
   }
// PREDICT: No they dont
//5. Monitor the shuttle's fuel status
fuelLevel = 18000;
engineTemperature = 2500;
engineIndicatorLight = "NOT red blinking";
if (fuelLevel > 20000 && engineTemperature <= 2500)
   {
      console.log("Full tank. Engines good.");
   }
   else if (fuelLevel > 10000 && engineTemperature <= 2500)
      {
         console.log("Fuel level above 50%. Engines Good.");
      }
      else if (fuelLevel > 5000 && engineTemperature <= 2500)
         {
            console.log("Fuel level above 25%. Engines good.");
         }
         else if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking")
            {
               console.log("ENGINE FAILURE IMMINENT!");
            }
            else if (fuelLevel <= 5000 || engineTemperature > 2500)
               {
                  console.log("Check fuel level. Engines running hot.");
               }
else
{
   console.log("Fuel and engine status pending...");
}
// 6. Final bit of fun -- Launch Override
let commandOverride = false;
if(commandOverride === false && fuelLevel > 5000 && engineTemperature <= 2500)
   {
      console.log("Cleared to launch.");
   }
else if(commandOverride === true)
   {
      console.log("Launch commenced!");
   }
if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride === true)
   {
      console.log("Cleared to Launch!")
   }
else
{
   console.log("Launch scrubbed!");
}





