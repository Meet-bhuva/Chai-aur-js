// {} = scope
//Function name(){} //That is function scope
//if(){} //That is if/else scope


//block scope and global scope 
//block scope can get global scope value

// var c = 300  //global scope
let a = 300
if (true) {    //block scope
    let a = 10; //let do not exit from if scope
    const b = 20; //const do not exit from if scope
    // var c = 30; // When var exit from if scope
    console.log("INNER", a)
}
console.log(a)
// console.log(b)
// console.log(c) // output is 30, so do not use var variable because it get value from if scope