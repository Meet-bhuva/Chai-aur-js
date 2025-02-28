const userEmail = "M@eetBhuva@gmail.com"

if(userEmail){
    console.log("Got user's email")
}else{
    console.log("can not find user email address")
}

//Falsy values : false, '', "",  0, -0, BigInt 0n, null, undefine, NaN
//Truthy values : "0", 'false', " ", [], {}, function(){}

const emptyArray = []
if(emptyArray.length === 0){
    console.log("Array is empty")
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}