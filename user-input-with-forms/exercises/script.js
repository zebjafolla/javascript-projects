//Code Your Solution Below

window.addEventListener("load", function(){
    let form = document.querySelector("form");
    let testName = document.querySelector("input[name=testName]");
    let testDate = document.querySelector("input[name=testDate]");
    let rocketType = document.querySelector("input[name=rocketType]");
    let rocketBoosters = document.querySelector("input[name=rocketBoosters]");
    let windRating = document.querySelector("input[name=windRating]");
    let servers = document.querySelector("input[name=servers]");
    console.log(testDate.value);
    form.addEventListener("submit", function(event){
        if (testName.value === "" || testDate.value === "" || rocketType.value === "" || rocketBoosters.value === "" || windRating.value === "" || servers.value === "")
        {
            
            event.preventDefault();
            alert("Please dont forget to fill out all empty or unchosen fields.")
        }
        else
        {
            alert("fields updated!");
        }
    })
})
