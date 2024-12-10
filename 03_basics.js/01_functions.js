function sayMyName() {
    console.log("M")
    console.log("E")
    console.log("E")
    console.log("T")
    console.log("2")
    console.log("8")
    console.log("0")
    console.log("8")
}
// sayMyName()





function addTwoNumbers(number1, number2) { //number1 and number2 are parameters
    console.log(number1 + number2);
}
// addTwoNumbers(3, 4) // 3 and 4 are argument for calling function
// addTwoNumbers(3, "4")





/************** Why need to return value *************************************************/
// function addTwoNumber(number1, number2){
//     console.log(number1 + number2); // console.log() only for help to print any value, it do not return any value
// }
// const value = addTwoNumber(3, 4)
// console.log("The result is ",value) //Output is undefine, if want to get value here, so should return the value from the addtwoNumber's function 

function addTwoNumberOne(number1, number2) {
    // const result = number1 + number2 ;  // This results's power is only in function, not outside
    // return result;
    return number1 + number2; // Here return the value 
}
const result = addTwoNumberOne(3, 4) // returned value come in new variable 
// console.log("The result is ", result) // Here , variables are printed 




function userLogged(username){
    return `This is ${username} and he want to print him name`
}
// console.log(userLogged()) // output is undefine due to not give arguments

function userLoggedIn(username){
    // if(!username) // !username this is differnt way to give conditions // !username mean, if do not find username value when enter the if code 
    if(username === undefined){
        // console.log("The code is not defined"); //console print the value not return, so get two output first through console and second through here console.log(userLoggedIn("Hitesh"))
        return `The code is not defined`
    }else{
        return `This is ${username} and he want to print him name`
    }
}
console.log(userLoggedIn("Hitesh"))




