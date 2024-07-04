


function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...
function createNewArr(arr)
{
  let newArray = [];
  let num = arr.length;
  for (let i = 0; i < num; i++)
  {
    console.log(`i = ${i} and arr is equal to ${arr}` )
    let min = findMinValue(arr);
    newArray[i] = arr.slice(arr.indexOf(min), arr.indexOf(min) + 1);
    arr.splice(arr.indexOf(min), 1);
  }
  return newArray;
}



/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

function sortUsingRecursion(arr, newArray, ctr)
{ 
  console.log(newArray);
if (arr.length === 0)
  {
    console.log(`ctr = ${ctr}`)
    return newArray;
  }
let index = arr.indexOf(findMinValue(arr));
console.log(index);
newArray.push(arr.slice(index, index + 1));
console.log(`arr length is equal to ${arr.length} and the new Array is equal to ${newArray}`);

  arr.splice(index, 1);
  console.log(`ctr = ${ctr += 1}`);
  console.log(arr);
  return sortUsingRecursion(arr, newArray, ctr);
}


//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];
let newArray = [];
let ctr = 0;
// console.log(createNewArr(nums3));
// console.log(`just created "newArray" is ${typeof nums1}`)
console.log(`calling the function: ${sortUsingRecursion(nums2, newArray, ctr)}`);
