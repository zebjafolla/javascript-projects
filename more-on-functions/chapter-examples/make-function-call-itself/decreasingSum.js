function decreasingSum(integer) {
   if (integer === 1){
      return integer;
   } else {
      //call decreasingSum function again
      return decreasingSum(integer - 1);
   }
}

console.log(decreasingSum(5));
