let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split(","));
//the purpose is to find the char that split will separate into different strings
console.log(str);
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join(" "));
console.log(arr);
//3) Do split or join change the original string/array?
//No they dont
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoHoldArr = cargoHold.split(",").sort();
console.log(cargoHoldArr.join(","));