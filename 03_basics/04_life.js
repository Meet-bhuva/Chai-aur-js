// Imediately Invoked Function Expression (IIFE)

(function chai(){ //Named IIFE
    console.log("DB CONNECTED")
})(); //use semi-column compulsory 

((nem) => { //Unamed IIFE
    console.log(`DB CONNECTED ${name}`)
})("meet")
//()() here used 2 parenthiesis, 1st is used for function defination and 2nd is used for function execution