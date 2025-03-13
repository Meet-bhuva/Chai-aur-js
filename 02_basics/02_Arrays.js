let arr1 = ["Spiderman", "Irenman", "Thor"]
let arr2 = ["Batman", "Hanuman", "Nagraj"]

// arr1.push(arr2)
// console.log(arr1)
// console.log(arr1[3][1]) // Hanuman = 4th value's 2nd value

/*** concat / spread operator */
let allArr = arr1.concat(arr2) //Concat return new array that's why make a variable and save the arr1's value in it
// console.log(allArr)

let new_arr = [...arr1, ...arr2] // Syntax of spread operator
// console.log(new_arr)

let new_another_arr = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10],11], 12, 13]
let solve_arr = new_another_arr.flat(Infinity) // flat helps to merge every depth array value with main array 
// console.log(solve_arr);


//Sometimes documents gives value in objects and different form but need an array, so convert every value in array
console.log(Array.isArray("Hitesh")) // Check an array
console.log(Array.from("Hitesh")) // convert value in an array
console.log(Array.from( { name:"Meet"} ))

let score1 = 100
let score2 = "200"
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Add all variables into array