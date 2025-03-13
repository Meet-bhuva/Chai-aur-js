let name = "Meet"//First way to declare string 
let myRepo = 50

// console.log(name + myRepo + " value") // This is old syntax, so do not use it 
// console.log(`My name is ${name} and i have total ${myRepo} repositories`) // This is new syntax, nowdays use this mostly 

let secondVal = new String('Meet is a right person')//Second way to declare string
// console.log(secondVal)
// console.log(secondVal[0])
// console.log(secondVal.__proto__)
// console.log(secondVal.length)
// console.log(secondVal.toUpperCase())
// console.log(secondVal.toLowerCase())
// console.log(secondVal.charAt('2'))
// console.log(secondVal.indexOf('e'))

//Important methods
let newString = secondVal.substring(3, 4)
// console.log(newString)

let anotherString = secondVal.slice(1, 3) // we can give nagative value in slice but do not give nagative value in substring
// console.log(anotherString)

let newStringOne = "       Meet.      "
// console.log(newStringOne)
// console.log(newStringOne.trim())// The use of trim() is removing extra space //Most use in input from client

let url = "https//meet.com/meet%50bhuva"
// console.log(url.replace('%50', '-'))//Replace (%50) to (-)
// console.log(url.includes("meet"))//Check the value from the string  

let newStringTwo = "Meet-Patel-96241-bhuva"
// console.log(newStringTwo.split("-")) //Split is convert to array form from the (-) like this [ 'Meet', 'Patel', '96241', 'bhuva' ]

let str = "Meet, Mithabhai, Bhuva"
// console.log(str.indexOf('is'))
// console.log(str.lastIndexOf('is'))
let str1 = str.split(", ")
console.log(str1)
let str2 = str1.join(",")
console.log(str2)