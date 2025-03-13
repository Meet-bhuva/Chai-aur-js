let myDates = new Date() // There new is a keyword that help to gives new dates mean present date

// console.log(myDates) // give present date
// console.log(myDates.toString()) // give present date and time 
// console.log(myDates.toDateString()) // give only date
// console.log(myDates.toLocaleString()) // give present date and time in general(local) formate 
// console.log(typeof myDates)

// let newDate = new Date(2024, 0, 9) //In js, month start at 0 to 11, 0 = january
// console.log(newDate.toDateString())

// let newDate = new Date(2024, 0, 9, 15, 45)
// console.log(newDate.toLocaleString())

let newDate = new Date("2024-01-23") // YY/MM/DD formate
// console.log(newDate.toLocaleString())
// console.log(newDate)

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(newDate.getTime())
// console.log(Math.floor(myTimeStamp/1000)) //For getting second

// let newDate = new Date()
// console.log(newDate)
// console.log((newDate.getMonth()) + 1) //Because of month started at 0
// console.log(newDate.getDay())


//To customise properties 
// console.log(newDate.toLocaleString("default", {  // default == parameters
//     weekday:"long", // ctr + space for getting option 
// }))

// let specificDate = new Date("2024-12-25"); // Christmas
// console.log(specificDate.toDateString()); // Wed Dec 25 2024

const now = new Date();
console.log(now.getTime())
const now1 = new Date(now.getTime());
console.log(now1.toLocaleString())