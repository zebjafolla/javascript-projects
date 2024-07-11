let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronauhtId: 3,
   move: function(){
      return Math.round((Math.random() * 10));
   }
};
console.log(superChimpOne.move());

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronauhtId: 8,
   move: function(){
      return Math.round((Math.random() * 10));
   }
};

let brad = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 5,
   astronauhtId: 10,
   move: function(){
      return Math.round((Math.random() * 10));
   }
};

let leroy = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronauhtId: 2,
   move: function(){
      return Math.round((Math.random() * 10));
   }
};

let almina = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronauhtId: 1,
   move: function(){
      return Math.round((Math.random() * 10));
   }
};


// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.
let crew = [];
crew.push(superChimpOne, salamander, brad, leroy, almina);
console.log(crew);

// Print out the relevant information about each animal.
function crewReports(animal){
   return `${animal.name} is a ${animal.species}. They are ${String(animal.age)} years old and ${animal.mass} kilograms. Their ID is ${animal.astronauhtId}.'`

}
console.log(crewReports(almina));


function fitnessTest(testGroup)
{
   let steps = [0, 0, 0, 0, 0];
   let ctr = 0;
   let winner = false;
   let winnerInfo;

   for (let i = 0; i < testGroup.length; i++)
      {
         if (winner == false)
            {
               if(steps[i] > 20)
                  {
                     winner = true;
                     winnerInfo = testGroup[i];
                     console.log(winnerInfo)
                     
                  }
               steps[i] += (testGroup[i].move());
               ctr += 1;
            }
              
      }

      // return `${winnerInfo.name} took ${steps[i]} steps in ${ctr} turns to win this race.`;
} 
         


// Start an animal race!
console.log(fitnessTest(crew));
