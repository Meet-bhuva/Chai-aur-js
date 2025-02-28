const user = {
    userName : "meetPatel",
    userId : "@1213",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to my repo`) //this keyword is used to bring current context, from 1 to 9 line is current context 
        // console.log(this)// This keyword give evry value from the their context 
    }
}
// user.welcomeMessage()
// user.userName = "bansuManiya"
// user.welcomeMessage()

// console.log(this) //output is {} because of body has a object


// output is undefine
// const func = function(){
    //   const value = "Meet"
    //   console.log(this.value)
    // }
    // func()
    
    
// output is undefine
// const func = ()=>{
//   const value = "Meet"
//   console.log(this.value)
// }
// func()


//Arrow function

//1st method 
// const addTwo = (num1 , num2) => {
//   return num1 + num2;
// }

//2nd method
// const addTwo = (num1 , num2) => num1 + num2;

//3rd method, most important for react j.s
// const addTwo = (num1 , num2) => (num1 + num2);


//if want to returen object from the arrow function, have to use ()
// const addTwo = (num1, num2) => ({username : "Meetbhuva"})

console.log(addTwo(2, 5))