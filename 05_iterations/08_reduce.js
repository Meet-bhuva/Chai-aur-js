// reduce method

const myNumber = [10, 20, 30, 40, 50]

// const myTotal = myNumber.reduce(function (acc, currval) { // acc start with 0, when currval start with 10
//     console.log(`acc : ${acc}, currval : ${currval}`); 
//     return acc + currval;
// }, 0)//here 0 works for saying acc to start with 0

// const myTotal = myNumber.reduce( (acc, currval) => acc + currval, 4) 


const myCart = [
    { itemName : "js course",
     itemPrice : 1233
    },
    { itemName : "js course",
     itemPrice : 1234
    },
    { itemName : "js course",
     itemPrice : 1235
    },
    { itemName : "js course",
     itemPrice : 1236
    },
]

const myTotal = myCart.reduce( (acc, price) => acc + price.itemPrice, 0 )
console.log(myTotal);

