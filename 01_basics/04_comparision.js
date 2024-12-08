console.log("2" > 1) //both data-type is not same
console.log("02" > 1) //both data-type is not same

// equality check(==)  and comparision(<, >. =>, <=) are working different  
// Sometime comparision convert the value in NaN or 0
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

// (===) check strickly it checked both value and data-type   
// console.log("2" === 2) //output is false 