// 2 is Object constructor

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.Id = "123@#$"
tinderUser.name = "Meet"
tinderUser.isloggedIn = false
// console.log(tinderUser)

const regularUser = {
    email:"meetbhuva96241@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Meet",
            lastname:"Bhuva"
        }
    }
}
// console.log(regularUser["fullname"]["userfullname"]["firstname"]); //accsess value using [] 
// console.log(regularUser.fullname.userfullname.firstname); //access value using .

const obj1 = { 1:"a", 2:"b"}
const obj2 = { 3:"c", 4:"d"}

// const obj3 = {obj1, obj2} // It's output is not right 
// const obj3 = Object.assign({}, obj1, obj2) //Every objects's value merge with each other, This is the right syntax of merging Object // Every object's value store in {},that's why use {}

const obj3 = {...obj1, ...obj2} //This is spread operator, 90% use this methods to merege every object's value 
// console.log(obj3);

const users = [
    { 
    id:1,
    email:"meet@google.com"
},
{ 
    id:2,
    email:"meet@google.com"
},
{ 
    id:3,
    email:"meet@google.com"
},
{ 
    id:4,
    email:"meet@google.com"
},
{ 
    id:5,
    email:"meet@google.com"
}
]

// console.log(users[1].id) // get 2nd objects properties is Id

// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // get keys
// console.log(Object.values(tinderUser)) // get values

// console.log(tinderUser.hasOwnProperty('isloggedIn')) //To check properties that is exist or not in object ? //Gives output as a boolean 


/******************************************** de-structuring ****************************************************/

const cours = {
    courseName : "Chai aur code",
    price : 999,
    courseTeacher : "Hitesh chaudhry"
}

// cours.courseName

const {courseName} = cours //This is Object destructuring // Course is a object, it transfer their properties 
// console.log(courseName);
const {courseName: CN} = cours  //We can change the name, courseName = CN  
// console.log(CN);

/***************************************** Backend mathi value ave API through and json ma store thay **********************************/

//There is a syntax of the jason, it is a type of a object and Array
// {   "name": "meet",
//     "coursename": "chai aur code"
//     "price":900
// }

// [
//     {},
//     {},
//     {},
//     {}
// ]