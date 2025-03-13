// Two types of declaring objects, 1.Object literals, 2.Object constructer

// 1st is Object literals

const myStr = Symbol("Hey am i Symbol") // I want to add myStr to myObject as a typeof symbol

const myObj = {
  name:"Meet", //In array Index is available, When here Key is available = (name) is a typeof string
  age:20,
  [myStr]:"New value", // This syntax help to use of myStr value as a typeof symbol
  location:"surat",
  email:"meetbhuva96241@google.com",
  isLoggedIn:false,
  lastLoginDate: ["Monday", "Saturday", "Tuseday"]
}

// console.log(myObj.email)
// console.log(myObj["email"]) //Get value like a array index // Key type is a string that's whay use (" ")
// console.log(myObj[myStr]) // use only this syntax to get Symbol value 


// myObj.email = "mbdotsenterprise@gmail.com" //Syntax of how to change any value, now change email value 
// Object.freeze(myObj) // freeze help to stop changing values in myObj
// myObj.email = "mithabhaibhuva96241@gmail.com"  // Not changed email value because we use freeze 
// console.log(myObj);

myObj.funcOne = function(){ //Add function in objects  
  console.log("Hey i m meet and hitesh chaudhry's student")
}
myObj.funcTwo = function(){ //Add function in objects  
  console.log(`Hey i m ${this.name}`) // want to get value (object properties) from the objects, so use this. keywords // Refer name in this syntax
}

// console.log(myObj.funcOne())
// console.log(myObj.funcTwo())

const person = {
  name : "Meet",
  age : 25
}
// person['age'] = 28
// console.log(person["name"]); // "Meet"
// console.log(person["age"]); // 25

let student = {
  name: "Meet",
  marks: {
    math: 90,
    science: 85
  }
};

console.log(student["marks"]["math"]); // 90

