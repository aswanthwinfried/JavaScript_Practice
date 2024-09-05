// Higher Order Function

// What is a Higher Order Function?
// Higher order functions are functions that operate on other functions,
// either by taking them as arguments or by returning them. In simple words
// A Higher-Cruer function is a function that receives a function as an
// argument of returns the function as output.

// let arr = [1,2,3,4,5];
// let sqArr=[];
// for(let i=0;i<arr.length;i++){
//     sqArr.push(arr[i]*arr[i]);
// }
// console.log(sqArr);


// map
//Map will loop through every elemet of your array and will perform specific operations that you have Provided
// Map method will always return you a new array with your results

const num =[1,2,3,4,5];
const squaredNum = num.map(function(n){
    return n*n;
})

console.log(squaredNum);
//////

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtoDollar = 80;

const transactionsTOdollar = transactions.map(function(amount){
    return (amount/inrtoDollar);
})

console.log(transactionsTOdollar); //Map will Return New Array



//ForEach  //Does not return anything 


const transactionsTOdollar1 = transactions.forEach(function(amount){
    console.log(amount/inrtoDollar);
})






