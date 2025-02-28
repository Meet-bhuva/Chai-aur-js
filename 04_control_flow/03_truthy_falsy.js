const userEmail = "M@eetBhuva@gmail.com"

if(userEmail){
    console.log("Got user's email")
}else{
    console.log("can not find user email address")
}

//Falsy values : false, '', "",  0, -0, BigInt 0n, null, undefine, NaN
//Truthy values : "0", 'false', " ", [], {}, function(){}

// const emptyArray = []
// if(emptyArray.length === 0){
//     console.log("Array is empty")
// }

// const emptyObject = {}
// if(Object.keys(emptyObject).length === 0){
//     console.log("Object is empty")
// }


/**  Nullish Coalescing Operator (??) : null undefine  **/

// let var1;
// // var1 = 5??10 //This is the syntax of Nullish...
// var1 = undefined??null  //if 1st value is undefined or null than it give 2nd value as a output
// console.log(var1)


/**  Terniary Operator **/
//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("More than 80 ") : console.log("I have not money")