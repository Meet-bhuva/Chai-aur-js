// Java-script is a Dynamic State language, in this language do not need to define types of value.
// 2 types of data-type
// 1st is primitive  -- string, number, boolean, null, undefined, Symbol
// it is call by value -- mean that do not change in original-data only copied them

let Id = Symbol("123")
let anotherId = Symbol("123")
// console.log(Id === anotherId)
console.log(typeof Id)


// 2st is non-primitive (referance)  -- objects, array, function

let myArray = ["meet", "om", "trushant"]

let myObjects = {
    name:"meet",
    age: 20
}

let myFunction = function(){
    console.log("This is my functions")
}
myFunction()

