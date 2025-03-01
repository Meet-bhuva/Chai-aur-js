// This loops are mostly used for the objects and array specific 

// for of loop 

//["", "", ""]
//[{}, {}, {}]

// for ( variable of Array){
// }

// Array
const arr = [1, 2, 3, 4, 5, 6, 7]
for(const num of arr){
    // console.log(num)
}

// String
const greetings = "i love to my parents then the girlfriend"
for(const greet of greetings){
    // console.log(`Each character is ${greet}`)
}

// Maps
// variable = new Map();
// variable.set(" ", " ")

const val = new Map()
val.set('IN', "India")
val.set('USA', "United State Of America")
val.set('FR', "France")
val.set('UK', "United Kingdome")

// console.log(val)

for (const [element, value] of val) {
    // console.log(element, ':=', value)
}


// Objects

const games = {
    game1 : "cricket",
    game2 : "pikkle-ball",
    game3 : "foot-ball",
    game4 : "box-cricket"
}

// for (const [key, val] of games) {
//     console.log(key, val)
// }