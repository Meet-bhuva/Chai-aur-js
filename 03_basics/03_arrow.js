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



//*************** I can not use this keyword in normal function, use only in Arrow function and object */