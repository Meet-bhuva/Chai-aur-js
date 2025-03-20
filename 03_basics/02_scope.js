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
    // console.log("INNER", a)
}
console.log(a)
// console.log(b)
// console.log(c) // output is 30, so do not use var variable because it get value from if scope





//Parent chaild pase thi ice_cream no mangi sake jyare child parent pase thi mangi sake
function one(){   //Parent function
    const username = "MeetPatel"

    function two(){ //Child function
        const websiteName = "Toms-Globe"
        // console.log(username) //Child function can use value of parent function but parent can not use.
    }
    // console.log(websiteName)

    two()
}
one()



if (true){
    const userName = "BansuManiya"

    if(userName === "BansuManiya"){
        const webSite = " On instagram.com"
        // console.log( userName + webSite);
    }

    // console.log(webSite);
}
// console.log(userName)





//*********************************** There is two type of declaring variables  *****************************************/
// 1. As a normal form
// 2. As a variable form

// console.log(addOne(5)) // before initializing, it is runned 
function addOne(num){
    return num + 1
}


// console.log(addTwo(5)) // before initializing, it is not runned 
const addTwo = function(num){
    return num + 2
}
