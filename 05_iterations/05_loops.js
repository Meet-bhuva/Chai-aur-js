// for each loop

// Array
// Array.forEach ( function (val) {
// console.log(val)
// } )

const arr = ["ab", "cd", "ef", "gh"]

arr.forEach( function(val){
// console.log(val)
})

arr.forEach( (val) => {
    // console.log(val)
})


function printMe(item){
    // console.log(item)
}
arr.forEach(printMe) //Only give refference of function, not give executive function like a printeMe()


arr.forEach( (item, index, arr)=>{
// console.log(item, index, arr)
})


//Object

const obj = [
    {
        lanuageName : "Javascript",
        lanuageFile : "JS"
    },
    {
        lanuageName : "Python",
        lanuageFile : "PY"
    },
    {
        lanuageName : "java",
        lanuageFile : "java"
    },
]

obj.forEach( (val)=>{
// console.log(val)
// console.log(val.lanuageName, val.lanuageFile)
})