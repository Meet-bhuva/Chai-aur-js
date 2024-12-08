/********************************** conversion ********************************************/
let value = "33"
// console.log(typeof value)
// console.log(typeof (value))

let valueInNumber = Number(value)
// console.log(typeof valueInNumber)

//33 = 33 - 
//"33abc" = NaN -not a number
//trule = 1
//false = 0
//null = 0


let isLogged = 1
// 1 => true, 0 => false, "Me" => true, "" => false
let checkedValue = Boolean(isLogged)
// console.log(checkedValue);

let stringNumb = String(isLogged)
// console.log(typeof stringNumb)


/********************************** operation ********************************************/
let val = 3
let negVal = -val
// console.log(negVal)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)

let str1 = "Meet"
let str2 = " love"
let str3 = " itself"
let str4 = str1 + str2 + str3

// console.log(str4)

// console.log("1" + 2) // output is 12
// console.log(1 + "2") // output is 12
// console.log("1" + 2 + 2) // output is 122
// console.log(1 + 2 + "2") // output is 32  because first addition then marge with string

// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2;
// console.log(num1)
// console.log(num2)
// console.log(num3)

let gameCounter = 100;
gameCounter++;
console.log(gameCounter)