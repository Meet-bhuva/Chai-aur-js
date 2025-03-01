const arr = ["ab", "cd", "ef", "gh"]

arr.forEach( (item) => {
    // console.log(item)
})



// .filter for return value

// Array
// Variable = Array.filter ( (num) => Conditions )
// console.log(Variable)

const num = [1, 2, 3, 4, 5, 6]

// const newNum = num.filter( (val)=> val )
// const newNum = num.filter( (val)=> val > 2 )
// console.log(newNum)


const secNum = num.filter( (val)=> { // if i want to use scope{}, so i have to use return keyword                          
   return val > 2
} )
// console.log(secNum)



//forEach loop for return value
const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num2 = []

num1.forEach( (val) => {
//    num2.push(val)
 if(val > 3){
    num2.push(val)
 }
})
console.log(num2)