// Java-script is a Dynamic State language, in this language do not need to define types of value.
// 2 types of data-type
// 1st is primitive  -- string, number, boolean, null, undefined, Symbol
// it is call by value -- mean that do not change in original-data, get only copy value

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

/************************************************ Memory ********************************************************/

// 2 types of memory
// 1st is Stack (primitive) --get value in copy form

let myYoutubeName = "chai aur code"
let anotherName = myYoutubeName //enter the copy from myYoutubeName value 
anotherName = "hiteshchaudhry" 

console.log(myYoutubeName) // do not change value because of here enter the value is copy not reference
console.log(anotherName)

// 2nd is Heap (non-primitive) --get value in original form

let valOne = {
    email:"meetbhuva96241@gmail.com",
    upi:"meet@upi.com"
}

let valTwo = valOne //enter the reference value from valOne
valTwo.email = "mbdotesenterprice@gmail.com"

console.log(valOne.email) // change value valOne.email because of here enter the value is reference not copy 
console.log(valTwo.email)