// for in loop
// mostly used for giving value of objects
// for ( variable in Object){
// console,log(variable, Objects[variable])
// }

const games = {
    game1 : "cricket",
    game2 : "pikkle-ball",
    game3 : "foot-ball",
    game4 : "box-cricket"
}

for(const value in games){
    // console.log(value)
    // console.log(games[value])
    // console.log(`${value} is a ${games[value]}`)
}


// for in loop == Array

const myArray = [ "cd", "ef", "gh", "ij", "kl"]
for(const val in myArray){
    // console.log(myArray[val])
}