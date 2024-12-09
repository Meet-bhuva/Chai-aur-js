let myArray = [1, 2, 3, 4, 5] //First way to declare
let marvelArray = ["saktiman", "marvel"]
// console.log(myArray[3]) //To access Array value

let newArray = new Array(0, 1, 2, 3) //Second way to declare, use this bracket = ()
// console.log(newArray[3])

/** Array methods  **/

// myArray.push(6) //Add value at the last
// myArray.pop() //Remove value at the last 

// myArray.unshift(6) //Add value at the first
// myArray.shift() //Remove value at the first

//Question - Ans
// console.log(myArray.includes(9))
// console.log(myArray.indexOf(5)) //Give position of value

// let myArr = myArray.join() // join help to removing extra space but it convert in to string
// console.log(myArray)
// console.log(myArr) 
// console.log(typeof myArr) //Join convert myArr in to string

// slice and splice
let arr = [1,2,3,4,5]

console.log("A ", arr)
console.log(arr.slice(1, 3))

console.log("B ", arr) //Not changed main arr

console.log(arr.splice(1, 3))
console.log("c ", arr)//Changed main arr

//slice copy the value and it do not change the main array
//When splice reference the value and it change the main array
