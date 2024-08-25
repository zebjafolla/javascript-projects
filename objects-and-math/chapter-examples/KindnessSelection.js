function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 let combined = [happiness, words];
 console.log(combined);
 console.log("----------------")
 
//  for (i=0; i < 8; i++){
//    console.log(randomSelection(happiness));
//  }
 
 //Experiment with the code above. Try to:
 for (i=0; i < 3; i++){
  console.log(randomSelection(happiness));

}
let goggle = Math.random();

console.log(goggle);
console.log("----------------")
 //a) Print 3 random selections from each array.
 for (i=0; i < 3; i++){
  console.log(randomSelection(words));
}
console.log("----------------")
//b) Have the code randomly pick one array, and then print 2 random items from it.

//  for (let i =0; i < 2; i++)
//   {
//         console.log(randomSelection(combinedrandomSelection(combined)[randomSelection(combined)]));
//         console.log(combined[i]);
//   }
let randomArray = randomSelection(combined);

for (let i = 0; i < 2; i ++)
  {
    console.log(randomSelection(randomArray));
  }
  // console.log(randomSelection(randomSelection(combined)));
  
  //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
  console.log("----------------")
  let newArray = randomSelection(randomSelection(combined));
  console.log(newArray);