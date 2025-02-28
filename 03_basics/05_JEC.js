//Javascript Execution Context
// 1. {} -> This is the globle EC  //This keyword help to find globle EC
// 2. Function Execution Context

//Code run in Two phases 
// 1. Memory Creation Phase -> For store value 
// 2. Execution Phase ->Execution stored value 

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2;
    return total ;
}
let result1 = addNum(val1, val2)
let result2 = addNum(50, 25)
//Declaration of code in Memory phase
/* val1 = undefine
   val2 = undefine
   addNum = defination, from line no. 11 to 14
   result1 = undefine
   result2 = undefine
*/

//Declaration of code in Execution Phase
/*val1 <- 10
  val2 <- 5
  addNum = new variable environment + execution thred ->
            1.Memory phase
            2.Execution Context

            1.val1 -> undefine
              val2 -> undefine
              Total -> undefine

            2.val1 <- 10  
              val2 <- 5
              Total <- 15 //Total value go into Globle EC
              result1 = 15
             
            result2 = addNum = new variable environment + execution thred ->
            1.Memory phase
            2.Execution Context

            1.val1 -> undefine
              val2 -> undefine
              Total -> undefine

            2.val1 <- 50  
              val2 <- 25
              Total <- 75 //Total value go into Globle EC
              result2 = 75
*/

//**************************** CALL STACK ********************************/
