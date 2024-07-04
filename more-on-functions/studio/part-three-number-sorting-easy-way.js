


function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
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
      console.log(nums3);
    }
    return newArray;
    
  }
//Sample arrays for testing:

let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

let ascendingArray = createNewArr(nums3);
console.log(ascendingArray);

//Sort each array in descending order.
console.log(ascendingArray.reverse());
