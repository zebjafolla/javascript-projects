// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    
    let status = document.getElementById("flightStatus")
    let shuttleBG = document.getElementById("shuttleBackground")
    let shuttleH= document.getElementById("spaceShuttleHeight")
    let landing = document.getElementById("landing");
    let buttonTakeOff = document.getElementById("takeoff");
    let abortButton = document.getElementById("missionAbort");
    let leftButt = document.getElementById("left");
    let rightButt = document.getElementById("right");
    let downButt = document.getElementById("down");
    let upButt = document.getElementById("up");
    let rocket = document.getElementById("rocket");
    rocket.style.position = "relative";
    let shuttleHeight = 0;
    rocket.style.top = shuttleHeight + "px";
    let upValue =  0;
    let sideValue = 0;
    buttonTakeOff.addEventListener("click",function(){
        if(window.confirm("Is the shuttle ready for takeoff?"))
        {
            status.innerHTML = "Shuttle in flight."
            shuttleBG.style.backgroundColor = "blue"
            shuttleHeight += 10000;
            shuttleH.innerHTML = shuttleHeight;
            landing.addEventListener("click",function(){
                window.alert("The shuttle is landing. Landing gear engaged.");
                status.innerHTML = "The shuttle is landing. Landing gear engaged.";
                shuttleBG.style.backgroundColor = "green";
                shuttleH.innerHTML = shuttleHeight;
            })
            abortButton.addEventListener("click", function(){
                if(window.confirm("Are you sure you would like to abort the mission?"))
                {
                    status.innerHTML = "Mission aborted."
                    shuttleBG.style.backgroundColor = "green";
                    shuttleH.innerHTML = shuttleHeight;
                }

            })
            upButt.addEventListener("click", function(){
                upValue -= 10;
                rocket.style.top =  upValue + "px";
                shuttleHeight += 10000;
                shuttleH.innerHTML = shuttleHeight;
            })
            downButt.addEventListener("click", function(){
                upValue += 10
                rocket.style.top = upValue + "px";
                shuttleHeight -= 10000;
                shuttleH.innerHTML = shuttleHeight;

            })
            rightButt.addEventListener("click", function(){
                sideValue += 10;
                rocket.style.left = sideValue + "px";

            })
            leftButt.addEventListener("click", function(){
                sideValue -= 10;
                rocket.style.left = sideValue + "px";

            })
            
            }})
// If you are done with the above and have some time left during 
// class, there are a few problems that you can tackle for a bonus mission.

// Keep the rocket from flying off of the background.
// Return the rocket to its original position on the background when it has been landed or the mission was aborted.
        


}
window.addEventListener("load", init);
