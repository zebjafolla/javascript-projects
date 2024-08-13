//TODO: Add Your Code Below
let dataSort = function(data){
     Math.max(data.hoursInSpace);
}
window.addEventListener("load", function(){
    let container = document.getElementById("container");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(data){
            for (let i = 0; i < data.length; i++)
            {
                let astronaut = data[i];
                container.innerHTML += 
                `<div class="astronaut">
                    <div class="bio">
                <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                <ul>
                    <li>Hours in Space: ${astronaut.hoursInSpace}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills.join(", ")}</li>
                </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}"/>
                </div>`
           //Display the astronauts sorted from most to least time in space.
    // Make the “Active: true” text green, for astronauts that are still active (active is true).
        // Add a count of astronauts to the page.
           
                
              
            }
        })
    })
})
