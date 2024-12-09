/***************************************************** Number ***************************************************************/
let score = 400
// console.log(score)

let scoreTwo = new Number("12345")// Second way to define it
// console.log(scoreTwo)

// console.log(scoreTwo.toString())
// console.log(scoreTwo.toString().length)

// console.log(scoreTwo.toFixed(1))//It gives output after point

let value = 7052.85
// console.log(value.toPrecision(3))

let hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))//count how many 0 in value //'en-IN' mean indian currency value


/***************************************************** Maths ***************************************************************/
// Properties mean, without breakets()
// function mean, with breakets()

// console.log(Math)

// console.log(Math.abs(-4)) //it help to convert nagetive value to positive
// console.log(Math.round(4.6)) // 5
// console.log(Math.ceil(4.2)) //Take heighest - 5
// console.log(Math.floor(4.9)) //Take lowest - 4
// console.log(Math.sqrt(25))
// console.log(Math.min(9,8,2,7,6,1,0,9)) // give lowest number
// console.log(Math.max(9,8,2,7,6,1,0,9)) // give heighest number

// console.log(Math.random())
// console.log(Math.random()*10) //Output between 0 to 9
// console.log((Math.random()*10) + 1) //Output between 1 to 10
// console.log(Math.round(Math.random()*10)) //Output between 0 to 10

let min = 10;
let max = 20;

console.log(Math.floor((Math.random() * (max - min + 1)) + min)) // Output between 10 to 20