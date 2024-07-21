
let array = [1, 2, 3, 4, 5, 6, 7, 8];

function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let max = arr.length;
  // console.log(`array.length is equal to ${arr.length} max is equal to ${max}`);
  let min = 0;
  let randomNumber = Math.floor(Math.random() * 10);
  // console.log(`first random number: ${randomNumber}`);

  while (randomNumber > (max - 1))
  {
    randomNumber = Math.floor(Math.random() * 10);
    // console.log(`second random number: ${randomNumber}`);
  }
  
  return arr[randomNumber];
}

// console.log(randomFromArray(array))
//TODO: Export the randomFromArray function.

module.exports = randomFromArray;


