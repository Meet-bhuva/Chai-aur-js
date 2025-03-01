// For loop

// for(New variable; Conditions; Increasing Var){
// }

for (let i = 0; i < 10; i++) {
    let index = i + 1;
    if (index == 5) {
        // console.log("5 is the best number")
    }
    // console.log(`${index}. Hello`)
}


for (let i = 0; i < 5; i++) {
    // console.log(`${i}. Outer loop`)
    for (let j = 0; j <= 5; j++) {
        // console.log(`${j}. Inner loop, ${i} inner loop`)
    }
}


for (let i = 1; i <= 10; i++) {
    // console.log(`${i}. Outer loop`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}


let myArray = ["Meet", "om", "trushant", "parikshit"]
// console.log(myArray.length)

for(let i=0; i<myArray.length; i++){
    let current = myArray[i]
    // console.log(i)
    // console.log(current)
}


/************** Break and Continue *************/

for (let index = 1; index <=20; index++) {
    if (index == 5) {
        // console.log("Number 5 is dettected");
        break;
    }
    // console.log(`Value of i is ${index}`)    
}


for (let index = 1; index <=20; index++) {
    if (index == 5) {
        // console.log("Number 5 is dettected");
       continue;
    }
    if (index > 5 && index <15) {
        // console.log("Numbers are dettected");
       continue;
    }
    // console.log(`Value of i is ${index}`)    
}