//******************** 1st method of promise / with generate a variable ********************************/

// const promise = new Promise((resolve, reject) => {
//     //Do Async task
//     //DB calls, Cryptography, Network related work
//     setTimeout(function(){
//         console.log("Hello here run is promises")
//         resolve()
//     }, 1000)
// });

// promise.then(  //Here then is used for resolve option because of promises give two option 1.resolve 2.reject //If used then(),have to add resolve() in upper SetTimeout
// function(){
//     console.log("Hello here run is resolve option")
// }
// )

//******************** 2nd method of promise / without generate variable *****************************/

// new Promise((resolve, reject) => {
//  setTimeout(()=>{
//     console.log("Hello here run is promises")
//     resolve()
//  }, 1000)
// }).then(function(){
//     console.log("Hello here run is resolve option")
// })

//******************** 3rd method of promise / pass parameter/ parameter type always of Array, Objects *********/

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//     console.log("Hello here run is promisesThree")
//     resolve({username : "Meet", password : "1234"})
//     }, 1000)
// })

// promiseThree.then(function(data){
//     console.log("Hello here run is resolve option", data)
// })

//******************** 4th method of promise/pass parameter and catch error / can return perticulare value  *********/

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const err = true;
//     //   const err = false;
//     if (!err) {
//       console.log("Hello here run is promisesFour");
//       resolve({ username: "Meet", password: "1234" });
//     } else {
//       reject("ERROR : Something went wrong");
//     }
//   }, 2000);
// });

// promiseFour
//   .then(function (data) {
//     console.log("Hello here run is resolve option", data);
//     return data.username;
//   })
//   .then((user) => {  //Here 2nd then is chaining of 1st then
//     console.log("Hello here run is user", user);
//   })
//   .catch(function (error) {
//     console.log("Hello here run is catch option", error);
//   }).finally(()=>{
//     console.log("The promise is either resolve or reject")
//   }) //Finally is used for always run after then and catch, When all code runned then finally run

//******************** 5th method of promise/ use async and await insted of then and catch*********/

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const error = true;
//     if (!error) {
//       console.log("Hello here run is promisesFive");
//       resolve({ username: "Meet", password: "12345" });
//     } else {
//       reject("ERROR : Something went wrong");
//     }
//   }, 1000);
// });

// //asyn and await is a same of then and catch but it can not handle error like catch, only handle resolve option
// // async function consumePromise(){
// //   const response = await promiseFive; //await is a keyword which is used to get value from promiseFive
// //     console.log(responce);
// // }
// // consumePromise(); //Here consumePromise is a function which is used for call the promiseFive function

// //if i want to handle error so i have to use try or catch block

// async function consumePromises(){
// try{
// const response = await promiseFive;
// console.log(response);
// }catch(err){ //Here need to pass parameter for catch error
//   console.log(err);
// }
// }

// consumePromises();

//***************************** fetch API help of async and await *****************/

// async function consumeAPI() {
//   try {
//     const newAPI = await fetch("https://api.github.com/users/Meet-Bhuva");
//     //Fetch upi is used for get the data from API
//     const data = await newAPI.json();
//     //Here json is used for convert the data in json format like string to json and await is
//     //help to increase speed to convert data in json
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// consumeAPI();

//***************************** fetch API help of then and catch *****************/

fetch("https://api.github.com/users/Meet-Bhuva")
  .then((data) => {
    return data.json();
  })
  .then((finalData) => {
    console.log(finalData);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolve or reject");
  }); //Here then is used for resolve option, catch is used for error handling, finally is used for always run after then and catch
