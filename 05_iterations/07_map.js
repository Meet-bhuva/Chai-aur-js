let myNewnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let myNumbers1 = myNewnums.map( (num) => num + 10);
// console.log(myNumbers1)


/******************** Chaining *****************/

// let myNewnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let myNumbers = myNewnums.map( (num) => num * 10 )
                         .map( (num) => num+1)
                         .filter( (num) => num >= 40)


// console.log(myNumbers)


let numbers = [1, 2, 3];

let now = numbers.forEach((num, index) => {
  return num * 2; // Modifying original array
});

console.log(now); // [2, 4, 6]

