function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener("click", function(){
        paragraph.innerHTML = "Houston, we have liftoff!"
    });
    missionAbort.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "red";
    });
    missionAbort.addEventListener("mouseout", () => {
        missionAbort.style.removeProperty('background-color');
    })
    missionAbort.addEventListener("click", function(){
        let answer = window.confirm("Are you sure you want to abort the mission?");
        if(answer === true)
        {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        }
    })
    
}

window.addEventListener("load", init);
